import Image from 'next/image';

export default function Home() {
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

      <div
        style={{
          backgroundColor: '#111',
          padding: '1rem',
          borderRadius: '12px',
          marginBottom: '1rem',
        }}
      >
        <Image
          src="/images/sock-black.png"
          alt="REFOOT recovery sock"
          width={300}
          height={300}
        />
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Why REFOOT?</h2>

      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
        <li>• Copper-infused zones reduce inflammation after workouts</li>
        <li>• Gradient compression supports circulation and muscle recovery</li>
        <li>• Breathable mesh and moisture control for all-day comfort</li>
        <li>• Designed by athletes, for athletes</li>
      </ul>

      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={() => {
            const img = document.getElementById('sock-image');
            img.src = '/images/sock-black.png';
          }}
          style={{ padding: '0.5rem 1rem', borderRadius: '8px' }}
        >
          Black
        </button>
        <button
          onClick={() => {
            const img = document.getElementById('sock-image');
            img.src = '/images/sock-green.png';
          }}
          style={{ padding: '0.5rem 1rem', borderRadius: '8px' }}
        >
          Green
        </button>
        <button
          onClick={() => {
            const img = document.getElementById('sock-image');
            img.src = '/images/sock-white.png';
          }}
          style={{ padding: '0.5rem 1rem', borderRadius: '8px' }}
        >
          White
        </button>
      </div>

      <footer style={{ marginTop: '3rem', fontSize: '0.875rem' }}>
        © 2025 REFOOT. All rights reserved.
      </footer>
    </main>
  );
}
