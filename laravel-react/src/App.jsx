import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Users from "./pages/Users";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>User List</h1>
        </div>
      </header>
      <main>
        <aside>
          <div>link</div>
          <div>link</div>
        </aside>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </main>
      <footer className="footer container">
        &copy;2024 by <span>ahmed raouane</span>. All rights reserved.
      </footer>
    </div>
  )
}

