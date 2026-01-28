"use client";
import { useEffect, useRef, useState } from "react";
import "./StrategicSection.css";

export default function StrategicSection() {
  const sectionRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  // 🌊 Parallax movement for circles
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = window.innerHeight - rect.top;
      setOffsetY(scrollProgress * 0.06); // subtle parallax
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="strategicSection">
      <div className="strategicContainer">

        {/* LEFT CONTENT */}
        <div className="strategicLeft">
          <h2>
            We are a <br />
            <span>strategic choice</span>
          </h2>

          <p>
            We’re on a mission to bring transparency in Car Hosting and show you
            upfront.
          </p>

          <button className="strategicBtn">
            What are you waiting for? Get a call.
          </button>
        </div>

        {/* RIGHT FEATURES */}
        <div className="strategicRight">

          {/* Decorative Circles with Parallax */}
          <div
            className="circle circleOne"
            style={{ transform: `translate(-50%, ${offsetY * 0.4}px)` }}
          ></div>
          <div
            className="circle circleTwo"
            style={{ transform: `translate(-50%, ${offsetY * 0.6}px)` }}
          ></div>

          <div className="featureCard topLeft">
            <div className="icon">🔒</div>
            <h4>Trusted Users</h4>
            <p>Driven only by verified, trusted drivers - with full document validation.</p>
          </div>

          <div className="featureCard topRight">
            <div className="icon">🔐</div>
            <h4>We’ve Got You</h4>
            <p>Our hosts are the foundation of MMMiles, Backed by 24/7 support.</p>
          </div>

          <div className="featureCard bottomLeft">
            <div className="icon">💰</div>
            <h4>Always On-Time</h4>
            <p>Your earnings, securely processed and paid on time guaranteed.</p>
          </div>

          <div className="featureCard bottomRight">
            <div className="icon">📊</div>
            <h4>100% Data Security</h4>
            <p>Host data is strictly confidential and securely protected</p>
          </div>

        </div>
      </div>
    </section>
  );
}