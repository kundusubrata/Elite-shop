import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoginMutation } from "../../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [debouncedEmail, setDebouncedEmail] = useState("");
  const [debouncedPassword, setDebouncedPassword] = useState("");

  const navigate = useNavigate();

  const [login, { isLoading, error, }] = useLoginMutation();
  const { isAuthenticated } = useSelector((state) => state.auth);


  useEffect(() => {
    const debounceTimeoutEmail = setTimeout(() => {
      setDebouncedEmail(email);
    }, 1000);

    return () => {
      clearTimeout(debounceTimeoutEmail);
    };
  }, [email]);

  useEffect(() => {
    const debounceTimeoutPassword = setTimeout(() => {
      setDebouncedPassword(password);
    }, 1000);

    return () => {
      clearTimeout(debounceTimeoutPassword);
    };
  }, [password]);

  useEffect(() => {
    if (isAuthenticated) {
        navigate("/");
      }
    if (error) {
      toast.error(error?.data?.message);
    }
    setEmail("");
    setPassword("");
  }, [error,isAuthenticated,navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      email: debouncedEmail,
      password: debouncedPassword,
    };

    login(loginData);
  };

  return (
    <>
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow rounded bg-body" onSubmit={submitHandler}>
            <h2 className="mb-4">Login</h2>
            <div className="mb-3">
              <label htmlFor="email_field" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password_field" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <a href="/password/forgot" className="float-end mb-4">
              Forgot Password?
            </a>

            <button
              id="login_button"
              type="submit"
              className="btn w-100 py-2"
              disabled={isLoading}
            >
              {isLoading ? "Authenticating..." : "LOGIN"}
            </button>

            <div className="my-3">
              <a href="/register" className="float-end">
                New User?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;