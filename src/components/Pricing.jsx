import React, { useState } from "react";

const Pricing = () => {
  const [activePlan, setActivePlan] = useState(null);

  const handleToggleDetails = (plan) => {
    setActivePlan(activePlan === plan ? null : plan);
  };

  return (
    <section style={styles.pricing}>
      <h2 style={styles.heading}>Our Pricing Plans</h2>
      <div style={styles.grid}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{
              ...styles.card,
              transform: activePlan === plan.name ? "scale(1.05)" : "scale(1)",
              boxShadow: activePlan === plan.name
                ? "0 8px 16px rgba(0, 0, 0, 0.2)"
                : "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => handleToggleDetails(plan.name)}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img src={plan.image} alt={`${plan.name} Plan`} style={styles.image} />
            <h3 style={styles.cardTitle}>{plan.name}</h3>
            <p style={styles.cardPrice}>{plan.price}</p>
            {activePlan === plan.name && (
              <div style={styles.details}>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button style={styles.button}>Choose {plan.name}</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const plans = [
  {
    name: "Basic",
    price: "FREE",
    image: "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=900&auto=format&fit=crop&q=60",
    features: [ "7 days free trial","Access to basic features", "Community support", "Email updates"],
  },
  {
    name: "Pro",
    price: "₹3000/month",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&auto=format&fit=crop&q=60",
    features: ["All pro features", "Priority support", "Access to advanced tools"],
  },
  {
    name: "Premium",
    price: "₹7000/month",
    image: "https://images.unsplash.com/photo-1455894127589-22f75500213a?w=900&auto=format&fit=crop&q=60",
    features: ["All Premium features", "Dedicated account manager", "Customizable options"],
  },
];

const styles = {
  pricing: {
    padding: "50px",
   background: "linear-gradient(45deg,rgb(159, 129, 171),rgb(133, 108, 174),rgb(62, 183, 216),rgb(189, 223, 192))",
    color: "#333",
    borderRadius: "10px",
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.8rem",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#fff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    background: "rgba(255, 255, 255, 0.9)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  cardTitle: {
    fontSize: "1.8rem",
    marginTop: "15px",
    color: "#2c3e50",
    fontWeight: "600",
  },
  cardPrice: {
    fontSize: "1.4rem",
    color: "#16a085",
    marginTop: "10px",
    fontWeight: "bold",
  },
  details: {
    marginTop: "20px",
    textAlign: "left",
    color: "#555",
    fontSize: "1rem",
    background: "rgba(255, 255, 255, 0.8)",
    padding: "15px",
    borderRadius: "8px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    background: "#16a085",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    background: "#1abc9c",
  },
};

export default Pricing;
