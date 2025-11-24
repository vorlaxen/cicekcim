import React, { lazy } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const NotFound = lazy(() => import('@/pages/Status/NotFound'));
const Forbidden = lazy(() => import('@/pages/Status/Forbidden'));

const RedirectWithNFP: React.FC = () => {
  const location = useLocation();
  return <Navigate to={`/404?source=${encodeURIComponent(location.pathname)}`} replace />;
};

export const errorRoutes = [
  {
    path: '/404',
    children: [{ index: true, element: <NotFound /> }],
  },
  {
    path: '/403',
    children: [{ index: true, element: <Forbidden /> }],
  },
  {
    path: '*',
    element: <RedirectWithNFP />,
  },
];
