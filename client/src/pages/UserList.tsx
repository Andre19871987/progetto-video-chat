import { LoaderFunction, useLoaderData, useNavigate } from 'react-router';
import { User } from '../types/entities';
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

export const userListLoader: LoaderFunction = async () => {
  const usersResponse = await fetch('https://localhost:8080/rest/user/all', {
    credentials: 'include'
  });
  const utenti = await usersResponse.json();
  return utenti;
};

export default function UserListPage() {
  const loadedUsers = useLoaderData() as User[];
  const [users, setUsers] = useState(loadedUsers);
  const navigate = useNavigate();
  const websocket = useWebSocket('wss://localhost:8080/user', {
    share: false,
    onMessage: (event) => {
      console.log(event.data);
      /*
      const newUsers = [...users];

      const updatedUserMessage: { id: number; quantity: number } = JSON.parse(event.data);
      const updatedUser = newUsers.find((user) => user.id === updatedUserMessage.id);
      if (updatedUser !== undefined) {
        updatedUser.quantity = updatedUserMessage.quantity;
      }
      setUsers(newUsers);
      */
    }
  });

  const usersRows = users.map((user) => {
    return (
      <tr key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>

        </tr>
      </thead>
      <tbody>{usersRows}</tbody>
    </table>
  );
}
