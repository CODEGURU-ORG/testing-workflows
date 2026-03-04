import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const containerStyle: React.CSSProperties = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to right, #a0e9fd, #a8f4d9, #c6f6d8)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  };

  
  const cardStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    padding: "50px",
    borderRadius: "20px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "90%",
    maxWidth: "600px",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "15px 30px",
    borderRadius: "50px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
    fontSize: "17px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "4rem",
    fontWeight: "900",
    color: "#333",
    marginBottom: "30px",
  };

  const footerStyle: React.CSSProperties = {
    marginTop: "50px",
    color: "#555",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>GESTION DE FISHES</h1>

      <div style={cardStyle}>
        <p style={{ color: "#555", marginBottom: "20px", fontSize: "18px" }}>
          This is a starter dashboard for managing fishes.
        </p>

        <button
          style={buttonStyle}
          onClick={() => setCount(count + 1)}
          onMouseOver={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#0056b3") // inline string
          }
          onMouseOut={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#007bff") // inline string
          }
        >
          Count is {count}
        </button>

        <p style={{ marginTop: "20px", color: "#777", fontSize: "14px" }}>
          Click the button to increase the count
        </p>
      </div>

      <footer style={footerStyle}>Built with React & Vite</footer>
    </div>
  );
 }
       
export default App;
