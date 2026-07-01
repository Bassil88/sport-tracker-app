import React from 'react';

// TODO:
// Replace mock reviews with data fetched from the ASP.NET Core API.

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    image:
      'https://img.freepik.com/premium-photo/young-asian-woman-isolated-chroma-key-background-making-gesture-being-late_1368-466915.jpg?w=2000',
    review:
      'A clean interface, useful statistics, and a simple workflow make this a great fitness tracking application.',
  },
  {
    id: 2,
    name: 'Michael Brown',
    role: 'Gym Member',
    image:
      'https://img.freepik.com/premium-photo/showing-thumbs-up-thumbs-down-difficult-choose-concept_1187-379396.jpg',
    review:
      'The workout planner keeps my training organized and motivates me to reach my weekly fitness goals.',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Personal Trainer',
    image:
      'https://img.freepik.com/free-photo/cheerful-young-woman-yellow-sweater-points-aside-copy-space-shows-cool-advertisement-against-blue-background_273609-34291.jpg?w=360',
      review:
      'FitTrack helped me stay consistent with my weekly workouts. The progress charts made it easy to monitor my improvements.',
  },
];

const ReviewsPage = () => {
  return (
    <section className="text-gray-400 body-font bg-gradient-to-r from-sky-900 via-gray-900 bg-opacity-80 rounded-xl m-4">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Community Reviews</h1>

        <div className="flex flex-wrap -m-4">
          {reviews.map((review) => (
            <div key={review.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  src={review.image}
                  alt={`${review.name} profile`}
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                />

                <p className="leading-relaxed">{review.review}</p>

                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>

                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  {review.name}
                </h2>

                <p className="text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
