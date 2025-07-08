import React, { useState } from "react";
import emailjs from "emailjs-com";
import resume from "../../Assets/Images/resume.png";
import resumefile from "../../Assets/static/Aniket_Resume.pdf";
import { colors, shadows, border } from "../../constants/theme";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eeoau58",
        "template_hww7s0l",
        e.target,
        "G4qWjEhlcgFZFKcKn"
      )
      .then(
        () => {
          alert(`Thank you, ${formData.name}! We will get back to you soon.`);
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x ${border.standard} ${shadows.standard} rounded-2xl bg-[#e3ffd0] max-w-6xl mx-auto overflow-hidden`}
    >
      {/* Resume Section */}
      <div className="flex flex-col justify-center items-center p-6 space-y-4">
        <img src={resume} alt="Resume" className="max-h-44 object-contain" />
        <button
          onClick={() => window.open(resumefile, "_blank")}
          className="bg-gradient-to-r from-black to-gray-900 text-white py-2 px-6 rounded-lg shadow hover:from-gray-900 hover:to-gray-700 transition-all"
        >
          View Resume
        </button>
      </div>

      {/* Contact Form */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-black">
          Send Me A Message!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            required
            className="w-full px-4 py-2 rounded-xl bg-inherit outline-none shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-xl bg-inherit outline-none shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] focus:ring-2 focus:ring-white"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full px-4 py-2 rounded-xl bg-inherit outline-none shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] focus:ring-2 focus:ring-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-purple-800 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-black">
          Contact Me Directly
        </h2>
        <div className="space-y-4 text-gray-800">
          <div>
            <p className="text-sm font-bold">Phone:</p>
            <p className="text-base">+91 9311764547</p>
          </div>
          <div>
            <p className="text-sm font-bold">Email:</p>
            <p className="text-base break-all">aniketsinghal488@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
