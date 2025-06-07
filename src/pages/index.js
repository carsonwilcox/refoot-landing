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

      <button
        style={{
          backgroundColor: '#00c853',
          color: '#000',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '2rem',
        }}
      >
        Join the Waitlist
      </button>

      {/* ✅ Corrected image tag */}
      <div style={{ backgroundColor: '#111', padding: '1rem', marginBottom: '2rem' }}>
        <img
          src="/images/sock.png"
          alt="REFOOT recovery sock"
          style={{ maxWidth: '300px', width: '100%', height: 'auto' }}
        />
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
