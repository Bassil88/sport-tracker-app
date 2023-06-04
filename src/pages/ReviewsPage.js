import React from 'react';

const ReviewPage = () => {
  return (
    <section className="text-gray-400 body-font bg-gradient-to-r from-sky-900 via-gray-900 bg-opacity-80 rounded-xl m-4">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                src="https://cdn.pixabay.com/photo/2017/10/25/18/10/peer-review-icon-2888794_1280.png"
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                src="https://cdn.pixabay.com/photo/2017/10/25/18/10/peer-review-icon-2888794_1280.png"
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
              <p className="text-gray-500">UI Developer</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                src="https://cdn.pixabay.com/photo/2017/10/25/18/10/peer-review-icon-2888794_1280.png"
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
                h-12
              </p>
              <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewPage;