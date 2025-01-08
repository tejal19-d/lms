// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section style={styles.contact}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form style={styles.form}>
        <input style={styles.input} type="text" placeholder="Your Name" />
        <input style={styles.input} type="email" placeholder="Your Email" />
        <textarea
          style={styles.textarea}
          placeholder="Your Message"
          rows="4"
        />
        <button style={styles.button}>Submit</button>
      </form>
    </section>
  );
};

const styles = {
  contact: {
    padding: "100px 30px",
    background: "linear-gradient(45deg,rgb(159, 129, 171),rgb(133, 108, 174),rgb(62, 183, 216),rgb(189, 223, 192))", // Dynamic gradient mix
    borderRadius: "15px",
    boxShadow: "0 8px 50px rgba(0, 0, 0, 0.1)",
    animation: "gradientShift 5s ease-in-out infinite", // Gradient animation for a dynamic effect
    backgroundSize: "400% 400%", // Smooth transition for animated gradient
  },
  heading: {
    textAlign: "center",
    fontSize: "3rem",
    color: "#ffffff",
    marginBottom: "40px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "700",
    letterSpacing: "2px",
    textTransform: "uppercase",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)", // Added text shadow for emphasis
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slight opacity for contrast
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 50px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(8px)", // Adding blur effect for more modern look
  },
  input: {
    margin: "15px 0",
    padding: "12px",
    width: "100%",
    maxWidth: "500px",
    borderRadius: "8px",
    border: "2px solid #ddd",
    fontSize: "1rem",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
  },
  textarea: {
    margin: "15px 0",
    padding: "12px",
    width: "100%",
    maxWidth: "500px",
    borderRadius: "8px",
    border: "2px solid #ddd",
    fontSize: "1rem",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
  },
  button: {
    padding: "12px 30px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#1d4ed8",
    transform: "scale(1.05)", // Hover effect to make the button grow
  },
};

export default Contact;
