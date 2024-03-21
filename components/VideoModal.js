// components/VideoModal.js
"use client"
import React, { useState, useEffect } from "react";
import YouTubePlayer from "youtube-player";

const VideoModal = ({ isOpen, onClose }) => {
  const [player, setPlayer] = useState(null);
  const [videoDimensions, setVideoDimensions] = useState({
    width: 640,
    height: 390,
  });
  const videoId = "d7gxZOQZfWQ"; // Replace with your YouTube video ID

  const opts = {
    width: "100%",
    height: videoDimensions.height,
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    if (isOpen) {
      const ytPlayer = YouTubePlayer("youtube-player", opts);

      ytPlayer.loadVideoById(videoId).then(() => {
        setPlayer(ytPlayer);
      });
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      // Cleanup function to pause the video when the component is unmounted
      if (player) {
        player.destroy();
      }
    };
  }, [player]);

  const closeModal = () => {
    // Check if the player exists before attempting to pause
    if (player) {
      player.pauseVideo();
    }

    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black opacity-75"
        onClick={closeModal}
      ></div>
      <div
        className={`z-10 bg-white p-4 sm:p-8 md:p-12 lg:p-16 w-full max-w-screen-sm mx-auto rounded-md`}
      >
        <div className="aspect-w-16 aspect-h-9">
          <div id="youtube-player"></div>
        </div>
        <button className="mt-4 text-sm text-gray-500" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
