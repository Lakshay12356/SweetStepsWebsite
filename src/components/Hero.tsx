import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./UIElements/button";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  useEffect(() => {
    controls.start({
      scale: inView ? 1 : 0.67,
    });
  }, [inView, controls]);

  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      video.muted = false;
      setIsPlaying(true);
    } else {
      video.pause();
      video.muted = true;
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center text-center px-4 bg-white overflow-hidden">
      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Capture Moments Frame Emotions
        </h1>
        <p className="mt-3 text-lg md:text-xl font-medium text-gray-500 max-w-2xl">
          Immortalize your loved ones’ touch with handcrafted impressions.
        </p>
        <div className="mt-6">
          <Button />
        </div>
      </div>
      {/* Smooth zoom video container */}
      <motion.div
        style={{ willChange: "transform" }}
        ref={ref}
        animate={controls}
        initial={{ scale: 0.67 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 18,
          mass: 0.8,
        }}
        className="w-[90vw] mx-auto rounded-xl overflow-hidden shadow-xl origin-center"
      >
        <video
          ref={videoRef}
          className="w-full h-auto"
          muted
          playsInline
          loop
          controls={false}
          preload="auto"
          poster="../assets/hero-poster.jpg"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={handleToggle}
          className="absolute top-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 text-xs rounded-full hover:bg-opacity-80 transition z-10"
        >
          {isPlaying ? "🔊" : "🔇"}
        </button>
      </motion.div>

      <div className="h-[10vh]" />
    </section>
  );
};

export default HeroSection;
