import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, Download, Send } from "lucide-react"; 
import Aresume from "../Assets/static/Aniket_Resume.pdf"; 

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_eeoau58", // Replace with your actual SERVICE ID
        "template_hww7s0l", // Replace with your actual TEMPLATE ID
        e.target,
        "G4qWjEhlcgFZFKcKn" // Replace with your actual USER ID
      )
      .then(
        () => {
          alert(`Success! Thank you, ${formData.name}. I'll be in touch soon.`);
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("Oops! Something went wrong sending the message. Please try again or use direct contact details.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="flex flex-col gap-10">
      
      {/* --- Section Title --- */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-text-primary">
        <span className="bg-clip-text text-transparent bg-gradient-primary">
          Let's Connect
        </span>
        , Build, and Collaborate
      </h2>

      {/* --- Main Contact Card Container (3 Columns on desktop) --- */}
      <div 
        className="grid grid-cols-1 md:grid-cols-3 bg-background-surface rounded-3xl overflow-hidden shadow-2xl 
                   border border-border-light text-text-primary divide-y md:divide-y-0 md:divide-x divide-border-light"
      >
        
        {/* --- 1. Contact Form --- (Made this the middle column for visual balance) */}
        <div className="p-8 md:col-span-2">
          <h3 className="text-2xl font-bold mb-6 text-text-primary">
            Send Me A Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5" name="contact-form">
            <div className="flex gap-4">
              <div className="w-1/2 relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="w-full px-5 py-3 rounded-xl bg-background-light border border-border-light placeholder:text-text-secondary/70 
                             focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 shadow-inner"
                />
              </div>
              <div className="w-1/2 relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                  className="w-full px-5 py-3 rounded-xl bg-background-light border border-border-light placeholder:text-text-secondary/70 
                             focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 shadow-inner"
                />
              </div>
            </div>
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message (Project details, job offer, collaboration idea...)"
              rows="6"
              required
              className="w-full px-5 py-3 rounded-xl bg-background-light border border-border-light placeholder:text-text-secondary/70 
                         focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 shadow-inner resize-y"
            ></textarea>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 mt-4 rounded-full font-semibold text-text-inverse 
                         bg-gradient-primary shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 transform 
                         hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit Message"}
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* --- 2. Direct Details & Resume --- */}
        <div className="p-8 space-y-8 bg-background-light/50 md:col-span-1">
          <h3 className="text-2xl font-bold mb-4 text-text-primary">
            Direct Contact
          </h3>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary text-text-inverse shadow-md">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-text-secondary">Email</p>
                <a href="mailto:aniketsinghal488@gmail.com" className="text-base font-semibold text-primary hover:text-state-hover break-all">
                  aniketsinghal488@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-accent text-text-inverse shadow-md">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-text-secondary">Phone</p>
                <a href="tel:+919311764547" className="text-base font-semibold text-accent hover:text-state-focus">
                  +91 93117 64547
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-border-light">
            {/* Resume Button */}
            <h3 className="text-xl font-bold mb-4 text-text-primary">
              View My Documents
            </h3>
            <a
              href={Aresume}
              download="Aniket_Singhal_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-text-inverse 
                         bg-gradient-secondary shadow-lg shadow-secondary/40 hover:shadow-secondary/60 transition-all duration-300 transform 
                         hover:scale-[1.03]"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;