import { Navigate, Outlet, useLocation } from "react-router-dom"
import { auth } from "@/lib/firebase"

interface AuthProps {
  to: string;
  isLoading: boolean;
}

const AuthRoute = (props: AuthProps) => {
  const location = useLocation();
  const { to, isLoading } = props;
  console.log(location.pathname);
  if (isLoading) {
    return null;
  }

  if (!auth.currentUser) {
    return <Navigate to={to} state={{ from: location.pathname }} replace />
  }

  return <Outlet />

}

export default AuthRoute