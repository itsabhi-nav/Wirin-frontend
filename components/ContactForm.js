"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  formData.append("access_key", process.env.NEXT_PUBLIC_CONTACT);

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  });

  const result = await response.json();

  if (result.success) {
    console.log(result);

    // Clear form fields
    event.target.reset();

    // Show the modal immediately
    setShowModal(true);

    // Hide the modal after 5 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  }
}



  return (
    <section className="text-gray-600 -mt-8 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>

          <div className="mx-auto mt-4 mb-4 flex justify-center">
            <img
              src="images/logo.jpg"
              alt="Your Logo"
              style={{ width: "80%", height: "50%" }}
              className="w-24 h-24"
            />
          </div>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Contact RVCE WIRIN Team at:{" "}
            <a href="mailto:wirin@rvce.edu.in" style={{ color: "blue" }}>
              wirin@rvce.edu.in
            </a>
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          {/* Form starts here */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -m-2">
              {/* Name Input */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/*Mobile Number */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="mobileNumber"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Profession */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="profession"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Profession
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Message Now
                </button>
              </div>
            </div>
          </form>

          {/* Additional Contact Information */}
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a href="mailto:wirin@rvce.edu.in" style={{ color: "blue" }}>
              wirin@rvce.edu.in
            </a>
            <p className="leading-normal my-5">
              RV College of Engineering
              <br />
              Mysore Rd, RV Vidyaniketan, Post, Bengaluru, Karnataka 560059
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            {/* This is the modal */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white p-4">
                <div className="text-center">
                  {/* Add a space for your GIF here */}
                  <div className="mb-4">
                    {/* Your GIF component or placeholder */}
                    <img
                      src="images/submit.gif"
                      alt="Loading GIF"
                      style={{
                        width: "100%", // Adjust the width as needed
                        maxHeight: "200px", // Adjust the maximum height as needed
                        objectFit: "contain", // Maintain aspect ratio
                        margin: "auto", // Center the image horizontally
                        display: "block", // Remove any default inline display styles
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Form submitted successfully!
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Redirecting in 5 seconds...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
