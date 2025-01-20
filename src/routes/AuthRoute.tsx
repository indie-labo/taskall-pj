
import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { UserState, selectUser } from "@/features/userSlice"
import { auth } from "@/lib/firebase"

interface AuthProps {
  to: string;
  isLoading: boolean;
}

const AuthRoute = (props: AuthProps) => {
  const location = useLocation();
  const user: UserState = useSelector(selectUser);
  const { to, isLoading } = props;

  if (isLoading) {
    return null;
  }

  if (!user.isLogin) {
    return <Navigate to={to} state={{ from: location.pathname }} replace />
  }

  return <Outlet />

}

export default AuthRoute