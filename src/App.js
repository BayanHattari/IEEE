import React, { useState } from "react";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const profileImage = "https://cdn-icons-png.flaticon.com/512/3461/3461370.png";

export default function App() {
  const skills = [
    "React.js",
    "Flutter",
    "Firebase",
    "Node.js",
    "Java",
    "Data Analysis",
    "Machine Learning",
    "UI/UX Design",
    "Project Management",
    "Python",
    "SQL",
    "JavaScript",
  ];

  const [showMore, setShowMore] = useState(false);
  const [projects] = useState([
    { title: "WIFAQ App", tech: "Flutter, Firebase" },
    { title: "Chatbot with NLP", tech: "Node.js, NLP" },
    { title: "E-Commerce App", tech: "Flutter, Firebase" },
    { title: "Note App", tech: "Flutter, Firebase" },
    { title: "WhatsApp Chatbot", tech: "Node.js, WhatsApp API" },
  ]);

  const [activeSection, setActiveSection] = useState("skills");


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sectionStyle = {
    padding: "40px 20px",
    scrollMarginTop: "80px",
    borderRadius: "10px",
    marginBottom: "30px",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#eaeaea" }}>
      {/* AppBar */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 30px",
          backgroundColor: "#0d1c8c",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ margin: 0 }}>Bayan Hattari</h1>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                 <button
            onClick={() => {
              setActiveSection("about");
              scrollToSection("about");
            }}
            style={{
              background: "none",
              border: "none",
              color: activeSection === "about" ? "#FFD700" : "white",
              cursor: "pointer",
              fontWeight: activeSection === "about" ? "bold" : "normal",
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              setActiveSection("skills");
              scrollToSection("skills");
            }}
            style={{
              background: "none",
              border: "none",
              color: activeSection === "skills" ? "#FFD700" : "white",
              cursor: "pointer",
              fontWeight: activeSection === "skills" ? "bold" : "normal",
            }}
          >
            Skills
          </button>

   

          <button
            onClick={() => {
              setActiveSection("projects");
              scrollToSection("projects");
            }}
            style={{
              background: "none",
              border: "none",
              color: activeSection === "projects" ? "#FFD700" : "white",
              cursor: "pointer",
              fontWeight: activeSection === "projects" ? "bold" : "normal",
            }}
          >
            Projects
          </button>

          <button
            onClick={() => {
              setActiveSection("contact");
              scrollToSection("contact");
            }}
            style={{
              background: "none",
              border: "none",
              color: activeSection === "contact" ? "#FFD700" : "white",
              cursor: "pointer",
              fontWeight: activeSection === "contact" ? "bold" : "normal",
            }}
          >
            Contact
          </button>

          <img src={profileImage} alt="Girl Animation" style={{ width: "50px", borderRadius: "50%" }} />
        </div>
      </header>
      
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
                {/* About Me */}
        <section id="about" style={{ ...sectionStyle, backgroundColor: "#fff" }}>
          <h2 style={{ marginBottom: "20px" }}>About Me</h2>
          <p style={{ lineHeight: "1.6" }}>
            I’m a Computer Science student who loves turning ideas into real-world software, including web apps and AI-driven applications.
          </p>
          {showMore && (
            <p style={{ lineHeight: "1.6" }}>
              I love exploring new technologies, participating in hackathons, and collaborating with other developers to solve challenging problems. I enjoy building interactive applications and automating processes to make work easier.
            </p>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            style={{
              padding: "10px 20px",
              marginTop: "10px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#0d1c8c",
              color: "white",
              cursor: "pointer",
            }}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </section>
        {/* Skills */}
        <section id="skills" style={{ ...sectionStyle, backgroundColor: "#f0f0f0" }}>
          <h2 style={{ marginBottom: "20px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  padding: "8px 15px",
                  borderRadius: "20px",
                  backgroundColor: "#0d1c8c",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>



        {/* Projects */}
        <section id="projects" style={{ ...sectionStyle, backgroundColor: "#fff" }}>
          <h2 style={{ marginBottom: "20px" }}>Projects</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#0d1c8c",
                  color: "white",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>{project.title}</h3>
                <p style={{ fontStyle: "italic" }}>{project.tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ ...sectionStyle, backgroundColor: "#f0f0f0" }}>
          <h2 style={{ marginBottom: "20px" }}>Contact</h2>
          <p>
            <FaEnvelope style={{ marginRight: "8px" }} />
            <a href="mailto:Bayan5152@gmail.com">Bayan5152@gmail.com</a>
          </p>
          <p>
            <FaGithub style={{ marginRight: "8px" }} />
            <a href="https://github.com/BayanHattari" target="_blank" rel="noreferrer">
              BayanHattari
            </a>
          </p>
          <p>
            <FaPhone style={{ marginRight: "8px" }} />
            0553922851
          </p>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: "center", color: "#777", padding: "20px 0" }}>
          <p>© 2025 Bayan Hattari</p>
        </footer>
      </div>
    </div>
  );
}
