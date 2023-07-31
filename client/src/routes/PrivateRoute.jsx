import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ScaleLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="flex items-center justify-center h-screen">
      <ScaleLoader color="#136734" size={150} />
    </div>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;