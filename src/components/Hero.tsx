import { useEffect, useState } from "react";

const slides = [
  {
    title: "Press-On Nails Collection",
    caption: "Chrome, jelly and 3D flower sets made for your main-character moment.",
    bg: "linear-gradient(120deg, #ff9ac6, #b48cff)",
  },
  {
    title: "Dreamy Makeup Vanity",
    caption: "Fairytale compacts, glossy lips and glow essentials for every mood.",
    bg: "linear-gradient(120deg, #ffb6c9, #ffd9a8)",
  },
  {
    title: "Pretty Little Bags",
    caption: "Ribbons, charms and scarves. Because your bag deserves a glow-up too.",
    bg: "linear-gradient(120deg, #c9a7ff, #ff8fb8)",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section className="hero" style={{ background: slide.bg }}>
      <button
        className="hero-arrow"
        onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
      >
        ‹
      </button>

      <div className="hero-text">
        <h1>{slide.title}</h1>
        <p>{slide.caption}</p>
        <a href="#products" className="btn btn-white">
          Shop Now
        </a>
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <button
        className="hero-arrow"
        onClick={() => setIndex((index + 1) % slides.length)}
      >
        ›
      </button>
    </section>
  );
}