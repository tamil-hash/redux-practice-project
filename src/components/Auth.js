import { useEffect } from "react";
import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../store/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userName);
  const password = useSelector((state) => state.auth.password);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const isError = useSelector((state) => state.auth.isError);

  const validateLoginForm = (e) => {
    e.preventDefault();
    if (userName !== "" && password !== "") {
      dispatch(authActions.login());
    } else {
      dispatch(authActions.showError("please Enter your details"));
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(authActions.hideError());
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, isError, errorMessage]);

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={validateLoginForm}>
          <div className={classes.control}>
            {isError && <h4>{errorMessage}</h4>}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) =>
                dispatch(authActions.setUserName(e.target.value))
              }
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) =>
                dispatch(authActions.setPassword(e.target.value))
              }
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
