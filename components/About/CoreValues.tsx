"use client";
export default function CoreValues() {
  const values = [
    {
      n: "01",
      title: "Trust",
      tint: "gold",
      desc: "We believe trust is the foundation of every lasting relationship — the key to persuading our customers to choose our quality products and services.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c8963e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3l7 3v5.2c0 4.8-3 8.9-7 10.3-4-1.4-7-5.5-7-10.3V6z" />
          <path d="M9 12.2l2.1 2.1L15.5 10" />
        </svg>
      ),
    },
    {
      n: "02",
      title: "Excellence",
      tint: "navy",
      desc: "Our obsession for excellence drives everything we do — from the quality of products we supply to the precision of our engineering services.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#101a3d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 15c-2.8 0-5-3-5-6.5 0-1.5.4-2.7 1-3.5.9 1 2.3 1.6 4 1.6s3.1-.6 4-1.6c.6.8 1 2 1 3.5 0 3.5-2.2 6.5-5 6.5z" />
          <path d="M12 15v6" />
          <path d="M9 21h6" />
        </svg>
      ),
    },
    {
      n: "03",
      title: "Quality",
      tint: "gold",
      desc: "We ensure every product we supply gives our customers the performance and productivity that lets them realize the full value of their investment.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c8963e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6.5 4h11L21 9.5 12 21 3 9.5z" />
          <path d="M3 9.5h18" />
          <path d="M9 4l-2.5 5.5L12 21l5.5-11.5L15 4" />
        </svg>
      ),
    },
    {
      n: "04",
      title: "Client First",
      tint: "navy",
      desc: "Our commitment firstly is to the customers we serve. Our relationship does not end with a sale — it's a journey that starts with it.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#101a3d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12l4.5-4.5a2 2 0 012.8 0L11 9.2" />
          <path d="M22 12l-4.5-4.5a2 2 0 00-2.8 0L11 10.6l1.6 1.6a1.6 1.6 0 01-2.3 2.3L7 11.2" />
          <path d="M2 12v5.5a1 1 0 001 1h1.5" />
          <path d="M22 12v5.5a1 1 0 01-1 1h-1.5" />
        </svg>
      ),
    },
    {
      n: "05",
      title: "Purpose Beyond Profit",
      tint: "gold",
      desc: "A business is not successful if it is only committed to profit. It must create prosperity and well-being for all those connected with it.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c8963e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M15.5 8.5l-2 5-5 2 2-5z" />
        </svg>
      ),
    },
    {
      n: "06",
      title: "Impact",
      tint: "navy",
      desc: "Every project we undertake and every community we serve reflects our commitment to lasting positive impact across Nigeria.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#101a3d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21V10" />
          <path d="M12 10C12 6 9 4 5 4c0 4.5 3 6.5 7 6z" />
          <path d="M12 13c0-3.5 2.5-5 6-5 0 3.8-2.6 5.6-6 5.6" />
        </svg>
      ),
    },
  ];

  const tints = {
    gold: {
      bg: "#fffbf0",
      border: "#f0e0b0",
      ring: "conic-gradient(from 200deg,#c8963e,#e9c98a,#c8963e)",
      shadow: "rgba(200,150,62,0.28)",
      num: "#c8963e",
      bar: "#c8963e",
    },
    navy: {
      bg: "#f2f4fb",
      border: "#c7cee8",
      ring: "conic-gradient(from 200deg,#101a3d,#3a4a86,#101a3d)",
      shadow: "rgba(16,26,61,0.22)",
      num: "#101a3d",
      bar: "#101a3d",
    },
  };

  return (
    // <section style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 80px" }}>
    <section
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "72px 80px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          alignItems: "end",
          marginBottom: 52,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#c8963e",
              }}
            />
            <span
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "#c8963e",
              }}
            >
              WHAT DRIVES US
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 44,
              fontWeight: 700,
              color: "#101a3d",
              margin: 0,
            }}
          >
            Our Core Values
          </h2>
        </div>
        <p
          style={{
            fontSize: 14,
            color: "#8a8a94",
            lineHeight: 1.7,
            margin: 0,
            textAlign: "right",
          }}
        >
          These are the principles that guide every decision, every delivery and
          every relationship we build at Gree Iloson Group of Companies.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 20,
        }}
      >
        {values.map((v) => {
          const t = tints[v.tint as keyof typeof tints];
          return (
            <div
              key={v.n}
              style={{
                background: t.bg,
                border: `1px solid ${t.border}`,
                borderRadius: 22,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: t.ring,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 6px 16px ${t.shadow}`,
                  }}
                >
                  <span
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {v.icon}
                  </span>
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 30,
                    fontWeight: 700,
                    color: t.num,
                    opacity: 0.16,
                  }}
                >
                  {v.n}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 19,
                  color: "#101a3d",
                  margin: 0,
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#77767d",
                  lineHeight: 1.65,
                  margin: 0,
                  flex: 1,
                }}
              >
                {v.desc}
              </p>
              <div
                style={{
                  width: 40,
                  height: 3,
                  borderRadius: 999,
                  background: t.bar,
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
