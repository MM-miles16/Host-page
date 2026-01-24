"use client";
import Image from "next/image";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="heroContainer">

        {/* LEFT */}
        <div className="heroLeft">
          <h1 className="heroTitle">
            Same <span>Car</span>, same <span>City</span>, <br />
            same <span>Demand</span>
          </h1>

          <p className="heroSubtitle">
            Most platforms take <strong>40%</strong>.<br />
            only difference is <span className="brand">MMMiles</span>.
            we cap commission upto <span className="brand">20%</span>
          </p>

          <button className="heroBtn">
            HOST TODAY, PAY LESS COMMISSION
          </button>
        </div>

        {/* RIGHT */}
        <div className="heroRight">
          <div className="carWrapper">
            <Image
              src="/hero.jpg"   // any car image
              alt="Cars"
              fill
              priority
              className="carImage"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
