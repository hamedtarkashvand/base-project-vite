import {FC} from 'react'
import {Navigate, Outlet} from 'react-router-dom'
interface protectedRouteProps {
  isPublic?: boolean
  isAuthorized: boolean
}

const ProtectedRoute: FC<protectedRouteProps> = ({isPublic, isAuthorized}) => {
  return isPublic || isAuthorized ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
