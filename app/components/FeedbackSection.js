"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./FeedbackSection.css";

const reviews = [
  { name: "Arun", role: "Host", img: "/users/u1.jpg", text: "Very smooth hosting experience. Payments are always on time." },
  { name: "Rohit", role: "Car Owner", img: "/users/u2.jpg", text: "Support team is responsive and professional." },
  { name: "Karthick", role: "Driver", img: "/users/u3.jpg", text: "Best platform I’ve used for car hosting." },
  { name: "Suresh", role: "Host", img: "/users/u4.jpg", text: "Transparent pricing and easy dashboard." },
  { name: "Ajith", role: "Owner", img: "/users/u5.jpg", text: "I feel safe hosting my car here." },
  { name: "Manoj", role: "Driver", img: "/users/u6.jpg", text: "Excellent verification process." },
  { name: "Vijay", role: "Host", img: "/users/u7.jpg", text: "Great experience overall." },
  { name: "Ramesh", role: "Owner", img: "/users/u8.jpg", text: "Simple onboarding and good earnings." },
  { name: "Deepak", role: "Driver", img: "/users/u9.jpg", text: "Very reliable platform." },
  { name: "Prakash", role: "Host", img: "/users/u10.jpg", text: "Highly recommended for car hosts." },
];

export default function FeedbackSection() {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const intervalRef = useRef(null); // 🔁

  const total = reviews.length;
  const prev = (current - 1 + total) % total;
  const next = (current + 1) % total;

  /* 🔁 AUTO MOVE EVERY 3 SECONDS */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % total);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [total]);

  /* 📱 Swipe support */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) setCurrent(next);
    if (endX - startX.current > 50) setCurrent(prev);
  };

  return (
    <section className="feedbackSection">
      <h2 className="feedbackTitle">Feedback</h2>
      <div className="feedbackLine"></div>

      <p className="feedbackDesc">
        We are obsessed with customer experience and happy to share what our
        hosts say about MM Miles.
      </p>

      <div
        className="feedbackRow"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {[prev, current, next].map((index, pos) => (
          <div
            key={index}
            className={`feedbackCard ${pos === 1 ? "active" : "side"} slide`}
          >
            <div className="avatar">
              <Image
                src={reviews[index].img}
                alt={reviews[index].name}
                width={60}
                height={60}
              />
            </div>

            <h4>{reviews[index].name}</h4>
            <span>{reviews[index].role}</span>
            <p>{reviews[index].text}</p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="feedbackDots">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}
