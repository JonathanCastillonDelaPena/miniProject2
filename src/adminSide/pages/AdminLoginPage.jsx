import React from "react";

const AdminLoginPage = () => {
  return (
    <main className="form-signin w-100 m-auto text-center">
      <form className="formLogin">
        <h1 className="m-0 py-5 display-5 font-weight-semi-bold">
          <span className="text-primary font-weight-bold border px-3 mr-1">
            VARATILYO
          </span>
        </h1>
        <h2 className="h3 mb-3 fw-normal">Please sign in</h2>

        <div className="form-floating">
          <input
            type="email"
            className="form-control border-dark"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control border-dark"
            id="floatingPassword"
            placeholder="Password"
          />
          <label>Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-50 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>

        <p className="mt-5 mb-3 text-muted">&copy; 2022–2023</p>
      </form>
    </main>
  );
};
export default AdminLoginPage;
