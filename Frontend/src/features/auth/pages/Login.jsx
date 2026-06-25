import { Link } from "react-router-dom";

import "../styles/login.scss";

function Login() {
  return (
    <main className="login">
      <section className="login__container">
        <header className="login__header">
          <h1 className="login__logo">
            SocialHub
          </h1>

          <p className="login__subtitle">
            Welcome back.
          </p>
        </header>

        <form className="login__form">
          <div className="login__field">

            <label htmlFor="email">
              Username or Email
            </label>

            <input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your username or email"
            />

          </div>

          <div className="login__field">

            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />

          </div>

          <button type="submit">
            Log In
          </button>

        </form>

        <button
          type="button"
          className="login__forgot-password"
        >
          Forgot Password?
        </button>

        <p className="login__footer">
          Don't have an account?

          <Link to="/register">
            Sign Up
          </Link>
        </p>

      </section>
    </main>
  );
}

export default Login;