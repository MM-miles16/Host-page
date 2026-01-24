"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./StepsSection.css";

export default function StepsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  // 👀 Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 🎢 Parallax upward motion
  useEffect(() => {
    if (!visible) return;

    const handleScroll = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;

      const scrollProgress = Math.max(0, window.innerHeight - rect.top);
      setOffsetY(scrollProgress * 0.04); // subtle parallax
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    <section ref={sectionRef} className="stepsSection">
      {/* Heading */}
      <h2 className="stepsHeading">
        Still Confused? Follow the easy steps to Start
      </h2>

      {/* Image */}
      <div
        className={`stepsImageWrapper ${visible ? "visible" : ""}`}
        style={{ transform: `translateY(${-offsetY}px)` }}
      >
        {/* Desktop Image */}
        <div className="stepsDesktop">
          <Image
            src="/steps.png"
            alt="Steps to start"
            width={1200}
            height={400}
            priority
            className="stepsImage"
          />
        </div>

        {/* Mobile Image */}
        <div className="stepsMobile">
          <Image
            src="/steps-mobile.png"
            alt="Steps to start mobile"
            width={400}
            height={600}
            priority
            className="stepsImage"
          />
        </div>
      </div>
    </section>
  );
}
