import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbot from "../../Assets/Projects/chatbot3-2.jpg";
import lecturer from "../../Assets/Projects/lecturerescheck.avif";
import snakes from "../../Assets/Projects/snakes.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="GenAI ChatBot"
              description="It is a Generative AI-powered chatbot designed for a college website to assist students, parents, and lecturers by answering their queries."
              ghLink="https://github.com/SaiSrihitha-Mallela/GenAIChatbotForFAQs-G200-PS24"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lecturer}
              isBlog={false}
              title="Lectures Check"
              description="Lecture's Check is a learning portal where lecturers can upload their videos and PDFs on various topics and review the content quality before sharing it with students.  "
              ghLink="https://github.com/SaiSrihitha-Mallela/LecturesCheck"
              demoLink="https://youtu.be/Z9MSo_UuBss?si=zbhM5mm5PmYDYNAV"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakes}
              isBlog={false}
              title="Save the Sankes"
              description="Save Snakes is a platform where people can upload pictures of snakes to identify whether they are venomous or not. They can also notify NGOs about snakes found in their surroundings."
              ghLink="https://github.com/SaiSrihitha-Mallela/savesnakes"
              demoLink="#"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
