import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="py-1 bg-gray-200 text-center">
        <div className="mb-1 text-xl font-semibold">Get connected with us</div>
        <p className="mb-1">
          ✉️{" "}
          <a href="mailto:wirin@rvce.edu.in" style={{ color: "blue" }}>
            Send an Email
          </a>
        </p>
        <hr className="border-t border-gray-400 my-1 w-4/5 mx-auto" />
      </div>

      <div className="flex flex-col md:flex-row justify-between bg-gray-200 p-1">
        <div className="md:w-1/2">
          <img
            src="images/Screenshot 2023-10-11 at 2.09.55 AM.png"
            alt="Image"
            style={{ width: "70%" }} // Set the width to 40%
            className="mx-auto"
          />
        </div>
        <div className="mt-1 md:mt-0 md:w-1/2 text-justify pr-10 md:text-right">
          <p className="mb-1">
            <Link
              href="/Contact"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Contact Us
            </Link>
          </p>
          <p className="mb-1">
            <a
              href="https://docs.google.com/document/d/1EJlkxEllP2Xn_U6OZWjRUSxULB77M4xt4JRkkfniro8/edit#heading=h.2nwb4q5nja7u"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Terms and Conditions
            </a>
          </p>
          <p className="mb-1">
            <a
              href="https://docs.google.com/document/d/1Oh2g50tcgIFOVc85jfqQmcHLMD9ecF_DIDX6hFZc_U0/edit#heading=h.yfn8ne2qb1z7"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      <div className="py-1 bg-gray-200 text-center">
        <p className="mb-1">
          All Rights Reserved | Designed by{" "}
          <a href="https://www.itsabhinav.tech">Abhinav Dubey</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
