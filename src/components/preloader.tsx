'use client';

import React from 'react';

const chaoticPulseAnimation = `
  @keyframes chaoticPulse {
    0% {
      transform: scale(0.8) translate(0, 0);
      opacity: 0.6;
    }
    50% {
      transform: scale(1.2) translate(5px, -5px); /* Subtle shift for smooth motion */
      opacity: 1;
    }
    100% {
      transform: scale(0.8) translate(0, 0);
      opacity: 0.6;
    }
  }
`;

const Preloader = () => {
  const dots = [
    { size: 22, color: '#e1ad01', x: 0, y: -30, delay: 10 },
    { size: 18, color: '#f06292', x: 50, y: -20, delay: 1.2 },
    { size: 22, color: '#8e24aa', x: 40, y: 30, delay: 2.3 },
    { size: 22, color: '#f06292', x: -50, y: 0, delay: 8.1 },
    { size: 12, color: '#8e24aa', x: -60, y: 40, delay: 1.5 },
  ];

  return (
    <>
      <style>{chaoticPulseAnimation}</style>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
        }}
      >
        <div style={{ position: 'relative', width: 200, height: 200 }}>
          {dots.map((dot, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: '80%',
                left: '80%',
                width: dot.size,
                height: dot.size,
                marginLeft: dot.x,
                marginTop: dot.y,
                borderRadius: '50%',
                backgroundColor: dot.color,
                animation: `chaoticPulse 2s ease-in-out infinite`,
                animationDelay: `${dot.delay}s`,
                transformOrigin: 'center center',
                textDecoration: 'none',
                boxShadow: `0 0 10px ${dot.color}`,
                transition: 'transform 0.3s ease-in-out',
                willChange: 'transform, opacity',
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Preloader;