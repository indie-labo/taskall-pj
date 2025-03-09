import { Navigate, Outlet } from "react-router-dom"
import { auth } from "@/lib/firebase"

interface AuthProps {
  to: string;
  isLoading: boolean;
}

const AuthRoute = (props: AuthProps) => {
  // const location = useLocation();
  const { to, isLoading } = props;
  // console.log(location.pathname);
  // console.log(auth.currentUser);
  if (isLoading) {
    return null;
  }
  if (!auth.currentUser || !auth.currentUser!.emailVerified) {
    return <Navigate to={to} replace={true} />
    // return <Navigate to={to} state={{ from: 'aaaa' }} replace={true} />
  }

  return <Outlet />

}

export default AuthRoute