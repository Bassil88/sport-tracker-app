import React from 'react';

const Profile = () => {
  // Fetch user data from local storage or any other source
  const userData = {
    name: 'John Doe',
    age: 30,
    // Other user information
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      {/* Render other user information */}
    </div>
  );
};

export default Profile;
