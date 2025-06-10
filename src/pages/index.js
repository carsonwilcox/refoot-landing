import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [sockColor, setSockColor] = useState('black');

  const imageMap = {
    black: '/images/black-sock.png',
    white: '/images/white-sock.png',
    green: '/images/green-sock.png',
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
      <Head>
        <title>REFOOT™ Recovery Socks</title>
        <meta name="description" content="Premium recovery socks for athletes" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        REFOOT™ Recovery Socks
      </h1>

      <p style={{ maxWidth: '600px', marginBottom: '1.5rem' }}>
        Recover stronger. Train smarter. Premium post-workout socks engineered
        for athletes who demand more than just cotton.
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

      <div style={{ backgroundColor: '#111', padding: '1rem', borderRadius: '12px', marginBottom: '1rem' }}>
        <img
          src={imageMap[sockColor]}
          alt={`REFOOT ${sockColor} sock`}
          style={{ maxWidth: '300px', height: 'auto' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => setSockColor('black')} style={buttonStyle}>Black</button>
        <button onClick={() => setSockColor('white')} style={buttonStyle}>White</button>
        <button onClick={() => setSockColor('green')} style={buttonStyle}>Green</button>
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

const buttonStyle = {
  backgroundColor: '#222',
  color: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  border: '1px solid #555',
  cursor: 'pointer',
};
