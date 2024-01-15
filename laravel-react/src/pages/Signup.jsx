import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../context/ContextProvider";

const Signup = () => {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirm = useRef();

    const [err, setErr] = useState(null);

    const { setUser, setToken } = useStateContext();

    const submitHandler = (ev) => {
        ev.preventDefault();

        const payload = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            confirmPassword: passwordConfirm.current.value
        }

        axiosClient.post("/signup", payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token)
            })
            .catch(err => {
                const { response } = err;

                if (response && response.status === 422) {
                    setErr(response.data.err);
                }
            })
    }

    return (
        <div className="container">
            <h2 className="title">signup</h2>
            {err && <div>
                {Object.keys(err).map(key => (
                    <p key={key}>{err[key][0]}</p>
                ))}
            </div>}
            <form className="input-container" onSubmit={submitHandler}>
                <input ref={name} type="text" placeholder="your name" />
                <input ref={email} type="email" placeholder="your email" />
                <input ref={password} type="password" placeholder="password" />
                <input ref={passwordConfirm} type="password" placeholder="confirm password" />
                <button type="submit">signup</button>
            </form>
            <div className="msg">
                <p>allreaddy have an account? <Link to={"/login"}>login</Link></p>
            </div>
        </div>
    )
}

export default Signup