"use client"
import React, { useState, useEffect } from "react";
import Loader from "/components/Loader";

const Details = () => {
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
        <section
          className="bg-gray-500 text-white flex flex-col justify-center
        items-center p-4 sm:p-8 md:p-12 lg:p-16"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4">
            Annotations
          </h1>
          <p className="leading-relaxed text-justify text-sm sm:text-xs md:text-sm pl-3 pr-3 lg:text-base xl:text-xl">
            Autonomous vehicles rely heavily on image recognition and perception
            to navigate and make decisions on the road. One of the key
            components of this technology is image annotation, which is the
            process of labeling and tagging images to provide context and
            meaning. Image annotation is critical for the development and
            training of autonomous vehicles, as it allows the vehicle to
            understand and interpret the environment around it.
          </p>
        </section>

        <div className="w-full p-4 flex items-center justify-center">
          <div className="w-full h-full overflow-hidden">
            <img
              src="/images/details.png" // Replace with the path to your image
              alt="Image Description"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className=" min-screen ">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-700 lg:pl-8 mb-4 ml-8">
            Data Collection Setup
          </h1>

          <div className="w-full p-6 flex items-center justify-center">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/images/collection.png" // Replace with the path to your image
                alt="Image Description"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-justify pl-6 pr-6 lg:pr-16 lg:pl-16 lg:w-90%">
            There are several types of sensors that are commonly used to capture
            images for autonomous vehicles that get mounted on the data
            collection vehicle as shown in above image, to capture the frames
            across the Identified City. All of these sensors work together to
            provide a comprehensive view of the vehicle's environment, enabling
            the vehicle to safely navigate and make decisions.
          </p>
        </div>

        <div className=" flex flex-col items-center justify-center mb-6 mt-10">
          <div className="bg-gray-200 ">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-500">
              Type of sensors used
            </h1>
          </div>
        </div>

        {/* Adding Different Cards */}

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mt-20 pl-4 pr-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="images/lidar.png"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Ouster LIDAR
                    </h1>
                    <p className="leading-relaxed mb-3">
                      LIDAR sensor uses lasers to measure the distance to
                      objects and create 3D maps of the vehicle's surroundings.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a
                        href="https://en.wikipedia.org/wiki/Lidar"
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Repeat the above content for other items as needed */}

              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="images/gps.png"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      GPS
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Global Positioning System sensors are used to determine
                      the vehicle's location and navigate.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a
                        href="https://en.wikipedia.org/wiki/Global_Positioning_System"
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Repeat the above content for other items as needed */}

              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="images/imu.png"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      IMU
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Inertial Measurement Unit is a device that uses
                      accelerometers and gyroscopes to track the vehicle's
                      orientation and movement.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a
                        href="https://en.wikipedia.org/wiki/Inertial_measurement_unit"
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Repeat the above content for other items as needed */}

              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="images/flir.png"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      FLIR Camera
                    </h1>
                    <p className="leading-relaxed mb-3">
                      FLIR camera is used to capture images. It detects tiny
                      differences in heat & displays them with color palettes
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a
                        href="https://en.wikipedia.org/wiki/Teledyne_FLIR"
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Repeat the above content for other items as needed */}

              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="images/velodyne.png"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Velodyne LIDAR
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Velodyne VLP-32C is an advanced LiDAR sensor that gives
                      high-resolution 3D point cloud data, long-range detection,
                      and a wide field of view.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a
                        href="https://en.wikipedia.org/wiki/Velodyne_Lidar"
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Repeat the above content for other items as needed */}
            </div>
          </div>
        </section>

        <section className="min-screen -mt-16 mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl text-blue-700 lg:pl-8 mb-4 ml-6">
            Types of Annotations
          </h1>

          <div className="annotation-type">
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black lg:pl-8 mt-4 mb-2 ml-6">
              Semantic Segmentation Annotation
            </h4>
            <p className="text-gray-700 leading-relaxed text-justify pl-6 pr-6 lg:pr-16 lg:pl-16 lg:w-90%">
              Semantic segmentation is valuable for understanding the drivable
              area and identifying various road elements, such as roads,
              sidewalks, and other regions in the scene. It allows the
              autonomous vehicle to distinguish between different types of
              surfaces and navigate accordingly.
            </p>
          </div>

          <div className="annotation-type">
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black lg:pl-8 mt-4 mb-2 ml-6">
              Bounding Box Annotation
            </h4>
            <p className="text-gray-700 leading-relaxed text-justify pl-6 pr-6 lg:pr-16 lg:pl-16 lg:w-90%">
              Annotators draw bounding boxes around objects of interest in the
              sensor data, such as other vehicles, pedestrians, cyclists, and
              obstacles. These bounding boxes provide spatial information and
              help the autonomous vehicle recognize and localize different
              objects in the scene.
            </p>
          </div>

          <div className="annotation-type">
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black lg:pl-8 mt-4 mb-2 ml-6">
              Lidar Annotation
            </h4>
            <p className="text-gray-700 leading-relaxed text-justify pl-6 pr-6 lg:pr-16 lg:pl-16 lg:w-90%">
              LiDAR (Light Detection and Ranging) annotations play a crucial
              role in the development of perception systems for autonomous
              vehicles. LiDAR sensors emit laser pulses and measure the time it
              takes for the laser to bounce back after hitting objects, creating
              a 3D point cloud representation of the surrounding environment.
              Annotating LiDAR data involves identifying and labeling objects in
              the point cloud to enable the autonomous vehicle's perception
              system to recognize and interact with its surroundings accurately.
            </p>
          </div>
        </section>

        <div className=" min-screen   ">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-700 lg:pl-8 mb-4 ml-6">
            Semantic Segmentation Annotation
          </h1>
          {/* 
        <div className="w-full p-6 flex items-center justify-center">
          <div className="w-full h-full overflow-hidden">
            <img
              src="/images/collection.png" // Replace with the path to your image
              alt="Image Description"
              className="object-cover w-full h-full"
            />
          </div>
        </div> */}

          <p className="text-gray-700 leading-relaxed text-justify pl-6 pr-6 lg:pr-16 lg:pl-16 lg:w-90%">
            Specifying object classes for annotators to label images, it's
            essential to provide clear and comprehensive instructions to ensure
            accurate and consistent annotations.
          </p>

          <div className=" flex flex-col items-center justify-center mb-6 mt-10">
            <div className="bg-gray-200 ">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black">
                Defining Object class
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap justify-center text-center w-3/4 mx-auto">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <img
                src="images/class1.png"
                alt="Image 1"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <img
                src="images/class2.png"
                alt="Image 2"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <img
                src="images/class3.png"
                alt="Image 3"
                className="w-full h-auto rounded"
              />
            </div>
          </div>

          <div className=" flex flex-col mt-8 items-center justify-center mb-6 ">
            <div className="bg-gray-200 ">
              <h1 className="text-lg sm:text-xl  md:text-2xl lg:text-3xl xl:text-4xl text-black">
                Label Hierarchy and Statistics
              </h1>
            </div>

            <p className="ltext-gray-700 leading-relaxed text-justify pl-6 pr-6 mt-10 lg:pr-16 lg:pl-16 lg:w-90%">
              Our dataset annotations contain unique labels like animal,
              miscellaneous vehicles,train, unknown. We also focus on
              identifying probable safe driving areas beside the road
            </p>

            <div className="w-full p-6 flex items-center justify-center">
              <div className="w-full h-full overflow-hidden">
                <img
                  src="/images/stats.png" // Replace with the path to your image
                  alt="Image Description"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <p className="leading-relaxed text-justify text-sm sm:text-xs md:text-sm p-6 lg:text-base xl:text-xl">
              The following categorisation was used in the Semantic Segmentation
              Tool comprising 29 different categories.
            </p>

            <div className="w-full -pt-6  flex items-center justify-center">
              <div className="w-3/4 h-full overflow-hidden">
                <img
                  src="/images/semantic.png" // Replace with the path to your image
                  alt="Image Description"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Images */}

          <div className="flex flex-wrap justify-center text-center w-3/4 mx-auto">
            <div className="w-full sm:w-1/2 p-2 text-center">
              <img
                src="images/raw.png"
                alt="Image 1"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="w-full sm:w-1/2 p-2 text-center">
              <img
                src="images/raw2.png"
                alt="Image 2"
                className="w-full h-auto rounded"
              />
            </div>
          </div>

          <div className=" min-screen mt-6">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-700 lg:pl-8 mb-4 ml-6">
              Boundary Box Annotation
            </h1>
            <p className="text-gray-700 leading-relaxed text-justify pl-6 pr-6 lg:pr-16 lg:pl-16 lg:w-90%">
              Here annotators review each image and label the objects within
              them according to the predefined object classes. Each image may
              contain one or more objects that belong to different classes.
            </p>

            <div className="flex flex-wrap justify-center text-center mt-4 mb-4 w-3/4 mx-auto">
              <div className="w-full sm:w-1/2 p-2 text-center">
                <img
                  src="images/raw3.png"
                  alt="Image 1"
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="w-full sm:w-1/2 p-2 text-center">
                <img
                  src="images/raw4.png"
                  alt="Image 2"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>

          <div className=" min-screen mt-6">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-700 lg:pl-8 mb-4 ml-6">
              Lidar Bounding Box Annotation
            </h1>
            <p className="text-gray-700 leading-relaxed text-justify pl-6 pr-6 lg:pr-16 lg:pl-16 lg:w-90%">
              For object detection tasks, annotators draw bounding boxes around
              each object in the image that belongs to a specified class. The
              bounding boxes provide the spatial information necessary for the
              model to locate and identify objects. More than 3000 images in
              total have been annotated at the pixel level.
            </p>

            <p className="text-gray-700 leading-relaxed text-justify  mt-8 pl-6 pr-6 lg:pr-16 lg:pl-16 lg:w-90">
              The following categorization was used in the Point Cloud Tool
              comprising 8 different categories.
            </p>

            <div className="w-full p-4 flex items-center justify-center">
              <div className="w-full h-full overflow-hidden">
                <img
                  src="/images/point.png" // Replace with the path to your image
                  alt="Image Description"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Raw Images */}
            <div className="flex flex-wrap justify-center text-center mt-4 mb-4 w-3/4 mx-auto">
              <div className="w-full sm:w-1/2 p-2 text-center">
                <img
                  src="images/raw5.png"
                  alt="Image 1"
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="w-full sm:w-1/2 p-2  text-center">
                <img
                  src="images/raw6.png"
                  alt="Image 2"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
