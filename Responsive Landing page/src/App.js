import React from 'react';
import Navbar from './component/navbar.js';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <h1>Welcome to Pawfect Products</h1>
      </section>
      
      <section id="about">
        <h1>About Us</h1>
        <p>The Pet Paradise is an indian online pet products shopping store, we believe in providing the best products and services for your pets. Our mission is to ensure that every pet has access to high-quality food, toys, and care products.</p>
        <p>Founded in 2022, we have grown to become one of the leading online pet stores, trusted by pet owners across the country.</p>
      </section>
      
      <section id="services">
        <h1>Our Services</h1>
        <div className="services-container">
          <div className="service-item">
            <h2>Pet Food</h2>
            <p>We offer a wide range of premium pet food brands to keep your pets nourished and healthy.</p>
          </div>
          <div className="service-item">
            <h2>Grooming Supplies</h2>
            <p>Find all the grooming essentials you need, from shampoos to brushes, to keep your pets looking their best.</p>
          </div>
          <div className="service-item">
            <h2>Pet Toys</h2>
            <p>Explore our selection of fun and durable toys that will keep your pets entertained for hours.</p>
          </div>
        </div>
      </section>
      
      <section id="contact">
        <h1>Contact Us</h1>
        <p>Have a question or need assistance? We’re here to help! Reach out to us anytime.</p>
        <p>Email: support@petparadise.com</p>
        <p>Phone: +91 7798681972</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
