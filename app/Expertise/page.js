"use client";
import React, { useState, useEffect } from "react";
import Loader from "/components/Loader";

const SectionWithBackground = () => {
  const smallPhoneFontSize = "12px";

  // For Loader
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Simulating a delay of 2 seconds
      await new Promise((resolve) => setTimeout(resolve));
      setLoading(false); // Set loading to false when data is fetched
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <Loader />} {/* Show the loader if loading is true */}
      <div>
        <section className="relative">
          <div
            className="bg-contain bg-center h-64 sm:h-80 md:h-96 lg:h-120 xl:h-144"
            style={{ backgroundImage: `url('images/expertise.png')` }}
          ></div>
          <div className="flex flex-col justify-center items-start text-white absolute inset-0 p-8 sm:p-16 md:p-24 lg:p-32 xl:p-40">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              AV Simulator
            </h1>
            <p className="w-1/2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-justify leading-relaxed">
              Vehicle that is equipped with technology capable of operating the
              vehicle without direct driver control.
            </p>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
            <div className="mb-6 text-2xl font-semibold">About Us</div>
            <img
              src="/images/av.png"
              alt="Flowbite Logo"
              style={{ maxWidth: "60%", height: "auto" }}
            />

            <div
              className="bg-gray-100 shadow mt-8 p-4  w-full mx-auto border-l-4 text-justify border-gray-800 pl-4"
              style={{ fontSize: smallPhoneFontSize }}
            >
              A vehicle simulator for autonomous driving research, built on top
              of Carla Simulator.
            </div>

            <div
              className="bg-gray-100 shadow mt-2 p-4 text-justify w-full mx-auto border-r-4 border-gray-800 pl-4"
              style={{ fontSize: smallPhoneFontSize }}
            >
              It provides a realistic environment for developing and testing
              algorithms related to autonomous vehicles.
            </div>

            <div
              className="bg-gray-100 shadow mt-2 p-4 text-justify w-full mx-auto border-l-4 border-gray-800 pl-4"
              style={{ fontSize: smallPhoneFontSize }}
            >
              It offers a high-fidelity simulation environment with realistic
              physics, graphics, and sensor models, making it a valuable tool
              for algorithm evaluation and training.
            </div>

            <div
              className="bg-gray-100 shadow mt-2 p-4 text-justify w-full mx-auto border-r-4 border-gray-800 pl-4"
              style={{ fontSize: smallPhoneFontSize }}
            >
              Built on the Unreal Engine, the AV simulator provides a
              customizable setting where users can create various scenarios,
              including different road networks, traffic patterns, and weather
              conditions.
            </div>

            <div
              className="bg-gray-100 shadow mt-2 p-4 text-justify w-full mx-auto border-l-4 border-gray-800 pl-4"
              style={{ fontSize: smallPhoneFontSize }}
            >
              It supports a range of sensors such as lidar, radar, & cameras,
              enabling developers to test perception algorithms effectively.
              With its Python API and active community support, CARLA Simulator
              has become a popular choice for researchers & developers in the
              field of autonomous vehicles.
            </div>
          </div>
        </section>

        <section className="w-full mx-auto ">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-700 mt-10 lg:pl-8 mb-8 ml-8">
            Features of AV Simulator
          </h1>

          <div
            className="flex flex-wrap mx-auto justify-center"
            style={{ width: "80%" }}
          >
            <div className="w-full mx-auto shadow sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
              <img
                src="/images/simulator1.png"
                alt="Image 1 description"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full mx-auto shadow sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
              <img
                src="/images/simulator2.png"
                alt="Image 2 description"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full mx-auto shadow sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
              <img
                src="/images/simulator3.png"
                alt="Image 3 description"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full mx-auto shadow sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
              <img
                src="/images/simulator4.png"
                alt="Image 4 description"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full mx-auto shadow sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
              <img
                src="/images/simulator5.png"
                alt="Image 5 description"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full mx-auto shadow sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
              <img
                src="/images/simulator6.png"
                alt="Image 6 description"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full mx-auto shadow sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
              <img
                src="/images/simulator7.png"
                alt="Image 7 description"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full mx-auto shadow sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
              <img
                src="/images/simulator8.png"
                alt="Image 8 description"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className=" w-full  mx-auto ">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-700 mt-10 lg:pl-8 mb-8 ml-8">
            Use of CARLA
          </h2>

          <div
            className="flex flex-wrap mx-auto mb-10 justify-center"
            style={{ width: "80%" }}
          >
            <div className="w-full shadow sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <img
                src="/images/carla1.png" // Replace with your image source
                alt="Image 1 description" // Replace with your image description
                className="max-w-full h-auto shadow" // Add shadow class for the image
              />
            </div>

            <div className="w-full shadow sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <img
                src="/images/carla2.png" // Replace with your image source
                alt="Image 2 description" // Replace with your image description
                className="max-w-full h-auto shadow" // Add shadow class for the image
              />
            </div>

            <div className="w-full shadow sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <img
                src="/images/carla3.png" // Replace with your image source
                alt="Image 3 description" // Replace with your image description
                className="max-w-full h-auto shadow" // Add shadow class for the image
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionWithBackground;
