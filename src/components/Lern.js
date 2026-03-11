import React, { useRef } from "react";
import "./Tiltcard.css";

export default function Lern() {
  const wrapperRef = useRef(null);
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMove = (e) => {
    const wrapper = wrapperRef.current;
    const card = cardRef.current;
    const glow = glowRef.current;

    const rect = wrapper.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -30;
    const rotateY = (x / rect.width - 0.5) * 30;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;

    glow.style.opacity = 1;
    glow.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
  };

  const handleLeave = () => {
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    glowRef.current.style.opacity = 0;
  };

  return (
    <div
      className="card-wrapper"
      ref={wrapperRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="glow" ref={glowRef}></div>
      <div className="card" ref={cardRef}></div>
    </div>
  );
}
