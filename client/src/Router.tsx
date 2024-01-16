import { Dispatch, useContext } from 'react';
import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import Logout from './pages/Logout';
//import UserPage, { userLoader } from './pages/User';
import UserListPage, { userListLoader } from './pages/UserList';
import ProfilePage from './pages/Profile';
import { LoginContext } from './contexts/LoginContext';

const loggedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'profile',
        element: <ProfilePage />
      },
      {
        path: 'user',
        element: <UserListPage />,
        loader: userListLoader
      },
      {
        path: 'logout',
        element: <Logout />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
];

const notLoggedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
];

export default function Router() {
  const { loggedUser } = useContext(LoginContext);

  const router = createBrowserRouter(loggedUser ? loggedRoutes : notLoggedRoutes);
  return <RouterProvider router={router} />;
}
