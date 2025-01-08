import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand Section */}
        <div style={styles.brandSection}>
          <h3 style={styles.brandName}>MindQuest</h3>
          <p style={styles.description}>
            Empowering learners worldwide with high-quality, affordable education.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.linksSection}>
          <h4 style={styles.sectionTitle}>Quick Links</h4>
          <ul style={styles.linksList}>
            <li style={styles.linkItem}>
              <a href="/" style={styles.link}>Home</a>
            </li>
            <li style={styles.linkItem}>
              <a href="/about" style={styles.link}>About</a>
            </li>
            <li style={styles.linkItem}>
              <a href="/courses" style={styles.link}>Courses</a>
            </li>
            <li style={styles.linkItem}>
              <a href="/contact" style={styles.link}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div style={styles.socialSection}>
          <h4 style={styles.sectionTitle}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.socialLink}>
              <i className="fab fa-facebook" style={styles.icon}></i>
            </a>
            <a href="https://twitter.com" style={styles.socialLink}>
              <i className="fab fa-twitter" style={styles.icon}></i>
            </a>
            <a href="https://instagram.com" style={styles.socialLink}>
              <i className="fab fa-instagram" style={styles.icon}></i>
            </a>
            <a href="https://linkedin.com" style={styles.socialLink}>
              <i className="fab fa-linkedin" style={styles.icon}></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={styles.copyright}>
        <p>© 2025 MindQuest. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "40px 20px",
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  brandSection: {
    flex: "1",
    margin: "10px",
  },
  brandName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  description: {
    marginTop: "10px",
    fontSize: "1rem",
    lineHeight: "1.6",
  },
  linksSection: {
    flex: "1",
    margin: "10px",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  linksList: {
    listStyleType: "none",
    padding: 0,
  },
  linkItem: {
    marginBottom: "5px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  },
  socialSection: {
    flex: "1",
    margin: "10px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  socialLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.5rem",
  },
  icon: {
    fontSize: "1.5rem",
  },
  copyright: {
    marginTop: "20px",
    borderTop: "1px solid #444",
    paddingTop: "10px",
    fontSize: "0.9rem",
  },
};

export default Footer;
