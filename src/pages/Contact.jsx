import React, { useState } from "react";
import { motion } from "framer-motion";
import { Ghost, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/kanishksinghchauhan5@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: false, // Disable FormSubmit's default CAPTCHA
        }),
      });

      if (response.ok) {
        setShowConfirmation(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        
        // Hide confirmation message after 5 seconds
        setTimeout(() => {
          setShowConfirmation(false);
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl mx-auto bg-cyber-bg/80 backdrop-blur-lg px-8 py-10 rounded-xl shadow-glow border border-matrix-green/20"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold code-glow mb-8">Contact</h2>
        
        {/* Success Confirmation Message */}
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-matrix-green/20 border border-matrix-green/40 rounded-lg flex items-center justify-center gap-3 text-matrix-green"
          >
            <CheckCircle size={24} />
            <span className="font-mono">Message sent successfully! I'll get back to you soon.</span>
          </motion.div>
        )}
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-cyber-bg/50 border border-matrix-green/30 rounded-lg text-cyber-text placeholder-cyber-accent/60 focus:outline-none focus:border-matrix-green focus:ring-1 focus:ring-matrix-green/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-cyber-bg/50 border border-matrix-green/30 rounded-lg text-cyber-text placeholder-cyber-accent/60 focus:outline-none focus:border-matrix-green focus:ring-1 focus:ring-matrix-green/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-cyber-bg/50 border border-matrix-green/30 rounded-lg text-cyber-text placeholder-cyber-accent/60 focus:outline-none focus:border-matrix-green focus:ring-1 focus:ring-matrix-green/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              required
              rows="5"
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-cyber-bg/50 border border-matrix-green/30 rounded-lg text-cyber-text placeholder-cyber-accent/60 focus:outline-none focus:border-matrix-green focus:ring-1 focus:ring-matrix-green/50 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-matrix-green text-cyber-bg font-mono font-semibold rounded-lg hover:bg-matrix-green/80 transition-all duration-300 shadow-glow hover:shadow-matrix-green/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyber-bg"></div>
                Sending...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Social Links */}
        <div className="border-t border-matrix-green/20 pt-6">
          <p className="text-cyber-accent mb-4 font-mono">Or connect with me on social media:</p>
          <div className="flex justify-center gap-8">
            <a href="https://www.linkedin.com/in/kanishksinghchauhan/" target="_blank" rel="noopener noreferrer" className="text-cyber-accent hover:text-matrix-green transition text-3xl">
              <svg width="1em" height="1em" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-242.1 0-267.1h92.4v37.9c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.7 39.7 106.7 125.2V448z"/>
              </svg>
            </a>
            <a href="https://github.com/kanishk-sc" target="_blank" rel="noopener noreferrer" className="text-cyber-accent hover:text-matrix-green transition text-3xl">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
            </a>
            <a href="https://www.instagram.com/kanishk.singh.chauhan" target="_blank" rel="noopener noreferrer" className="text-cyber-accent hover:text-matrix-green transition text-3xl">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.snapchat.com/add/kanishk2669" target="_blank" rel="noopener noreferrer" className="text-cyber-accent hover:text-matrix-green transition text-3xl">
              <Ghost size={32} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
