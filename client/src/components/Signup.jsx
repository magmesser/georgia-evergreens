import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const SignUp = (props) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Sign Up</h2>
      <div>
        {data ? (
          <p>Success!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input
              value={formState.name}
              onChange={handleChange}
              type="text"
              placeholder="your username"
              id="username"
              name="username"
            ></input>
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
            <button type="submit">Sign Up</button>
          </form>
        )}
        {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
      </div>
      <button onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default SignUp;
