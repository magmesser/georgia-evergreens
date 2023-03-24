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
        <div className="grid place-items-center">
          {/* if logged in display profilesingle, if not display login/signup forms */}
          <ProfileSingle />
          <button
              className="[background-color:#a7d9d0] [color:#11402F] active:bg-neutral-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
              onClick={() => Auth.logout()}
            >
              Log Out
            </button>
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
