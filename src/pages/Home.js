import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";

const Home = () => {
  return (
    <Layout>
      <div 
        className="home" 
        style={{ 
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <div className="headerContainer">
          <h3>Welcome to</h3>
          <h1>ROADSAFE</h1>
          <div 
            className="buttonContainer" 
            style={{ 
              display: "flex",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <Link to="/menu">
              <button 
                className="loginButton" 
                style={{ 
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "16px",
                  cursor: "pointer",
                  color: "white",
                  backgroundColor: "darkorange",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "black"}
                onMouseOut={(e) => e.target.style.backgroundColor = "orange"}
              >
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button 
                className="signupButton" 
                style={{ 
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "16px",
                  cursor: "pointer",
                  color: "white",
                  backgroundColor: "darkorange",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "black"}
                onMouseOut={(e) => e.target.style.backgroundColor = "orange"}
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
