import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';

const ProfileSingle = () => {
  const { username: userParam  } = useParams();

  const { loading, data } = useQuery(QUERY_USER , {
    variables: { username: userParam },
  });

  const user = data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.id) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {user.username}'s profile.
        </h2>

        <div>
          <h2>Your Orders</h2>
          <p>Coming Soon!</p>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileSingle;
