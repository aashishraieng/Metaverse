import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import "./Contact.css"; // 🧠 Add this line!

export function Contact() {
  const { toast } = useToast();
  const [otherChoiceForJoin, setOtherChoice] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };

  const JoinAsOptions = [
    "Volunteer",
    "Social Media",
    "Event Team",
    "Content Creator",
    "Technical",
  ];

  return (
    <section className="contact-section">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="form-title">Get in Touch</h2>
        <form onSubmit={handleContactSubmit} className="form-grid">
          <div className="input-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" placeholder="Enter first name..." required />
          </div>

          <div className="input-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" placeholder="Enter last name..." required />
          </div>

          <div className="input-group full">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="your@email.com" required />
          </div>

          <div className="input-group full">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="+91 xxx-xxx-xxxx" required />
          </div>

          <div className="input-group full">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Leave us a message..." rows="4" required />
          </div>

          <div className="input-group full">
            <label>Services</label>
            <div className="checkbox-grid">
              {JoinAsOptions.map((item, index) => (
                <label key={index}>
                  <input type="checkbox" value={item} /> {item}
                </label>
              ))}
              <label>
                <input
                  type="checkbox"
                  value="Other"
                  checked={otherChoiceForJoin}
                  onChange={() => setOtherChoice(!otherChoiceForJoin)}
                />
                Other
              </label>
            </div>
          </div>

          {otherChoiceForJoin && (
            <div className="input-group full">
              <label htmlFor="other">Enter Other Choice</label>
              <input type="text" id="other" placeholder="Enter your role..." required />
            </div>
          )}

          <div className="submit-wrap full">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
