import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background stars */}
      <div className="fixed inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random(),
              animation: `twinkle ${Math.random() * 5 + 5}s linear infinite`,
            }}
          />
        ))}
      </div>
  
      {/* Main content */}
      <div className="relative z-10 text-center">
        <h1 className={`text-8xl font-bold mb-8 ${glitch ? 'animate-glitch' : ''}`}>404</h1>
        <p className="text-2xl mb-12">Page Not Found</p>
  
        {/* Return home button */}
        <Link
          to="/"
          className="bg-white text-black px-6 py-3 font-medium rounded-md hover:bg-gray-300 transition-colors duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Return to Home</span>
          <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>
      </div>
  
      {/* Animated lines */}
      <div className="fixed inset-0 z-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white"
            style={{
              height: '1px',
              width: '100%',
              top: `${(i + 1) * 20}%`,
              animation: `moveLeftRight ${10 + i * 2}s linear infinite`,
            }}
          />
        ))}
      </div>
  
      {/* Styles */}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes moveLeftRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-glitch {
          animation: glitch 0.5s linear;
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
  
}
