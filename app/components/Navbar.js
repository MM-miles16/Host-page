"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Lock scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
    setLearnOpen(false);
  }, [pathname]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLearnOpen(false);
      }
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  const go = (path) => {
    setMenuOpen(false);
    setLearnOpen(false);
    router.push(path);
  };

  const isLearnActive = pathname.startsWith("/learn-more");

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => router.push("/")}>
            <Image src="/mlogo.jpg" alt="MMMiles" width={110} height={33} />
          </div>

          {/* DESKTOP NAV */}
          <nav className="desktop-nav">
            <div className="dropdown" ref={dropdownRef}>
              <button
                className={`nav-link ${isLearnActive ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLearnOpen((p) => !p);
                }}
              >
                Learn more
                <span className={`caret ${learnOpen ? "open" : ""}`}>▾</span>
              </button>

              <div className={`dropdown-menu ${learnOpen ? "show" : ""}`}>
                <span onClick={() => go("/learn-more/about")}>About Us</span>
                <span onClick={() => go("/learn-more/reviews")}>Reviews</span>
                <span onClick={() => go("/learn-more/faqs")}>FAQ's</span>
                <span onClick={() => go("/learn-more/contact")}>Contact Us</span>
              </div>
            </div>

            <button className="cta" onClick={() => go("/request-call")}>
              Request a Call
            </button>
          </nav>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="mobile-overlay">
          <div className="mobile-header">
            <Image src="/mlogo.jpg" alt="MMMiles" width={110} height={33} />
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              ✕
            </button>
          </div>

          <div className="mobile-content">
            {/* LEARN MORE */}
            <button
              className="mobile-main-link"
              onClick={() => setLearnOpen((p) => !p)}
            >
              Learn more
              <span className={`mobile-caret ${learnOpen ? "open" : ""}`}>▾</span>
            </button>

            {/* OPTIONS (ONLY AFTER CLICK) */}
            {learnOpen && (
              <div className={`mobile-options ${learnOpen ? "show" : ""}`}>
  <span onClick={() => go("/learn-more/about")}>About Us</span>
  <span onClick={() => go("/learn-more/reviews")}>Reviews</span>
  <span onClick={() => go("/learn-more/faqs")}>FAQ's</span>
  <span onClick={() => go("/learn-more/contact")}>Contact Us</span>
</div>
            )}

            {/* REQUEST CALL BELOW */}
            <button className="mobile-cta" onClick={() => go("/request-call")}>
              Request a Call
            </button>
          </div>
        </div>
      )}
    </>
  );
}