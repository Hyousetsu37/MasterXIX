import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './providers/AppProvide';
import { appRouter } from './providers/router';
export const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={appRouter} />
    </AppProvider>
  );
};
