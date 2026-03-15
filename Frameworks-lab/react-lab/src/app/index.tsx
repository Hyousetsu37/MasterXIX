import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './providers/AppProvider';
import { appRouter } from './providers/router';

export default function MyApp() {
  return (
    <AppProvider>
      <RouterProvider router={appRouter} />
    </AppProvider>
  );
}
