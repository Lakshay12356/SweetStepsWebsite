import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./ui/Exbutton";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { scale: 0.67 },
      {
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);


  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center text-center px-4 bg-white overflow-hidden">
      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] pt-16 mt-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Capture Moments Frame Emotions
        </h1>
        <p className="mt-3 text-lg md:text-xl font-medium text-gray-500 max-w-2xl">
          Immortalize your loved ones’ touch with handcrafted impressions.
        </p>
        <div className="mt-6">
          <Button aria-label="Explore Impressions" />
        </div>
      </div>

      <div
        ref={containerRef}
        className="w-[90vw] mx-auto rounded-xl overflow-hidden shadow-xl origin-center will-change-transform"
      >
        <video
          ref={videoRef}
          className="w-full h-auto"
          muted
          playsInline
          loop
          controls={false}
          preload="auto"
          poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <button
          onClick={handleToggle}
          aria-label={isPlaying ? "Mute video" : "Unmute video"}
          className="absolute top-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 text-xs rounded-full hover:bg-opacity-80 transition z-10"
        >
          {isPlaying ? "🔊" : "🔇"}
        </button>
      </div>

      <div className="h-[8vh]" />
    </section>
  );
};

export default HeroSection;
