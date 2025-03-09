import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { UserState, selectUser } from "@/features/userSlice"

interface ProtectedProps {
  to: string;
  role: string;
}

const ProtectedRoute = (props: ProtectedProps) => {
  const user: UserState = useSelector(selectUser);
  const { to, role } = props;

  if (role !== user.role) {
    return <Navigate to={to} replace />
  }

  return <Outlet />

}

export default ProtectedRoute