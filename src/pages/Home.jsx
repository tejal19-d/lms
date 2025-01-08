// Home.js
import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";  // Import Chatbot

const Home = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <Hero />
        <section style={styles.section}>
          <Features />
        </section>
        
        <section style={styles.section}>
          <Testimonials />
        </section>
        <section style={styles.section}>
          <Pricing />
        </section>
        <section style={styles.section}>
          <FAQ />
        </section>
        <section style={styles.section}>
          <Contact />
        </section>
      </main>
      <Footer />
      <Chatbot /> {/* Include the Chatbot */}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    lineHeight: "1.6",
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  main: {
    paddingTop: "60px",
  },
  section: {
    padding: "40px 20px",
    marginBottom: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    maxWidth: "1200px",
  },
};

export default Home;
