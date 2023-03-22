import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Profile = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Signup onFormSwitch={toggleForm} />
      )}
    </>
  );
};

export default Profile;
