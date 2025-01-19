
import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { UserState, selectUser } from "@/features/userSlice"

interface AuthProps {
  to: string;
}

const AuthRoute = (props: AuthProps) => {
  const location = useLocation();
  const user: UserState = useSelector(selectUser);
  const { to } = props;
  
  if (!user.isLogin) {
    return <Navigate to={to} state={{ from: location.pathname }} replace />
  }

  return <Outlet />

}

export default AuthRoute