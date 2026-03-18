import { DetailPage } from '@pages/DetailPage';
import { ListPage } from '@pages/ListPage';
import { LoginPage } from '@pages/LoginPage';
import { RickYMortyPage } from '@pages/RickYMortyPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const appRouter = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/list', element: <ListPage /> },
  { path: '/detail/:id', element: <DetailPage /> },
  { path: '/rickymorty', element: <RickYMortyPage /> },
  { path: '*', element: <Navigate to={'/login'} replace /> },
]);
