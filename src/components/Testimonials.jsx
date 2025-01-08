import React, { useState } from "react";

const Testimonials = () => {
  const testimonialsData = [
    { feedback: "This platform transformed my career!", name: "Jane Doe" },
    { feedback: "The live sessions are amazing.", name: "John Smith" },
    { feedback: "I got my certification, and it helped me land my dream job.", name: "Alice Johnson" },
    { feedback: "The community support is unmatched!", name: "Michael Brown" },
    { feedback: "Personalized learning made studying easier for me.", name: "Sophia Davis" },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  return (
    <section style={styles.testimonials}>
      <h2 style={styles.heading}>What Our Students Say</h2>
      <div style={styles.testimonialContainer}>
        <blockquote style={styles.card}>
          <p style={styles.feedback}>
            "{testimonialsData[currentTestimonial].feedback}"
          </p>
          <footer style={styles.author}>
            - {testimonialsData[currentTestimonial].name}
          </footer>
        </blockquote>
        <div style={styles.controls}>
          <button style={styles.button} onClick={handlePrev}>
            ◀
          </button>
          <button style={styles.button} onClick={handleNext}>
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  testimonials: {
    padding: "50px",
    background: "linear-gradient(45deg,rgb(159, 129, 171),rgb(133, 108, 174),rgb(62, 183, 216),rgb(189, 223, 192))", // Gradient background
    color: "#fff",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  testimonialContainer: {
    textAlign: "center",
    position: "relative",
    maxWidth: "600px",
    margin: "0 auto",
  },
  card: {
    padding: "30px",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontStyle: "italic",
    backdropFilter: "blur(10px)",
  },
  feedback: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  author: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#fff",
  },
  controls: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    backgroundColor: "#ffffff",
    color: "#2575fc",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.2s, transform 0.2s",
  },
  buttonHover: {
    backgroundColor: "#2575fc",
    color: "#ffffff",
  },
};

export default Testimonials;
