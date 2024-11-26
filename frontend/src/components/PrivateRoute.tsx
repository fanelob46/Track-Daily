import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface RootState {
  auth: {
    userInfo: object | null; // Adjust the type as per your actual `userInfo` structure
  };
}

export const PrivateRoute: React.FC = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};
