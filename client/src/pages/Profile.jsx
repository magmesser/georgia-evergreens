import React, { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/Signup";
import ProfileSingle from "../components/ProfileSingle"

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
        <SignUp onFormSwitch={toggleForm} />
      )}

      <ProfileSingle />
    </>
  );
};

export default Profile;
