import { Link, Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../context/ContextProvider"

const DefaultLayout = () => {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to={"/login"} />;
    }
    return (
        <>
            <aside>
                <div><Link to={"/"}>home</Link></div>
                <div><Link to={"/users"}>Users</Link></div>
                <div><Link to={"/dashboard"}>dashboard</Link></div>
            </aside>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default DefaultLayout