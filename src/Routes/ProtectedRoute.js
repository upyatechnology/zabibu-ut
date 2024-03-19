import {  Navigate, Outlet } from 'react-router-dom';
import  {useAuth}  from '../Components/Auth';

const ProtectedRoute = ({ children, roles = [] }) => {
    debugger;
  const { user } = useAuth(); // Replace with your auth context hook

  if (!user || !user.isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  // Check if user has any of the required roles
  const hasRequiredRole = roles.some(role => user.roles.includes(role));

  if (!hasRequiredRole) {
    return <Navigate to="/login" replace />; // Redirect to unauthorized page
  }

  return children || <Outlet />; // Render child component or outlet for nested routes
};

export default ProtectedRoute;
