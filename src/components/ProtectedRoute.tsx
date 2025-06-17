
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';

type UserRole = 'customer' | 'staff' | 'owner' | 'super_admin';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
  requireAuth?: boolean;
}

const ProtectedRoute = ({ 
  children, 
  allowedRoles, 
  requireAuth = true 
}: ProtectedRouteProps) => {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (requireAuth && !user) {
    return <Navigate to="/auth" replace />;
  }

  if (allowedRoles && profile && !allowedRoles.includes(profile.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
