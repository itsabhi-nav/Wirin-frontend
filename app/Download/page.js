"use client";


import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "/components/Loader";

const Download = () => {
  const [datasets, setDatasets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    collegeName: "",
  });
  const [selectedDataset, setSelectedDataset] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/downloads?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
          }
        );
        setDatasets(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching datasets:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openForm = (dataset) => {
    setSelectedDataset(dataset);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedDataset(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/forms/`,
        { data: formData },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        }
      );

      console.log("Form submission response:", response.data);

      if (selectedDataset) {
        window.location.href = selectedDataset.attributes.downloadLink;
      } else {
        console.error("No dataset selected.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <section className="w-full mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-700 mt-10 lg:pl-8 mb-4 ml-8">
          Datasets Available
        </h2>
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed text-justify pl-6 pr-6 lg:pr-16 lg:pl-16 lg:w-90%">
            The datasets for which you have not requested download permissions
            are listed below. Click the download button to generate the download
            token.
          </p>
        </div>
      </section>

      <section className="text-gray-600 -mt-20 body-font">
        {loading && <Loader />} {/* Show the loader if loading is true */}
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {loading && <p>Loading datasets...</p>}
            {!loading &&
              datasets.map((dataset) => {
                const {
                  id,
                  attributes: {
                    title,
                    description,
                    image: { data: imageData }, // Updated here
                    downloadLink,
                  },
                } = dataset;

                // Add console.log statements for debugging
                console.log("dataset:", dataset);
                console.log("imageData:", imageData);

                // Check if imageData is defined
                // Check if imageData is defined and has the expected structure
               const imageUrl =
                 dataset.attributes.image &&
                 dataset.attributes.image.data &&
                 dataset.attributes.image.data[0] &&
                 dataset.attributes.image.data[0].attributes &&
                 dataset.attributes.image.data[0].attributes.url
                   ? `${process.env.NEXT_PUBLIC_API_URL}${dataset.attributes.image.data[0].attributes.url}`
                   : "";

                // More console.log statements for debugging
                console.log("imageUrl:", imageUrl);

                return (
                  <div className="p-4 md:w-1/3" key={id}>
                    <div
                      className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col download-card"
                      onClick={() => openForm(dataset)}
                    >
                      {imageUrl && (
                        <img
                          className="h-full w-full object-cover object-center"
                          src={imageUrl}
                          alt={title}
                        />
                      )}
                      <div className="p-6 flex-grow">
                        <div className="mb-4">
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {title}
                          </h1>
                          <p className="leading-relaxed text-justify">
                            {description}
                          </p>
                        </div>
                        <div className="flex items-center justify-center mt-auto">
                          <button
                            onClick={() => openForm(dataset)}
                            className="text-indigo-500 inline-flex items-center bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                          >
                            Download Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg relative">
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-gray-500 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="collegeName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  College Name
                </label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Download;
