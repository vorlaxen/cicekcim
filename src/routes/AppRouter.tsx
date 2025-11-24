import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoaderFallback } from '@/components/common/GlobalLoader';
import { errorRoutes } from './StatusRouter';
import { homeRoutes } from './HomeRouter';

const router = createBrowserRouter([
  ...homeRoutes,
  ...errorRoutes,
]);

const AppRouter: React.FC = () => (
  <Suspense fallback={<LoaderFallback />}>
      <RouterProvider router={router} />
  </Suspense>
);

export default AppRouter;
