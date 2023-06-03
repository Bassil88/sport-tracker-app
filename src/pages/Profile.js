import React from 'react';

const Profile = () => {
  // Fetching user data from an API later!!!!
  const userData = {
    name: 'Bassil Edelbi',
    age: 35,
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
};

export default Profile;
