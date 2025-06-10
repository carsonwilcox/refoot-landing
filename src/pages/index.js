import { useState } from 'react';

export default function Home() {
  const [selectedColor, setSelectedColor] = useState('black');

  const sockImages = {
    black: '/images/sock-black.png',
    green: '/images/sock-green.png',
    white: '/images/sock-white.png',
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

      {/* Sock Display with Color Selection */}
      <div style={{ backgroundColor: '#111', padding: '1rem', borderRadius: '12px', marginBottom: '1rem' }}>
        <img
          src={sockImages[selectedColor]}
          alt={`REFOOT recovery sock - ${selectedColor}`}
          style={{ maxWidth: '300px', height: 'auto' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => setSelectedColor('black')} style={{ padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer' }}>Black</button>
        <button onClick={() => setSelectedColor('green')} style={{ padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer' }}>Green</button>
        <button onClick={() => setSelectedColor('white')} style={{ padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer' }}>White</button>
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Why REFOOT?</h2>

      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem', marginBottom: '2rem' }}>
        <li>• Copper-infused zones reduce inflammation after workouts</li>
        <li>• Gradient compression supports circulation and muscle recovery</li>
        <li>• Breathable mesh and moisture control for all-day comfort</li>
        <li>• Designed by athletes, for athletes</li>
      </ul>

      {/* Testimonials Section */}
      <section style={{ maxWidth: '700px', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What Athletes Are Saying</h2>
        <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
          "These socks changed how I recover after training. No more sore arches."<br />
          <span style={{ fontWeight: 'bold' }}>— Jordan, CrossFit Coach</span>
        </blockquote>
        <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
          "It’s like compression sleeves for my feet. I wear them after every run."<br />
          <span style={{ fontWeight: 'bold' }}>— Taylor, Marathoner</span>
        </blockquote>
        <blockquote style={{ fontStyle: 'italic' }}>
          "Honestly, I didn’t expect socks to help recovery, but these really do."<br />
          <span style={{ fontWeight: 'bold' }}>— Chris, Collegiate Wrestler</span>
        </blockquote>
      </section>

      <footer style={{ fontSize: '0.875rem' }}>
        © 2025 REFOOT. All rights reserved.
      </footer>
    </main>
  );
}
