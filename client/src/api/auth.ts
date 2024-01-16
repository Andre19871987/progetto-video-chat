import { User } from '../types/entities';

export async function login(email: string, password: string) {
  const response = await fetch('https://localhost:8080/rest/user/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
}

export async function logout() {
  const response = await fetch('https://localhost:8080/rest/user/logout', {
    method: 'POST',
    credentials: 'include'
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
}

export async function getLoggedUser() {
  const response = await fetch('https://localhost:8080/rest/user', {
    method: 'GET',
    credentials: 'include'
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  const loggedUser = await response.json();
  return loggedUser as User;
}
