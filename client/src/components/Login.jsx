import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth-form-container">
      <h2>Log In</h2>
      <div>
        {data ? (
          <p>Success!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input
              value={formState.email}
              onChange={handleChange}
              type="email"
              placeholder="youremail@email.com"
              id="email"
              name="email"
            ></input>
            <label htmlFor="password">password</label>
            <input
              value={formState.password}
              onChange={handleChange}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            ></input>
            <button type="submit">Log In</button>
          </form>
        )}
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
      <button onClick={() => props.onFormSwitch("signup")}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
