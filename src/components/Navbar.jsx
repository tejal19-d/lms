import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showForm, setShowForm] = useState(null); // Tracks whether to show login or sign-in form

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle form visibility
  const handleFormOpen = (formType) => {
    setShowForm(formType);
    setDropdownOpen(false); // Close dropdown when a form is opened
  };

  // Handle form close
  const handleFormClose = () => {
    setShowForm(null);
  };

  return (
    <div>
      <nav
        style={{
          backgroundColor: "black",
          padding: "10px 0",
          boxShadow: "0 0px 0px rgba(0,0,0,0.1)",
          color: "white",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>MindQuest</h1>
          <ul
            style={{
              display: "flex",
              gap: "20px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li> <a href="/courses">Courses</a></li>
          </ul>

          <div style={{ position: "relative" }}>
            <button
              onClick={toggleDropdown}
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Profile ▼
            </button>
            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: "white",
                  color: "black",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  borderRadius: "5px",
                  overflow: "hidden",
                  zIndex: 1000,
                }}
              >
                <button
                  onClick={() => handleFormOpen("login")}
                  style={{
                    display: "block",
                    padding: "10px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  Login
                </button>
                <button
                  onClick={() => handleFormOpen("signup")}
                  style={{
                    display: "block",
                    padding: "10px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Conditional rendering for forms */}
      {showForm === "login" && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>Login</h2>
            <form>
              <label>
                Email:
                <input type="email" required style={styles.input} />
              </label>
              <label>
                Password:
                <input type="password" required style={styles.input} />
              </label>
              <button type="submit" style={styles.button}>
                Login
              </button>
              <button
                type="button"
                onClick={handleFormClose}
                style={styles.closeButton}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {showForm === "signup" && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>Sign Up</h2>
            <form>
              <label>
                Name:
                <input type="text" required style={styles.input} />
              </label>
              <label>
                Email:
                <input type="email" required style={styles.input} />
              </label>
              <label>
                Password:
                <input type="password" required style={styles.input} />
              </label>
              <button type="submit" style={styles.button}>
                Sign Up
              </button>
              <button
                type="button"
                onClick={handleFormClose}
                style={styles.closeButton}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "8px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  closeButton: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    marginLeft: "10px",
  },
};

export default Navbar;

