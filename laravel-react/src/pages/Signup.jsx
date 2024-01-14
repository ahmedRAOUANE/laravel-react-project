import { Link } from "react-router-dom";

const Signup = () => {
    const submitHandler = (ev) => {
        ev.prentDefaulte();
    }
    return (
        <div className="container">
            <h2 className="title">signup</h2>
            <form className="input-container" onSubmit={submitHandler}>
                <input type="text" placeholder="your name" />
                <input type="email" placeholder="your email" />
                <input type="password" placeholder="password" />
                <input type="password" placeholder="confirm password" />
                <button type="submit">signup</button>
            </form>
            <div className="msg">
                <p>allreaddy have an account? <Link to={"/login"}>login</Link></p>
            </div>
        </div>
    )
}

export default Signup