"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Lottie from "lottie-react";
import clockAnimation from "../../public/baloon.json";


const targetDate = new Date("2025-05-17T00:00:00").getTime();

const NumberBlock = ({ value, label }) => {
  const formattedValue = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="w-24 h-28 bg-fuchsia-900/70 backdrop-blur-md rounded-lg flex items-center justify-center text-fuchsia-200 text-6xl font-bold mb-2 relative overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-fuchsia-500/10"></div>
        <div className="relative z-10">{formattedValue}</div>
      </motion.div>
      <motion.span
        className="text-fuchsia-200 text-sm uppercase tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {label}
      </motion.span>
    </div>
  );
};

export default function AnniversaryCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const confettiIntervalRef = useRef(null);

  // Calculate time difference
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        startConfetti();
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(interval);
      if (confettiIntervalRef.current) {
        clearInterval(confettiIntervalRef.current);
      }
    };
  }, []);

  // Start confetti animation at edges
  const startConfetti = () => {
    confettiIntervalRef.current = setInterval(() => {
      // Left edge
      confetti({
        particleCount: 20,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.5 },
      });

      // Right edge
      confetti({
        particleCount: 20,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.5 },
      });
    }, 2000);
  };

  // Trigger occasional confetti even before countdown ends
  useEffect(() => {
    const randomConfetti = setInterval(() => {
      const shouldFire = Math.random() > 0.7;
      if (shouldFire) {
        const side = Math.random() > 0.5 ? "left" : "right";
        confetti({
          particleCount: 5,
          angle: side === "left" ? 60 : 120,
          spread: 55,
          origin: { x: side === "left" ? 0 : 1, y: 0.5 },
        });
      }
    }, 3000);

    return () => clearInterval(randomConfetti);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-fuchsia-900 to-gray-800 min-h-screen flex justify-center items-center p-4">
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            className="w-full max-w-4xl mx-auto backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-3/5 text-center lg:text-left mb-8 lg:mb-0">
                <motion.p
                  className="text-fuchsia-200 mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  We're almost ready!
                </motion.p>

                <motion.h1
                  className="text-5xl md:text-6xl font-bold mb-8 relative inline-block"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Anniversary in..
                  <motion.span
                    className="absolute left-0 bottom-0 h-1 bg-fuchsia-200"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.8 }}
                  />
                </motion.h1>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <NumberBlock value={timeLeft.days} label="Days" />
                  <NumberBlock value={timeLeft.hours} label="Hours" />
                  <NumberBlock value={timeLeft.minutes} label="Minutes" />
                  <NumberBlock value={timeLeft.seconds} label="Seconds" />
                </div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <p className="mb-3 text-gray-300">
                    Join our youtube live program .
                  </p>
                  <div className="flex w-full max-w-md mx-auto lg:mx-0">
                    <input
                      type="email"
                      className="flex-1 px-4 py-3 rounded-l-lg bg-gray-800 border border-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email here..."
                    />
                    <button className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-r-lg transition-colors duration-200 flex items-center">
                      Subscribe
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-6 flex justify-center lg:justify-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <a
                    href="https://youtube.com/live/YOUR_STREAM_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                    Join the Live Stream
                  </a>
                </motion.div>
              </div>

              <motion.div
                className="w-full lg:w-2/5"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Replace SVG clock with Lottie animation */}
                    <Lottie
                      animationData={clockAnimation}
                      loop={true}
                      autoplay={true}
                      style={{ width: "100%", height: "auto" }}
                      // Optional: You can set interactivity options
                      interactivity={{
                        mode: "scroll",
                        actions: [
                          {
                            visibility: [0, 0.2],
                            type: "stop",
                            frames: [0],
                          },
                          {
                            visibility: [0.2, 0.45],
                            type: "seek",
                            frames: [0, 45],
                          },
                        ],
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}