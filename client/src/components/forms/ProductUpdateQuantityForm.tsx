import { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router';

export interface ProductUpdateQuantityFormProps {
  id: number;
}

export const ProductUpdateQuantityForm = ({ id }: ProductUpdateQuantityFormProps) => {
  const [newQuantity, setNewQuantity] = useState(0);
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    const updateQuantityResponse = await fetch(`https://localhost:8080/rest/product/${id}`, {
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        quantity: newQuantity
      })
    });
    navigate('/product');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nuova Quantità</label>
      <input type="number" value={newQuantity} onChange={(event) => setNewQuantity(parseInt(event.target.value))} />
      <input type="submit" value="Modifica Quantità" />
    </form>
  );
};
