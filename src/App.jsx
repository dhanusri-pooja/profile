import React from "react";
import Name from "./components/name/Name";
import Pro from "./profile/Pro";

const App = () => (
  <div>
    <h1 style={{ textAlign: "center", color: "#ec4899", marginTop: "1rem" }}>
      
    </h1>
    <Name />
    <Pro />
    <footer
      style={{
        textAlign: "center",
        marginTop: "2rem",
        padding: "1rem",
        background: "#fef3c7", // pastel yellow
        borderRadius: "12px",
        fontSize: "0.9rem",
        color: "#444",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.05)"
      }}
    >
       Made by Dhanu | © 2025 
    </footer>
  </div>
);

export default App;
