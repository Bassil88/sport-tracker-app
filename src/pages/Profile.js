import React from 'react';

// TODO:
// Replace mock profile data with user information
// fetched from the ASP.NET Core API.

const mockUser = Object.freeze({
  name: 'Bassil Edelbi',
  age: 35,
});

const Profile = () => {
  return (
    <section className="m-4 rounded-xl bg-gradient-to-r from-sky-900 via-gray-900 bg-opacity-80 p-8 text-white">
      <h1 className="mb-8 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
        User Profile
      </h1>

      <div className="space-y-4 text-lg">
        <p>
          <span className="font-semibold">Name:</span> {mockUser.name}
        </p>

        <p>
          <span className="font-semibold">Age:</span> {mockUser.age}
        </p>
      </div>
    </section>
  );
};

export default Profile;