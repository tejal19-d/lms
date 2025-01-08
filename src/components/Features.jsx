import React, { useState } from "react";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const featuresData = [
    {
      title: "Interactive Courses",
      description: "Learn through engaging content designed by experts.",
      courses: ["React Basics", "JavaScript Essentials", "HTML & CSS Fundamentals"],
    },
    {
      title: "Live Sessions",
      description: "Attend live classes with top instructors.",
      courses: ["Web Development Bootcamp", "AI & ML Live Workshop", "Cloud Computing Webinar"],
    },
    {
      title: "Certifications",
      description: "Earn certificates to showcase your skills.",
      courses: ["Full-Stack Developer Certification", "Python Programming Certificate"],
    },
    {
      title: "Advanced Programming",
      description: "Master advanced concepts in programming.",
      courses: ["Data Structures and Algorithms", "System Design Essentials", "Competitive Programming"],
    },
    {
      title: "UI/UX Design",
      description: "Learn the art of creating user-friendly designs.",
      courses: ["Introduction to Figma", "Advanced Prototyping", "UX Research Methods"],
    },
    {
      title: "Business Development",
      description: "Grow your business skills and strategies.",
      courses: ["Entrepreneurship Basics", "Digital Marketing Fundamentals", "Leadership Skills"],
    },
  ];

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <section style={styles.features}>
      <h2 style={styles.heading}>Features</h2>
      <div style={styles.grid}>
        {featuresData.map((feature, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() => handleFeatureClick(feature)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h3 style={styles.cardTitle}>{feature.title}</h3>
            <p style={styles.cardDescription}>{feature.description}</p>
          </div>
        ))}
      </div>

      {selectedFeature && (
        <div style={styles.courses}>
          <h3 style={styles.coursesHeading}>
            Courses for {selectedFeature.title}
          </h3>
          <ul style={styles.courseList}>
            {selectedFeature.courses.map((course, index) => (
              <li key={index} style={styles.courseItem}>
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

const styles = {
  features: {
    padding: "50px",
    background: "linear-gradient(45deg,rgb(159, 129, 171),rgb(133, 108, 174),rgb(62, 183, 216),rgb(189, 223, 192))", // Gradient background
    color: "#fff",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#fff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "linear-gradient(to bottom, #ffffff, #f1f5f9)",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  },
  cardTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#3b82f6",
  },
  cardDescription: {
    fontSize: "1rem",
    marginBottom: "15px",
    color: "#555",
  },
  courses: {
    marginTop: "30px",
    padding: "20px",
    borderRadius: "8px",
    background: "linear-gradient(to right, #2575fc, #6a11cb)", // Gradient for course section
    color: "#fff",
  },
  coursesHeading: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#fff",
  },
  courseList: {
    listStyleType: "none",
    padding: 0,
  },
  courseItem: {
    fontSize: "1rem",
    padding: "10px 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
    color: "#fff",
  },
};

export default Features;
