"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./FeedbackSection.css";

const reviews = [
  { name: "Arun", 
    role: "Top Host", 
    img: "/users/u1.jpg", 
    text: "Secure hosting from day one. Insurance coverage is clearly defined. Support guided every process step. Earnings tracking is simple and transparent. Assistance available 24/7." 
  },

  { name: "Rohit", 
    role: "Verified Host", 
    img: "/users/u2.jpg", 
    text: "A platform built for serious hosts. Insurance adds complete peace of mind. Support responds without delay. Processes are smooth and professional. Reliable at every stage." 
  },

  { name: "Karthick", 
    role: "Owner Partner", 
    img: "/users/u3.jpg", 
    text: "High standards for safety and care. Insurance protection feels dependable. Issues handled with responsibility. Payments are timely and accurate. Hosting with confidence." 
  },

  { name: "Suresh", 
    role: "Host Partner", 
    img: "/users/u4.jpg", 
    text: "Effortless and well-managed hosting. Clear and structured insurance cover. Claim support was handled smoothly. Help available anytime needed. A premium hosting experience." 
  },

  { name: "Ajith", 
    role: "Fleet Host", 
    img: "/users/u5.jpg", 
    text: "Managing multiple cars is seamless. Insurance processes are well handled. Dedicated support around the clock. Clear visibility into earnings. Designed with hosts in mind." 
  },

  { name: "Manoj", 
    role: "Premium Host", 
    img: "/users/u6.jpg", 
    text: "Hosting feels structured and secure. Insurance coverage is well explained. Support is proactive and reliable. Earnings are clearly presented. Confidence in every booking." 
  },

  { name: "Vijay", 
    role: "Verified Host", 
    img: "/users/u7.jpg", 
    text: "A refined platform for car owners. Insurance protection is reassuring. Support team is available anytime. Operations are smooth and transparent. Built for long-term hosting." 
  },

  { name: "Ramesh", 
    role: "Owner", 
    img: "/users/u8.jpg", 
    text: "Safety standards are consistently high. Insurance gives complete clarity. Concerns are addressed promptly. Payments arrive on schedule. A dependable hosting experience." 
  },

  { name: "Deepak", 
    role: "Driver", 
    img: "/users/u9.jpg", 
    text: "Host Partner Hosting is simple and professional. Insurance process is well structured. Support assisted during key moments. Dashboard offers full visibility. Trustworthy and efficient." 
  },

  { name: "Prakash", 
    role: "Host", 
    img: "/users/u10.jpg", 
    text: "Managing vehicles is stress-free. Insurance handling is seamless. Dedicated support around the clock. Clear control over earnings. Designed for serious hosts." 
  },
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