import { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = (props: any) => {
  // let auth={'token': false}
  const location = useLocation();

  return (
    props.isAuthenticated ? 
    <Outlet /> : <Navigate to="/login" state={{ from: location }} />
  )
}
export default ProtectedRoute;