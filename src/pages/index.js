import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    if (!validateEmail(email)) {
      e.preventDefault();
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
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
      </Head>

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        REFOOT™ Recovery Socks
      </h1>

      <p style={{ maxWidth: '600px', marginBottom: '1.5rem' }}>
        Recover stronger. Train smarter. Premium post-workout socks engineered
        for athletes who demand more than just cotton.
      </p>

      <form
        action="https://formsubmit.co/carson4wilcox@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
        {submitted && (
          <p style={{ color: '#00c853', fontSize: '0.9rem' }}>
            &#10003; You&#39;re on the list!
          </p>
        )}
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

      <div style={{ backgroundColor: '#111', padding: '1rem', borderRadius: '12px', marginBottom: '2rem' }}>
        <img
          src="/images/black-sock.png"
          alt="REFOOT recovery sock"
          style={{ maxWidth: '300px', height: 'auto' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => setEmail('')} style={colorButtonStyle}>Black</button>
        <button onClick={() => setEmail('')} style={colorButtonStyle}>White</button>
        <button onClick={() => setEmail('')} style={colorButtonStyle}>Green</button>
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Why REFOOT?</h2>

      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
        <li>&bull; Copper-infused zones reduce inflammation after workouts</li>
        <li>&bull; Gradient compression supports circulation and muscle recovery</li>
        <li>&bull; Breathable mesh and moisture control for all-day comfort</li>
        <li>&bull; Designed by athletes, for athletes</li>
      </ul>

      <footer style={{ marginTop: '3rem', fontSize: '0.875rem' }}>
        &copy; 2025 REFOOT. All rights reserved.
      </footer>
    </main>
  );
}

const colorButtonStyle = {
  backgroundColor: '#222',
  color: '#fff',
  padding: '0.5rem 1rem',
  border: '1px solid #555',
  borderRadius: '6px',
  cursor: 'pointer',
};
