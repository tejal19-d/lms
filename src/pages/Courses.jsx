import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Courses() {
  const courses = [
    {
      id: 1,
      name: 'Web Development',
      description: 'Learn HTML, CSS, JavaScript, and React to build modern websites.',
      thumbnail: 'https://via.placeholder.com/150/6a11cb/ffffff?text=Web+Dev',
    },
    {
      id: 2,
      name: 'Data Science',
      description: 'Master Python, Machine Learning, and AI concepts for data analysis.',
      thumbnail: 'https://via.placeholder.com/150/2575fc/ffffff?text=Data+Science',
    },
    {
      id: 3,
      name: 'Graphic Design',
      description: 'Create stunning visuals using Photoshop, Illustrator, and more.',
      thumbnail: 'https://via.placeholder.com/150/f72585/ffffff?text=Graphic+Design',
    },
    {
      id: 4,
      name: 'Mobile App Development',
      description: 'Develop iOS and Android apps using Flutter and React Native.',
      thumbnail: 'https://via.placeholder.com/150/3a0ca3/ffffff?text=Mobile+Apps',
    },
    {
      id: 5,
      name: 'Cybersecurity',
      description: 'Learn about network security, cryptography, and ethical hacking.',
      thumbnail: 'https://via.placeholder.com/150/4361ee/ffffff?text=Cybersecurity',
    },
  ];

  return (
    <div style={styles.container}>
      <Navbar />
      <h1 style={styles.header}>Explore Our Courses</h1>
      <div style={styles.courseGrid}>
        {courses.map((course) => (
          <div key={course.id} style={styles.courseCard}>
            <img src={course.thumbnail} alt={course.name} style={styles.thumbnail} />
            <h2 style={styles.courseTitle}>{course.name}</h2>
            <p style={styles.courseDescription}>{course.description}</p>
            <button style={styles.learnMoreButton} onClick={() => alert(`Learn more about ${course.name}`)}>Learn More</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(135deg,rgb(170, 161, 237),rgb(146, 228, 187))',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  courseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '15px',
    transition: 'transform 0.3s ease',
  },
  thumbnail: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '15px',
  },
  courseTitle: {
    fontSize: '1.5rem',
    color: '#444',
    margin: '10px 0',
  },
  courseDescription: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '15px',
  },
  learnMoreButton: {
    backgroundColor: '#6a11cb',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Courses;
