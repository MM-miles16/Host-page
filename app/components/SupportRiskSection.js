"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import "./SupportRiskSection.css";

export default function SupportRiskSection() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            // 🔁 REMOVE so it animates again on re-scroll
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="supportSection">
      <div className="supportContainer">

        {/* CARD 1 */}
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="supportCard supportCardLeft"
        >
          <div className="cardText">
            <h3>Support that never clocks out.</h3>
            <p>
              Real support. Real people. Our expert host team is
              available to guide you because when your car is on the
              road, support shouldn’t be offline.
            </p>
          </div>

          <div className="cardIcon">
            <Image src="/support.jpg" alt="24/7 Support" width={140} height={120} />
          </div>
        </div>

        {/* CARD 2 */}
        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="supportCard supportCardRight"
        >
          <div className="cardText">
            <h3>Host freely. We handle the risk.</h3>
            <p>
              Your car is fully insured, every trip, no exceptions.
              Our 100% coverage keeps your asset protected while it
              earns.
            </p>
          </div>

          <div className="cardIcon">
            <Image src="/insu.png" alt="Risk Protection" width={110} height={120} />
          </div>
        </div>

      </div>
    </section>
  );
}
