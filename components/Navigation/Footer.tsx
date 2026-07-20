"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ position: "relative", background: "#101a3d" }}>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col-left" style={{ gridArea: "left" }}>
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
            <div className="footer-newsletter">
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

          <div className="footer-col-logo" style={{ gridArea: "logo" }}>
            <span className="footer-logo-img-wrap">
              <Image
                src="/gree-logo.jpg"
                alt="Gree Iloson Group of Companies logo"
                fill
                sizes="168px"
                className="footer-logo-img"
              />
            </span>
          </div>

          <div className="footer-col-right" style={{ gridArea: "right" }}>
            <a href="mailto:info@greeiloson.com" className="footer-contact-row">
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
                info@greeiloson.com
              </span>
              <span className="footer-icon-btn">✉</span>
            </a>
            <a href="tel:09065611162" className="footer-contact-row">
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
                0906 561 1162
              </span>
              <span className="footer-icon-btn">☎</span>
            </a>
            <div className="footer-contact-row">
              <span
                className="footer-address"
                style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}
              >
                28B, Ondo Road, Akure,
                <br />
                Ondo State, Nigeria.
              </span>
              <span className="footer-icon-btn">
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

            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="footer-social-btn">
                f
              </a>
              <a href="#" aria-label="Instagram" className="footer-social-btn">
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
              <a href="#" aria-label="X" className="footer-social-btn">
                x
              </a>
              <a href="#" aria-label="LinkedIn" className="footer-social-btn">
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

      <div className="footer-bottom">
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", margin: 0 }}>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>
            Gree Iloson Group of Companies
          </span>
          . All Rights Reserved.
        </p>
        <div className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">
            About
          </a>
          <a href="#" className="footer-bottom-link">
            Services
          </a>
          <a href="#" className="footer-bottom-link">
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

      {/* Floating back-to-top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="footer-scroll-top"
        style={{
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? "auto" : "none",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#101a3d"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>

      <style jsx>{`
        .footer-inner {
          max-width: 1152px;
          margin: 0 auto;
          padding: 72px 56px 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          grid-template-areas: "left logo right";
          gap: 40px;
          align-items: start;
        }
        .footer-col-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 300px;
        }
        .footer-newsletter {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          padding: 5px 5px 5px 18px;
          gap: 8px;
        }
        .footer-col-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding-top: 8px;
        }
        .footer-logo-img-wrap {
          position: relative;
          width: 168px;
          height: 104px;
        }
        .footer-logo-img {
          object-fit: contain;
        }
        .footer-col-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-end;
        }
        .footer-contact-row {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .footer-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: rgba(200, 150, 62, 0.14);
          border: 1px solid rgba(200, 150, 62, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c8963e;
          flex-shrink: 0;
        }
        .footer-address {
          text-align: right;
        }
        .footer-socials {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 6px;
        }
        .footer-social-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          flex-shrink: 0;
        }
        .footer-bottom {
          max-width: 1152px;
          margin: 0 auto;
          padding: 22px 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .footer-bottom-link {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
        }
        .footer-scroll-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #c8963e;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          transition: opacity 0.3s ease;
          z-index: 40;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .footer-inner {
            padding: 56px 32px 0;
          }
          .footer-bottom {
            padding: 20px 32px;
          }
        }

        /* Mobile — reorder to logo -> message/CTA -> contact -> socials, all centered */
        @media (max-width: 640px) {
          .footer-inner {
            padding: 48px 20px 0;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            grid-template-areas:
              "logo"
              "left"
              "right";
            gap: 32px;
            justify-items: center;
            text-align: center;
          }
          .footer-col-left {
            max-width: none;
            width: 100%;
            align-items: center;
          }
          .footer-newsletter {
            width: 100%;
          }
          .footer-col-right {
            align-items: center;
            width: 100%;
          }
          .footer-contact-row {
            justify-content: center;
          }
          .footer-address {
            text-align: left;
          }
          .footer-bottom {
            padding: 20px;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 14px;
          }
          .footer-bottom-links {
            gap: 18px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .footer-scroll-top {
            width: 40px;
            height: 40px;
            bottom: 18px;
            right: 18px;
          }
        }
      `}</style>
    </footer>
  );
}
