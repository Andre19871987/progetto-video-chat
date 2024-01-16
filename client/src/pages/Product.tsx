import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { Product } from '../types/entities';
import { ProductUpdateQuantityForm } from '../components/forms/ProductUpdateQuantityForm';
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

export const productLoader: LoaderFunction = async ({ params }) => {
  const productId = params.productId !== undefined ? parseInt(params.productId) : undefined;
  const productsResponse = await fetch('https://localhost:8080/rest/product/all', {
    credentials: 'include'
  });
  const products: Product[] = await productsResponse.json();

  const product = products.find((product) => product.id === productId);
  if (!product) {
    throw new Error(`Product ${params.productId} not found`);
  }
  return product;
};

export default function ProductPage() {
  const product = useLoaderData() as Product;
  const websocket = useWebSocket('wss://localhost:8080/product', {
    share: true,
    onMessage: (event) => {
      console.log(event.data);
    }
  });

  return (
    <div>
      <p>{product.name}</p>
      <p>Quantità: {product.quantity}</p>
      <ProductUpdateQuantityForm id={product.id} />
    </div>
  );
}
