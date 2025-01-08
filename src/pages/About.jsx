import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <section style={styles.hero}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.subtitle}>
          At MindQuest, we're revolutionizing education with cutting-edge AI to make learning accessible, engaging, and personalized for everyone.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is to empower learners worldwide by providing high-quality, affordable, and accessible education. We believe that learning should be a continuous and enjoyable journey.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Meet the Team</h2>
        <div style={styles.teamGrid}>
          <div style={styles.teamCard}>
            <img
              src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHRlYW0lMjBtZW1iZXJzJTIwcHJvZmlsZSUyMGFzJTIwaW5zdHVyY3RvcnxlbnwwfHwwfHx8MA%3D%3D/150"
              alt="Team Member"
              style={styles.image}
            />
            <h3 style={styles.teamName}>Jane Doe</h3>
            <p style={styles.teamRole}>CEO</p>
          </div>
          <div style={styles.teamCard}>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/150"
              alt="Team Member"
              style={styles.image}
            />
            <h3 style={styles.teamName}>John Smith</h3>
            <p style={styles.teamRole}>CTO</p>
          </div>
          <div style={styles.teamCard}>
            <img
              src="https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHRlYW0lMjBtZW1iZXJzJTIwcHJvZmlsZSUyMGFzJTIwaW5zdHVyY3RvcnxlbnwwfHwwfHx8MA%3D%3D/150"
              alt="Team Member"
              style={styles.image}
            />
            <h3 style={styles.teamName}>Emily Johnson</h3>
            <p style={styles.teamRole}>Head of Design</p>
          </div>
        </div>
      </section>

      {/* New AI Features Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>AI-Powered Learning</h2>
        <p style={styles.text}>
          MindQuest leverages the power of artificial intelligence to personalize your learning experience. Whether you are just starting or looking to master a subject, our AI adapts to your needs to provide tailored content, recommendations, and feedback.
        </p>
        <ul style={styles.featuresList}>
          <li style={styles.featureItem}>Personalized Learning Paths</li>
          <li style={styles.featureItem}>AI-driven Course Recommendations</li>
          <li style={styles.featureItem}>Smart Assessment and Feedback</li>
          <li style={styles.featureItem}>Real-Time Learning Analytics</li>
        </ul>
      </section>

      {/* New "How We Help" Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>How We Help</h2>
        <p style={styles.text}>
          MindQuest is designed to help students learn at their own pace, anytime and anywhere. Our platform offers a flexible, interactive learning environment where you can master new skills, track progress, and receive valuable insights.
        </p>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.ctaText}>Join us on our journey to make learning accessible for all!</h2>
        <button style={styles.ctaButton}>Get Started</button>
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    lineHeight: "1.6",
    padding: "20px",
    background: "linear-gradient(135deg, #4f8dff, #2b6cb0)",
    color: "white",
  },
  hero: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#f3f4f6",
    marginBottom: "30px",
    borderRadius: "10px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#3b82f6",
    animation: "fadeIn 1s ease-out",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginTop: "10px",
    color: "#4b5563",
    fontStyle: "italic",
  },
  section: {
    padding: "30px 20px",
    marginBottom: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    textAlign: "center",
    color: "#3b82f6",
  },
  text: {
    fontSize: "1.1rem",
    color: "#374151",
    textAlign: "center",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  teamCard: {
    textAlign: "center",
    padding: "15px",
    border: "1px solid rgb(162, 211, 231)",
    borderRadius: "10px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  teamCardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "10px",
    transition: "transform 0.3s ease",
  },
  teamName: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  teamRole: {
    fontSize: "1rem",
    color: "#6b7280",
  },
  featuresList: {
    listStyleType: "none",
    padding: "0",
    textAlign: "center",
    marginTop: "20px",
  },
  featureItem: {
    fontSize: "1.2rem",
    color: "#374151",
    marginBottom: "10px",
  },
  cta: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#3b82f6",
    color: "white",
    borderRadius: "5px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  },
  ctaText: {
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
  ctaButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "white",
    color: "#3b82f6",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  ctaButtonHover: {
    backgroundColor: "#2b6cb0",
    color: "white",
  },
};

export default About;
