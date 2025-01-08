import React from "react";
import Navbar from '../components/Navbar';  // Assuming the Navbar component is in the same directory
import Footer from '../components/Footer';  // Assuming the Footer component is in the same directory

const Contact = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <section style={styles.container}>
        <div style={styles.innerContainer}>
          {/* Contact Header */}
          <h1 style={styles.heading}>Get in Touch</h1>
          <p style={styles.subheading}>
            We'd love to hear from you! Reach out with any questions, feedback, or collaborations.
          </p>

          {/* Contact Form */}
          <form style={styles.form}>
            <input style={styles.input} type="text" placeholder="Your Name" required />
            <input style={styles.input} type="email" placeholder="Your Email" required />
            <textarea
              style={styles.textarea}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button style={styles.button}>Submit</button>
          </form>

          {/* Quick Links Section */}
          <div style={styles.linksContainer}>
            <h3 style={styles.linksHeading}>Quick Links</h3>
            <div style={styles.linksGrid}>
              <a href="/faq" style={styles.link}>
                FAQs
              </a>
              <a href="/support" style={styles.link}>
                Support
              </a>
              <a href="/courses" style={styles.link}>
                Explore Courses
              </a>
              <a href="/privacy-policy" style={styles.link}>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    padding: "50px 20px",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)", // Gradient background
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    maxWidth: "800px",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent card
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "30px",
  },
  input: {
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    width: "100%",
  },
  textarea: {
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    width: "100%",
    resize: "none",
  },
  button: {
    padding: "15px 20px",
    fontSize: "1rem",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.3s",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
  linksContainer: {
    marginTop: "30px",
    textAlign: "center",
  },
  linksHeading: {
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
  linksGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    padding: "10px 15px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    transition: "background 0.3s, transform 0.3s",
  },
  linkHover: {
    background: "rgba(255, 255, 255, 0.4)",
    transform: "scale(1.05)",
  },
};

export default Contact;
