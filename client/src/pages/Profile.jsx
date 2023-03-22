import React, { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/Signup";
import ProfileSingle from "../components/ProfileSingle";
import Auth from "../utils/auth";

const Profile = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      {Auth.loggedIn() ? (
        <div>
          {/* if logged in display profilesingle, if not display login/signup forms */}
          <ProfileSingle />
        </div>
      ) : (
        <div>
          {currentForm === "login" ? (
            <Login onFormSwitch={toggleForm} />
          ) : (
            <SignUp onFormSwitch={toggleForm} />
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
