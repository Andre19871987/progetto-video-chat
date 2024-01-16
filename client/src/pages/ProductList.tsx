import { LoaderFunction, useLoaderData, useNavigate } from 'react-router';
import { Product } from '../types/entities';
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

export const productListLoader: LoaderFunction = async () => {
  const productsResponse = await fetch('https://localhost:8080/rest/product/all', {
    credentials: 'include'
  });
  const prodotti = await productsResponse.json();
  return prodotti;
};

export default function ProductListPage() {
  const loadedProducts = useLoaderData() as Product[];
  const [products, setProducts] = useState(loadedProducts);
  const navigate = useNavigate();
  const websocket = useWebSocket('wss://localhost:8080/product', {
    share: false,
    onMessage: (event) => {
      console.log(event.data);
      const newProducts = [...products];
      const updatedProductMessage: { id: number; quantity: number } = JSON.parse(event.data);
      const updatedProduct = newProducts.find((product) => product.id === updatedProductMessage.id);
      if (updatedProduct !== undefined) {
        updatedProduct.quantity = updatedProductMessage.quantity;
      }
      setProducts(newProducts);
    }
  });

  const productsRows = products.map((product) => {
    return (
      <tr key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Quantità</th>
        </tr>
      </thead>
      <tbody>{productsRows}</tbody>
    </table>
  );
}
