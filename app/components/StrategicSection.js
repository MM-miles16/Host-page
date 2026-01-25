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
            What you are waiting for? Try Now
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
            <h4>Security Teams</h4>
            <p>Security teams work to keep your money safe</p>
          </div>

          <div className="featureCard topRight">
            <div className="icon">🔐</div>
            <h4>Authentication</h4>
            <p>We use top authentication to protect your account</p>
          </div>

          <div className="featureCard bottomLeft">
            <div className="icon">🏦</div>
            <h4>Safety Funds</h4>
            <p>Hold money with established financial institutions</p>
          </div>

          <div className="featureCard bottomRight">
            <div className="icon">📊</div>
            <h4>Account Place</h4>
            <p>Place all your account, all in one place</p>
          </div>

        </div>
      </div>
    </section>
  );
}
