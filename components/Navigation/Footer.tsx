"use client";
export default function Footer() {
  return (
    <footer style={{ position: "relative", background: "#101a3d" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "72px 56px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              maxWidth: 300,
            }}
          >
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Building strong relationships with reliable subcontractors and
              suppliers — quality construction materials and engineering
              services since 1979.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 999,
                padding: "5px 5px 5px 18px",
                gap: 8,
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  fontSize: 13,
                }}
              />
              <button
                style={{
                  background: "#c8963e",
                  color: "#101a3d",
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "11px 18px",
                  borderRadius: 999,
                  border: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              paddingTop: 8,
            }}
          >
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                border: "1px solid rgba(200,150,62,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Playfair Display', serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#c8963e",
              }}
            >
              GI
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Gree{" "}
              <span style={{ color: "#c8963e", fontStyle: "italic" }}>
                Iloson
              </span>
            </span>
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
              }}
            >
              Group of Companies
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "flex-end",
            }}
          >
            <a
              href="mailto:info@greeiloson.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
                info@greeiloson.com
              </span>
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: "rgba(200,150,62,0.14)",
                  border: "1px solid rgba(200,150,62,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c8963e",
                }}
              >
                ✉
              </span>
            </a>
            <a
              href="tel:09065611162"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
                0906 561 1162
              </span>
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: "rgba(200,150,62,0.14)",
                  border: "1px solid rgba(200,150,62,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c8963e",
                }}
              >
                ☎
              </span>
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.65)",
                  textAlign: "right",
                }}
              >
                28B, Ondo Road, Akure,
                <br />
                Ondo State, Nigeria.
              </span>
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: "rgba(200,150,62,0.14)",
                  border: "1px solid rgba(200,150,62,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c8963e",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c8963e"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginTop: 6,
              }}
            >
              <a
                href="#"
                aria-label="Facebook"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                f
              </a>
              <a
                href="#"
                aria-label="Instagram"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                x
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                in
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          height: 1,
          background: "rgba(255,255,255,0.1)",
          marginTop: 56,
        }}
      />

      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          padding: "22px 56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", margin: 0 }}>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>
            Gree Iloson Group of Companies
          </span>
          . All Rights Reserved.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <a
            href="#"
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
            }}
          >
            About
          </a>
          <a
            href="#"
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
            }}
          >
            Services
          </a>
          <a
            href="#"
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
          <span
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.4)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 999,
              padding: "6px 14px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Est. 1979
          </span>
        </div>
      </div>
    </footer>
  );
}
