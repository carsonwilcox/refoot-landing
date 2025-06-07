import { useState } from 'react';

export default function Home() {
  const [sockColor, setSockColor] = useState('black');

  const sockImages = {
    black: '/images/sock-black.png',
    white: '/images/sock-white.png',
    green: '/images/sock-green.png',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#222',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>REFOOT™</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
        Performance recovery, re-engineered.
      </p>
      <p style={{ maxWidth: '600px', marginBottom: '2rem' }}>
        Premium post-workout socks engineered for athletes who demand more than just cotton.
      </p>

      {/* Waitlist Signup Form */}
      <form
        action="https://formsubmit.co/carson4wilcox@gmail.com"
        method="POST"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <input type="hidden" name="_next" value="https://refootwear.com/thanks" />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          style={{
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1rem',
            width: '100%',
            maxWidth: '300px',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#00c853',
            color: '#000',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Join the Waitlist
        </button>
      </form>

      {/* Product Image with Color Selectors */}
      <div style={{ backgroundColor: '#111', padding: '1rem', borderRadius: '12px', marginBottom: '2rem' }}>
        <img
          src={sockImages[sockColor]}
          alt={`REFOOT recovery sock - ${sockColor}`}
          style={{ maxWidth: '300px', height: 'auto' }}
        />
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button style={buttonStyle} onClick={() => setSockColor('black')}>Black</button>
          <button style={buttonStyle} onClick={() => setSockColor('white')}>White</button>
          <button style={buttonStyle} onClick={() => setSockColor('green')}>Green</button>
        </div>
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Why REFOOT?</h2>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
        <li>• Copper-infused zones reduce inflammation after workouts</li>
        <li>• Gradient compression supports circulation and muscle recovery</li>
        <li>• Breathable mesh and moisture control for all-day comfort</li>
        <li>• Designed by athletes, for athletes</li>
      </ul>

      <footer style={{ marginTop: '3rem', fontSize: '0.875rem' }}>
        © 2025 REFOOT. All rights reserved.
      </footer>
    </main>
  );
}
