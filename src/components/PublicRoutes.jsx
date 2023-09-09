import { Navigate, Outlet } from "react-router-dom"

const PublicRoutes = ({ userLogged}) => {

    if (userLogged) {
        return <Navigate to="/" />
    } else {
        return <Outlet />
    }
}
export default PublicRoutes