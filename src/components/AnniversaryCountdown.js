
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import SpotlightDemo from "../components/ui/spotlight-demo";

import { cn } from "../utils/index";

const targetDate = new Date("2025-05-17T00:00:00").getTime();
const NumberBlock = ({ value, label }) => {
  const formattedValue = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="w-20 sm:w-24 h-24 sm:h-28 bg-fuchsia-900/70 backdrop-blur-md rounded-lg flex items-center justify-center text-fuchsia-200 text-4xl sm:text-6xl font-bold mb-2 relative overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-fuchsia-500/10"></div>
        <div className="relative z-10">{formattedValue}</div>
      </motion.div>
      <motion.span
        className="text-fuchsia-200 text-xs sm:text-sm uppercase tracking-wider"
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
  const [isAnniversary, setIsAnniversary] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const confettiIntervalRef = useRef(null);
  const confettiCanvasRef = useRef(null);

  // Trigger confetti on component mount
  useEffect(() => {
    // Fire initial confetti burst
    triggerConfetti();
    
    // Set up recurring confetti
    confettiIntervalRef.current = setInterval(() => {
      triggerConfetti();
    }, 50000);

    return () => {
      clearInterval(confettiIntervalRef.current);
    };
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 30,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    // Add side confetti for a more festive effect
    setTimeout(() => {
      confetti({
        particleCount: 15,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.5 },
      });
      confetti({
        particleCount: 15,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.5 },
      });
    }, 250);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 500);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setIsAnniversary(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        
        // Increase confetti intensity for the anniversary
        clearInterval(confettiIntervalRef.current);
        confettiIntervalRef.current = setInterval(() => {
          confetti({
            particleCount: 40,
            spread: 80,
            origin: { y: 0.6 }
          });
          
          setTimeout(() => {
            confetti({
              particleCount: 25,
              angle: 60,
              spread: 55,
              origin: { x: 0, y: 0.5 },
            });
            confetti({
              particleCount: 25,
              angle: 120,
              spread: 55,
              origin: { x: 1, y: 0.5 },
            });
          }, 250);
        }, 2000);
        
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
      clearTimeout(timeout);
      clearInterval(interval);
      clearInterval(confettiIntervalRef.current);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-fuchsia-900 to-gray-800 w-full py-8 md:py-16 flex justify-center items-center p-4">
      <canvas 
        ref={confettiCanvasRef} 
        className="fixed inset-0 pointer-events-none z-50"
      />
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            className="w-full max-w-4xl mx-auto backdrop-blur-lg p-4 sm:p-8 rounded-2xl shadow-2xl text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* LEFT SECTION */}
              <div className={`w-full ${isAnniversary ? 'lg:w-3/5' : 'lg:w-full'} text-center ${isAnniversary ? 'lg:text-left' : ''} mb-8 lg:mb-0`}>
                <motion.p
                  className="text-fuchsia-200 mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {isAnniversary ? "Let's celebrate!" : "We're almost ready!"}
                </motion.p>

                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 relative inline-block"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {isAnniversary ? "🎉 Happy Anniversary Day! 🎉" : "Anniversary in.."}
                  {!isAnniversary && (
                    <motion.span
                      className="absolute left-0 bottom-0 h-1 bg-fuchsia-200"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 0.8 }}
                    />
                  )}
                </motion.h1>

                {!isAnniversary && (
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4">
                    <NumberBlock value={timeLeft.days} label="Days" />
                    <NumberBlock value={timeLeft.hours} label="Hours" />
                    <NumberBlock value={timeLeft.minutes} label="Minutes" />
                    <NumberBlock value={timeLeft.seconds} label="Seconds" />
                  </div>
                )}

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {/* <p className="mb-3 text-gray-300 text-sm sm:text-base">
                    Join our anniversary live program on Google Meet.
                  </p>
                  <div className="flex flex-col items-center lg:items-start space-y-4 mt-6">
                    <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 sm:px-4 sm:py-3 w-full max-w-md">
                      <input
                        type="text"
                        value="https://meet.google.com/abc-defg-hij"
                        readOnly
                        className="flex-1 bg-transparent text-white outline-none cursor-text text-sm sm:text-base overflow-hidden"
                      />
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            "https://meet.google.com/abc-defg-hij"
                          )
                        }
                        className="ml-2 sm:ml-3 text-xs sm:text-sm text-blue-500 hover:underline whitespace-nowrap"
                      >
                        Copy
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Copy the link above to join the live Google Meet session.
                    </p>
                  </div> */}
                </motion.div>
              </div>

              {/* RIGHT SECTION - Only show when it's anniversary time */}
              {isAnniversary && (
                <motion.div
                  className="w-full lg:w-2/5"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    <SpotlightDemo />
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}