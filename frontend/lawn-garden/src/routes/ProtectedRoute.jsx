import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

export default function ProtectedRoute() {
  const accessToken = useAuthStore((state) => state.accessToken);


  return accessToken ? <Outlet /> : <Navigate to="/" replace />;
}
