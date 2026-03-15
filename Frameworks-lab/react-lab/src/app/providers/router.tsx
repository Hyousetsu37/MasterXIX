import { useSessionModel } from '@entities/session/model/sessionContext';
import { LoginPage } from '@pages/login';
import { OrganizationPage } from '@pages/organization/ui/OrganizationPage';
import { MainLayout } from '@widgets/layout/ui/MainLayout';
import type { ReactNode } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

const MemberDetailsPage = () => {
  return <h1>Organization</h1>;
};

const ProtectedRoute = () => {
  const { isAuthenticated } = useSessionModel();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

const PublicOnlyRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useSessionModel();
  if (isAuthenticated) {
    return <Navigate to="/organization" replace />;
  }
  return <>{children}</>;
};

export const appRouter = createBrowserRouter([
  {
    path: '/login',
    element: (
      <PublicOnlyRoute>
        <LoginPage />
      </PublicOnlyRoute>
    ),
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: '/', element: <Navigate to="/organization" replace /> },
          { path: '/organization/*', element: <OrganizationPage /> },
          { path: '/member/:username', element: <MemberDetailsPage /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <div>Pagina no encontrada (404)</div>,
  },
]);
