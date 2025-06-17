
import { useAuth } from '@/hooks/useAuth';
import CustomerDashboard from '@/components/dashboard/CustomerDashboard';
import StaffDashboard from '@/components/dashboard/StaffDashboard';
import OwnerDashboard from '@/components/dashboard/OwnerDashboard';
import SuperAdminDashboard from '@/components/dashboard/SuperAdminDashboard';
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
  const { profile, loading } = useAuth();

  if (loading || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const renderDashboard = () => {
    switch (profile.role) {
      case 'customer':
        return <CustomerDashboard />;
      case 'staff':
        return <StaffDashboard />;
      case 'owner':
        return <OwnerDashboard />;
      case 'super_admin':
        return <SuperAdminDashboard />;
      default:
        return <div>Role tidak dikenali</div>;
    }
  };

  return renderDashboard();
};

export default Dashboard;
