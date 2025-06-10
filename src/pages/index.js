// This new file will be the reworked main landing page for REFOOT
// Focusing on performance socks for workout use

import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [selectedColor, setSelectedColor] = useState('black');
  const imageSrc = `/images/performance-sock-${selectedColor}.png`;

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
      <Head>
        <title>REFOOT™ Performance Socks</title>
      </Head>

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        REFOOT™ Performance Socks
      </h1>

      <p style={{ maxWidth: '600px', marginBottom: '1.5rem' }}>
        Built for movement. Designed for sweat. Performance-grade workout socks
        that never quit before you do.
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
        <input
          type="hidden"
          name="_next"
          value="https://refootwear.com/thanks"
        />
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

      {/* Product Image */}
      <div
        style={{
          backgroundColor: '#111',
          padding: '1rem',
          borderRadius: '12px',
          marginBottom: '1rem',
        }}
      >
        <img
          src={imageSrc}
          alt="REFOOT performance sock"
          style={{ maxWidth: '300px', height: 'auto' }}
        />
      </div>

      {/* Color Buttons */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button
          onClick={() => setSelectedColor('black')}
          style={{
            backgroundColor: selectedColor === 'black' ? '#00c853' : '#444',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
          }}
        >
          Black
        </button>
        <button
          onClick={() => setSelectedColor('gray')}
          style={{
            backgroundColor: selectedColor === 'gray' ? '#00c853' : '#444',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
          }}
        >
          Gray
        </button>
        <button
          onClick={() => setSelectedColor('neon')}
          style={{
            backgroundColor: selectedColor === 'neon' ? '#00c853' : '#444',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
          }}
        >
          Neon
        </button>
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What Makes REFOOT Different?</h2>

      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
        <li>• Cushioned impact zones protect during lifts and runs</li>
        <li>• Breathable mesh panels reduce overheating</li>
        <li>• Arch compression boosts endurance</li>
        <li>• Durable stitching for high-intensity sessions</li>
      </ul>

      <footer style={{ marginTop: '3rem', fontSize: '0.875rem' }}>
        © 2025 REFOOT. All rights reserved.
      </footer>
    </main>
  );
}
