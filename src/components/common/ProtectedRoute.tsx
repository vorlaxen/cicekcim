import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { AppConfig } from '../../config/environmentConfig';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  allowedRoles?: number[];
}

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const { data, isAuthenticated, isAuthChecked, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthChecked && !loading && !isAuthenticated) {
      const timer = setTimeout(() => {
        const redirectUrl = encodeURIComponent(window.location.href);
        window.location.href = `${AppConfig.appAuthDomain}/sign-in/credentials?redirectUrl=${redirectUrl}`;
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, isAuthChecked, loading]);

  useEffect(() => {
    if (isAuthChecked && !loading && isAuthenticated) {
      if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(data?.user?.role)) {
        const redirectUrl = encodeURIComponent(window.location.href);
        window.location.href = `${AppConfig.appPanelDomain}/403?redirectUrl=${redirectUrl}`;
      }
    }
  }, [allowedRoles, data?.user?.role, isAuthChecked, loading, isAuthenticated, navigate]);

  if (!isAuthChecked || loading) return <div>Loading...</div>;
  if (!isAuthenticated) return null;

  if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(data?.user?.role)) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
