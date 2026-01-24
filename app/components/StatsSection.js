"use client";
import { useEffect, useRef, useState } from "react";
import "./StatsSection.css";

const statsData = [
  { value: 500, label: "Happy Hosts" },
  { value: 10, label: "Years of Experience" },
  { value: 200, label: "Booking per Month" },
];

export default function StatsCounterSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  // 👀 Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          // 🔁 Reset when scrolling away
          setVisible(false);
          setCounts(statsData.map(() => 0));
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔢 Fast count animation (re-triggers)
  useEffect(() => {
    if (!visible) return;

    statsData.forEach((stat, index) => {
      const duration = 600; // ⚡ VERY FAST
      const startTime = performance.now();

      const animate = (currentTime) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        const value = Math.floor(progress * stat.value);

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = value;
          return updated;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className={`counterSection ${visible ? "active" : ""}`}
    >
      <div className="counterGrid">
        {statsData.map((item, i) => (
          <div className="counterItem" key={i}>
            <h2>{counts[i]}+</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
