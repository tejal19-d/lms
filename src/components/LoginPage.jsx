import React from "react";

const LoginPage = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>Login</h1>
      <form>
        <input type="email" placeholder="Enter your email" style={styles.input} />
        <input type="password" placeholder="Enter your password" style={styles.input} />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    margin: "10px",
    width: "250px",
    fontSize: "1rem",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default LoginPage;
