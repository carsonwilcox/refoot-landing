import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>REFOOT™ Recovery Socks</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>

      <main
        style={{
          fontFamily: "Inter, sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          minHeight: "100vh",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "0.5rem" }}>
          REFOOT™
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#aaa", marginBottom: "2rem" }}>
          Performance recovery, re-engineered.
        </p>

        <p style={{ maxWidth: "600px", marginBottom: "2rem", fontSize: "1rem" }}>
          Premium post-workout socks engineered for athletes who demand more than just cotton.
        </p>

        {/* Waitlist Signup Form */}
        <form
          action="https://formsubmit.co/carson4wilcox@gmail.com"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <input type="hidden" name="_next" value="https://refootwear.com/thanks" />
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              border: "none",
              fontSize: "1rem",
              width: "100%",
              maxWidth: "300px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#00c853",
              color: "#000",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Join the Waitlist
          </button>
        </form>

        <div style={{ backgroundColor: "#111", padding: "1rem", borderRadius: "16px", marginBottom: "3rem", boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}>
          <img
            src="/images/sock.png"
            alt="REFOOT recovery sock"
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </div>

        <hr style={{ border: "none", height: "1px", backgroundColor: "#222", width: "100%", marginBottom: "3rem" }} />

        <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>Why REFOOT?</h2>

        <ul style={{ listStyle: "none", padding: 0, fontSize: "1rem", lineHeight: "1.8" }}>
          <li>• Copper-infused zones reduce inflammation after workouts</li>
          <li>• Gradient compression supports circulation and muscle recovery</li>
          <li>• Breathable mesh and moisture control for all-day comfort</li>
          <li>• Designed by athletes, for athletes</li>
        </ul>

        <footer style={{ marginTop: "4rem", fontSize: "0.875rem", color: "#666" }}>
          <hr style={{ border: "none", height: "1px", backgroundColor: "#222", width: "100%", marginBottom: "1rem" }} />
          <p>© 2025 REFOOT. All rights reserved.</p>
          <p style={{ marginTop: "0.5rem" }}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#00c853", textDecoration: "none" }}>
              Instagram
            </a>
            {"  |  "}
            <a href="mailto:carson4wilcox@gmail.com" style={{ color: "#00c853", textDecoration: "none" }}>
              Contact
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
