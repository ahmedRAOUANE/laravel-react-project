import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Users from "./pages/Users";
import NoFound from "./pages/NoFound";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home"

export default function App() {
  const logoutHandler = () => { }
  return (
    <div>
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
        <Routes>
          <Route path="/" element={<DefaultLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/" element={<GuestLayout />} >
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route path="*" element={<NoFound />} />
        </Routes>
      </main>
      <footer className="footer container">
        &copy;2024 by <span>ahmed raouane</span>. All rights reserved.
      </footer>
    </div>
  )
}

