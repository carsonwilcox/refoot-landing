import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Recovery() {
  const [selectedColor, setSelectedColor] = useState('black')
  const imageSrc = `/images/recovery-sock-${selectedColor}.png`

  return (
    <>
      <Head>
        <title>REFOOT™ Recovery Socks</title>
      </Head>

      {/* top-left nav */}
      <nav
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Link href="/" legacyBehavior>
          <a style={{ color: '#fff', textDecoration: 'none' }}>
            Performance
          </a>
        </Link>
        <Link href="/recovery" legacyBehavior>
          <a style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
            Recovery
          </a>
        </Link>
      </nav>

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
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          REFOOT™ Recovery Socks
        </h1>

        <p style={{ maxWidth: '600px', marginBottom: '2rem' }}>
          Help your muscles recover faster. Cushioned, supportive, and built
          for comfort after the grind.
        </p>

        {/* Color Picker */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          {['black', 'white', 'green'].map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              style={{
                padding: '0.5rem 1rem',
                background: selectedColor === color ? '#444' : '#222',
                border: '1px solid #555',
                borderRadius: '4px',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>

        {/* Sock Image */}
        <img
          src={imageSrc}
          alt={`Recovery sock in ${selectedColor}`}
          style={{ maxWidth: '300px', marginBottom: '2rem' }}
        />

        {/* Waitlist Signup Form */}
        <form
          action="https://formsubmit.co/you@yourdomain.com"
          method="POST"
          style={{ display: 'flex', gap: '0.5rem' }}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #555',
              background: '#111',
              color: '#fff',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: 'none',
              background: '#0a84ff',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Join Waitlist
          </button>
        </form>
      </main>
    </>
  )
}
