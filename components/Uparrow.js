"use client";
import React, { useState, useEffect } from "react";

const uparrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledDown = window.scrollY > 100;
      setShowArrow(isScrolledDown);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showArrow && (
        <div
          style={{
            position: "fixed",
            bottom: "5%",
            right: "1%",
            cursor: "pointer",
            fontSize: "20px",
            backgroundColor: "#007BFF",
            color: "#ffffff",
            padding: "10px",
            borderRadius: "50%",
            marginRight: "5%",
            // Adjust the positioning for smaller screens using media queries
            ...{
              "@media (max-width: 768px)": {
                bottom: "2%",
                right: "2%",
                marginRight: "2%",
              },
            },
          }}
          onClick={scrollToTop}
        >
          &#9650;
        </div>
      )}
    </>
  );
};

export default uparrow;
