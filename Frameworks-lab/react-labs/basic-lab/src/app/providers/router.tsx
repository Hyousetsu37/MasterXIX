import { CharacterListPage } from '@pages/CharacterListPage';
import { LoginPage } from '@pages/LoginPage';
import { MainLayout } from '@widgets/layout/MainLayout';
import { MemberDetailPage } from '@pages/MemberDetailPage';
import { MemberListPage } from '@pages/MemberListPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { CharacterDetailPage } from '@pages/CharacterDetailPage';

export const appRouter = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  {
    element: <MainLayout />,
    children: [
      { path: '/members', element: <MemberListPage /> },
      { path: '/characters', element: <CharacterListPage /> },
      { path: '/member/detail/:id', element: <MemberDetailPage /> },
      { path: '/character/detail/:id', element: <CharacterDetailPage /> },
    ],
  },

  { path: '*', element: <Navigate to={'/login'} replace /> },
]);
