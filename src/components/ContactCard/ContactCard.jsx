import React, { useState } from "react";
import emailjs from "emailjs-com";
import resume from "../../Assets/Images/resume.png";
import resumefile from "../../Assets/static/Aniket_Resume.pdf";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service sending
    emailjs
      .sendForm(
        "service_eeoau58",
        "template_hww7s0l",
        e.target,
        "G4qWjEhlcgFZFKcKn"
      )
      .then(
        (result) => {
          alert(`Thank you, ${formData.name}! We will get back to you soon.`);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container flex flex-col md:flex-row gap-6 p-6 max-w-4xl mx-auto bg-[#e3ffd0] rounded-2xl border-2 border-white [box-shadow:4px_4px_8px_#959595]">
      {/* Resume Section */}
      <div className="resume flex flex-col justify-center items-center py-6 px-4 w-full md:w-1/3">
        <img src={resume} alt="Resume" className="h-44" />
        <button
          onClick={() => window.open(resumefile, "_blank")}
          className="bg-gradient-to-r from-black to-gray-900 text-white py-2 px-6 rounded-lg shadow-md hover:from-gray-900 hover:to-gray-600 transition-all duration-200"
        >
          View Resume
        </button>
      </div>

      {/* Contact Form */}
      <div className="contact-form py-4 px-2">
        <h2 className="text-xl font-semibold mb-4">Send Me A Message!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-8 bg-inherit px-4 py-2 rounded-xl outline-none shadow-[inset_2px_2px_4px_2px_rgba(0,0,0,0.7)] focus:ring-2 focus:ring-white focus:shadow-[inset_2px_2px_4px_2px_rgba(0,0,0,0.7),2px_2px_4px_2px_rgba(0,0,0,0.7)] transition-shadow duration-300 ease-in"
              placeholder="Your Name *"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-8 bg-inherit px-4 py-2 rounded-xl outline-none shadow-[inset_2px_2px_4px_2px_rgba(0,0,0,0.7)] focus:ring-2 focus:ring-white focus:shadow-[inset_2px_2px_4px_2px_rgba(0,0,0,0.7),2px_2px_4px_2px_rgba(0,0,0,0.7)] transition-shadow duration-300 ease-in"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-14 bg-inherit px-4 py-2 rounded-xl outline-none shadow-[inset_2px_2px_4px_2px_rgba(0,0,0,0.7)] focus:ring-2 focus:ring-white focus:shadow-[inset_2px_2px_4px_2px_rgba(0,0,0,0.7),2px_2px_4px_2px_rgba(0,0,0,0.7)] transition-shadow duration-300 ease-in"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-purple-800 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="contact-details py-4 px-2">
        <h2 className="text-xl font-semibold mb-4">Contact Me Directly</h2>
        <div className="text-gray-700">
          <div className="mb-4">
            <p className="text-sm font-bold">Phone:</p>
            <p className="text-base">+91 9311764547</p>
          </div>
          <div className="mb-4">
            <p className="text-sm font-bold">Email:</p>
            <p className="text-base">aniketsinghal488@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
