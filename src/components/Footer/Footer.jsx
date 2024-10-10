// Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="#solutions">Solutions</a>
            </li>
            <li>
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="counter">
          <p>Number of visitors</p>
          <a
            href="https://www.hitwebcounter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://hitwebcounter.com/counter/counter.php?page=16769795&style=0030&nbdigits=4&type=ip&initCount=0"
              title="Counter Widget"
              alt="Visit counter For Websites"
              border="0"
            />
          </a>
        </div>
        <div className="footer-info"></div>
      </div>
    </footer>
  );
};

export default Footer; // Ensure this line is present
