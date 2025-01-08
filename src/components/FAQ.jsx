import React, { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFAQ = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section style={styles.faq}>
      <h2 style={styles.heading}>Frequently Asked Questions</h2>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={styles.searchBar}
        />
      </div>
      <div style={styles.faqContent}>
        {filteredFAQ.length > 0 ? (
          filteredFAQ.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))
        ) : (
          <p style={styles.noResults}>No questions found...</p>
        )}
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  return (
    <div style={styles.faqItem}>
      <h4 style={styles.question}>{question}</h4>
      <p style={styles.answer}>{answer}</p>
    </div>
  );
};

const faqs = [
  {
    question: "What is MindQuest?",
    answer: "MindQuest is an online learning platform offering courses in various subjects.",
  },
  {
    question: "How do I sign up?",
    answer: "Sign up by visiting the homepage and registering with your email or Google/Facebook account.",
  },
  {
    question: "Can I access on mobile?",
    answer: "Yes, MindQuest is mobile-friendly and works seamlessly on smartphones and tablets.",
  },
  {
    question: "Can I get a certificate after completing a course?",
    answer: "Yes, many courses offer certificates upon successful completion. You can download and showcase your certificate.",
  },
  {
    question: "Do you offer free trials?",
    answer: "Yes, you can try any course for free for 7 days before committing to a subscription plan.",
  },
  {
    question: "Are there any discounts for students?",
    answer: "Yes, we offer student discounts. Please check our discounts page for more information.",
  },
];

const styles = {
  faq: {
    padding: "80px 30px",
    background: "linear-gradient(45deg,rgb(159, 129, 171),rgb(133, 108, 174),rgb(62, 183, 216),rgb(189, 223, 192))", // Purple Pizzazz Gradient
    borderRadius: "15px",
    boxShadow: "0 8px 50px rgba(0, 0, 0, 0.1)",
    animation: "gradientShift 5s ease-in-out infinite", // Gradient animation
    backgroundSize: "400% 400%", // Dynamic gradient transition
    transition: "background 2s ease", // Smooth background transition
    marginBottom: "60px", // Adds spacing below the FAQ section
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
    textShadow: "3px 3px 12px rgba(0, 0, 0, 0.3)", // Enhanced text shadow for depth
  },
  searchContainer: {
    textAlign: "center",
    marginBottom: "30px",
  },
  searchBar: {
    padding: "12px 20px",
    fontSize: "1.1rem",
    width: "50%",
    borderRadius: "10px",
    border: "1px solid #ddd",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    outline: "none",
    transition: "all 0.3s ease",
  },
  faqContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent background with opacity
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 50px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(12px)", // More intense frosted glass effect
    transition: "transform 0.5s ease-in-out", // Smooth hover transition
  },
  faqItem: {
    marginBottom: "25px", // Increased spacing between items
    width: "100%",
    maxWidth: "700px",
    transition: "transform 0.3s ease-in-out", // Add hover effect for interactivity
  },
  question: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "12px",
    fontWeight: "600",
    letterSpacing: "1px",
    cursor: "pointer", // Indicating interactivity
    transition: "color 0.3s ease-in-out", // Smooth color transition on hover
  },
  answer: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: "1.6",
    opacity: "0.9",
    fontStyle: "italic",
  },
  noResults: {
    fontSize: "1.5rem",
    color: "#888",
    textAlign: "center",
    marginTop: "20px",
  },

  // Gradient Animation
  "@keyframes gradientShift": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
};

export default FAQ;
