import React from "react";
import Head from "next/head";
import Herod from "/components/Herod";
import About from "/components/About";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";

export const metadata = {
  title: "WIRIN National Dataset: Fueling Innovation in Autonomous Vehicles",
  description:
    "Dive into the collaboration between Wipro IISc Research and Innovation Network (WIRIN) and RV College of Engineering, forging advancements in autonomous vehicles. Explore the complex yet essential process of creating a National Dataset, fueling cutting-edge research in image recognition. Learn about the dynamic dual approach of manual and tool-based image annotation, crucial for shaping the future of AI-driven vehicle technologies. Join us in the journey of innovation at the Center of Excellence for Autonomous Vehicle Research, where expertise and collaboration meet to drive progress in transportation networks",
  imageUrl: "https://wirinrvce.itsabhinav.tech/images/og.png", // Use the absolute URL
  siteUrl: "https://wirinrvce.itsabhinav.tech",
  siteName: "RVCE-WIRIN",
  author: "Your Name", // Add author metadata
};

const page = () => {
  return (
    <div>
      <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:site_name" content={metadata.siteName} />

        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="autonomous vehicles, innovation, AI, image recognition"
        />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={metadata.siteUrl} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Herod />
      <About />
      <Projects />
      <Gallery />
    </div>
  );
};

export default page;
