import { motion } from "framer-motion";
import "./Members.css";

const members = [
  { src: "/ashsish.jpg", title: "Ashish Rai", description: "Team Leader & Visionary" },
  { src: "/ashsish.jpg", title: "Niharika Singh", description: "UI/UX & Design Head" },
  { src: "/ashsish.jpg", title: "Rohit Kumar", description: "Backend Developer" },
  { src: "/ashsish.jpg", title: "Priya Mehta", description: "Event Coordinator" },
  { src: "/ashsish.jpg", title: "Vikram Das", description: "Marketing Lead" },
  { src: "/ashsish.jpg", title: "Megha Sharma", description: "Content Writer" },
  { src: "/ashsish.jpg", title: "Arjun Reddy", description: "ML/AI Research" },
  { src: "/ashsish.jpg", title: "Divya Patel", description: "Frontend Developer" },
  { src: "/ashsish.jpg", title: "Ankit Verma", description: "Tech Consultant" },
];

function Member({ src, title, description, index }) {
  return (
    <motion.div
      className="member-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
    >
      <img src={src} alt={title} className="member-image" />
      <div className="member-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

export default function Members() {
  return (
    <section className="members-section">
      <motion.h1
        className="section-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🌟 Meet Our Members
      </motion.h1>
      <div className="members-grid">
        {members.map((member, index) => (
          <Member key={index} {...member} index={index} />
        ))}
      </div>
    </section>
  );
}
