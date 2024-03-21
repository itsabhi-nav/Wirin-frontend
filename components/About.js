"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import imageAsset from "/image/about.jpg";
const ImageWrapper = styled(Image)`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-1 lg:px-5 py-3 lg:py-5 flex items-center justify-center flex-col">
          <div className="text-lg  xl:text-4xl text-blue-700 mt-6 font-bold mb-4 pl-6 lg:pl-0 pr-6 lg:pr-0 sm:text-4xl md:text-3xl lg:text-4xl">
            About Us
          </div>
          <ImageWrapper src={imageAsset} alt="Flowbite Logo" />
          <div className=" text-gray-700 leading-relaxed text-justify pl-6 pr-6 lg:pr-0 lg:pl-0 lg:w-90%">
            <p className="text-gray-700 leading-relaxed text-justify pl-6 pr-6 mt-8 lg:pr-0 lg:pl-0 lg:w-90%d">
              WIRIN – Wipro IISc Research and Innovative Network in association
              with RV College of Engineering, Bangalore has taken initiative to
              Create and provide National Dataset.
              <br />
              <br />
              Dataset refers to the meticulous process of creating, curating,
              and assembling a comprehensive collection of images to serve as a
              foundational resource for various applications, such as training
              machine learning models or conducting research. This intricate
              process involves carefully capturing, selecting, and collecting
              images while also generating novel ones to ensure the dataset
              encompasses a wide range of diverse and representative visual
              content that aligns with the specific objectives and requirements
              of the dataset. The purpose is to establish a rich and extensive
              repository of images that can be utilized for advancing computer
              vision, pattern recognition, and related fields by providing
              valuable data for algorithmic analysis, model training, and
              algorithmic performance evaluation.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto min-screen">
        <h1 className="text-lg  xl:text-4xl text-blue-700 mb-4 pl-6 lg:pl-0 pr-6 lg:pr-0 sm:text-4xl md:text-3xl lg:text-4xl">
          RVCE and WIRIN collaboration
        </h1>
        <p className="text-gray-700 leading-relaxed text-justify pl-6 pr-6 lg:pr-0 lg:pl-0 lg:w-90%">
          The future of the automobile is electric, shared, autonomous and
          connected – a very exciting area. has partnered with and the to
          establish a Center of Excellence for Autonomous Vehicle Research at
          RVCE. is also part of the collaboration rendering support for Website
          design and development. The collaboration with WIPRO and IISc in a
          series of special programs devised by the WIPRO Innovation Centre
          brings together the best automotive sector experts, researchers,
          innovators, companies, and students to create a collaborative
          ecosystem at RVCE. The center seeks to focus on four key technologies
          for autonomous vehicles: sophisticated AI technologies for vehicle
          control, environment perception, route planning, and vehicle
          navigation systems. It is a collaborative platform to observe an
          essential component of contemporary transportation networks.
        </p>
      </div>

      <div className="min pt-10 container mx-auto">
        <h1 className="text-lg  xl:text-4xl text-blue-700 mb-4 pl-6 lg:pl-0 pr-6 lg:pr-0 sm:text-4xl md:text-3xl lg:text-4xl">
          Creating National Dataset
        </h1>
        <p className="text-gray-700 leading-relaxed text-justify pl-6 pr-6 lg:pr-0 lg:pl-0 lg:w-90%">
          One of the primary objectives of the consortium is National Dataset
          Creation. Creating a national dataset of annotated images is a complex
          and challenging task that requires a significant amount of resources
          and expertise. The process typically involves the following steps:
        </p>

        <div className="w-9/10 p-6 mx-auto flex flex-wrap">
          {/* First Row */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
            <img
              src="images/1.png"
              alt="Image 1"
              className="w-full h-auto max-w-xs rounded"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
            <img
              src="images/2.png"
              alt="Image 2"
              className="w-full h-auto max-w-xs rounded"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
            <img
              src="images/3.png"
              alt="Image 3"
              className="w-full h-auto max-w-xs rounded"
            />
          </div>

          {/* Second Row */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
            <img
              src="images/4.png"
              alt="Image 4"
              className="w-full h-auto max-w-xs rounded"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
            <img
              src="images/5.png"
              alt="Image 5"
              className="w-full h-auto max-w-xs rounded"
            />
          </div>
        </div>

        <p className=" text-gray-700 leading-relaxed text-justify pl-8 pr-6">
          Creating a national dataset of annotated images requires a significant
          amount of resources and expertise. We at RVCE in collaboration with
          WIRIN have a team with the necessary skills and experience in data
          collection, annotation, quality control, data management, and
          distribution.
        </p>

        <p className=" text-gray-700 leading-relaxed text-justify mt-6 pl-8 pr-6">
          Creating a national dataset of annotated images is a dynamic process
          and it is continuously getting updated and maintained to keep it
          relevant with the latest environments and conditions.
        </p>
      </div>
    </div>
  );
};

export default About;
