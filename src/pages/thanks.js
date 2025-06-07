export default function Thanks() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>You're on the list!</h1>
      <p style={{ fontSize: '1rem' }}>
        Thank you for joining the REFOOT waitlist. We'll keep you updated!
      </p>
    </main>
  );
}
