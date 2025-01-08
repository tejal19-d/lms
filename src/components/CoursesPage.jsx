import React from "react";
import { useParams } from "react-router-dom";

const CoursesPage = () => {
  const { feature } = useParams(); // Get the feature from the URL
  const featuresData = [
    {
      title: "Interactive Courses",
      courses: ["Course 1: Web Development", "Course 2: React Basics", "Course 3: JavaScript Essentials"],
    },
    {
      title: "Live Sessions",
      courses: ["Live Course 1: Node.js Basics", "Live Course 2: Frontend Development", "Live Course 3: AI Introduction"],
    },
    {
      title: "Certifications",
      courses: ["Certification 1: Web Design", "Certification 2: Data Science", "Certification 3: Machine Learning"],
    },
    {
      title: "Personalized Learning",
      courses: ["Course 1: Python for Beginners", "Course 2: Full Stack Development", "Course 3: Digital Marketing"],
    },
    {
      title: "Community Support",
      courses: ["Community Course 1: Communication Skills", "Community Course 2: Leadership", "Community Course 3: Teamwork"],
    },
  ];

  // Find the feature data based on the URL parameter
  const selectedFeature = featuresData.find(
    (feature) => feature.title.toLowerCase().replace(/ /g, "-") === feature
  );

  return (
    <section style={styles.courseSection}>
      <h2 style={styles.heading}>{selectedFeature ? selectedFeature.title : "Feature not found"}</h2>
      <div style={styles.courseList}>
        {selectedFeature ? (
          selectedFeature.courses.map((course, index) => (
            <div key={index} style={styles.courseCard}>
              <h3 style={styles.courseTitle}>{course}</h3>
              <p style={styles.courseDescription}>
                Detailed information about the course will be provided here.
              </p>
            </div>
          ))
        ) : (
          <p>No courses found for this feature.</p>
        )}
      </div>
    </section>
  );
};

const styles = {
  courseSection: {
    padding: "50px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#333",
  },
  courseList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  courseCard: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  courseTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#007bff",
  },
  courseDescription: {
    fontSize: "1rem",
    marginBottom: "15px",
    color: "#555",
  },
};

export default CoursesPage;
