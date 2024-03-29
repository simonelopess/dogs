import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../../UserContext";

const ProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext);

  return login ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
