import { Link, Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../context/ContextProvider"

const DefaultLayout = () => {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to={"/login"} />;
    }

    const logoutHandler = () => { }

    return (
        <>
            <header>
                <div className="container">
                    <h1>User List</h1>
                    <div className="button-container">
                        <div>ahmed</div>
                        <button className="button" onClick={logoutHandler}>logout</button>
                    </div>
                </div>
            </header>
            <main>
                <aside>
                    <div><Link to={"/"}>home</Link></div>
                    <div><Link to={"/users"}>Users</Link></div>
                    <div><Link to={"/dashboard"}>dashboard</Link></div>
                </aside>
                <div>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default DefaultLayout