import { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = (props: any) => {
  // let auth={'token': false}
  const location = useLocation();

  if (!props.isAuthenticated) {
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    )
  }

  return (
    <Outlet />
  )
}
export default ProtectedRoute;