import React, { useState, useEffect } from "react";

const Hero = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://plus.unsplash.com/premium_photo-1664372145591-f7cc308ff5da?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
  );
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [filteredCourses, setFilteredCourses] = useState([]); // For storing filtered courses

  const courses = [
    "React Basics",
    "Advanced JavaScript",
    "Python Programming",
    "Web Development Bootcamp",
    "Data Science with Python",
    "Machine Learning Basics",
    "Introduction to AI",
    "Full Stack Development",
    "Digital Marketing",
    "UX/UI Design Fundamentals",
  ];

  const fetchRandomImage = async () => {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos/random?client_id=TL9zupN-5hmUIU52BaSPySyYMnheKoFCW2x9Ab7eSuw&query=learning"
      );
      const data = await response.json();
      const randomImageUrl = data?.urls?.full; // Correctly access the 'full' resolution image URL
      if (randomImageUrl) {
        setImageUrl(randomImageUrl);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // Filter courses based on the search term
    const filtered = courses.filter(course =>
      course.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div style={{ ...styles.hero, backgroundImage: `url(${imageUrl})` }}>
      {/* Search Bar */}
      <div style={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search for a course..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={styles.searchBar}
        />
        <button
          onClick={handleSearchClick}
          style={styles.searchButton}
        >
          Search
        </button>
      </div>

      <div style={styles.heroContent}>
        <h1 style={styles.title}>Welcome to MindQuest</h1>
        <p style={styles.subtitle}>
          Your gateway to unlimited learning opportunities. Empower your mind
          with knowledge!
        </p>
        <button style={styles.ctaButton}>Get Started</button>
      </div>
      {loading && <p style={styles.loadingText}>Loading image...</p>}

      {/* Display filtered courses */}
      {filteredCourses.length > 0 && (
        <div style={styles.courseList}>
          <h3>Available Courses</h3>
          <ul style={styles.courseListItems}>
            {filteredCourses.map((course, index) => (
              <li key={index} style={styles.courseItem}>
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  hero: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    position: "relative", // So that the search bar can sit on top
  },
  searchBarContainer: {
    position: "absolute",
    top: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  searchBar: {
    padding: "10px 20px",
    fontSize: "1.1rem",
    width: "50%",
    borderRadius: "20px",
    border: "none",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    outline: "none",
    transition: "all 0.3s ease",
  },
  searchButton: {
    padding: "10px 20px",
    fontSize: "1.1rem",
    marginLeft: "10px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "20px",
    cursor: "pointer", // Pointer cursor for interactivity
    transition: "background-color 0.3s ease",
  },
  heroContent: {
    maxWidth: "800px",
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  ctaButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  loadingText: {
    color: "white",
    fontSize: "1rem",
    position: "absolute",
    bottom: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "5px 10px",
    borderRadius: "5px",
  },
  courseList: {
    marginTop: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "20px auto",
  },
  courseListItems: {
    listStyleType: "none",
    padding: "0",
  },
  courseItem: {
    fontSize: "1.2rem",
    color: "white",
    marginBottom: "10px",
  },
};

export default Hero;
