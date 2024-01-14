import { Link } from "react-router-dom";

const Login = () => {

  const submitHandler = (ev) => {
    ev.prentDefaulte();
  }

  return (
    <div className="container ">
      <h2 className="title">login</h2>
      <form className="input-container" onSubmit={submitHandler}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">login</button>
      </form>
      <div className="msg">
        <p>don&apos;t have an account? <Link to={"/signup"}>create account</Link></p>
      </div>
    </div>
  )
}

export default Login