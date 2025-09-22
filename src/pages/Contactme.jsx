import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../Styles/Contactmestyles.css";

emailjs.init("LBiW_bJPP8U7QoJW0");

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    time: new Date().toLocaleString(),
    title: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_stfgkbq",
        "template_k96hjtx",
        formData,
        "LBiW_bJPP8U7QoJW0"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          title: "",
          time: new Date().toLocaleString(),
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact">
      <div className="contact-wrapper">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Subject"
              value={formData.title}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
