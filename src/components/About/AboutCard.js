import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Srihitha Mallela </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently pursuing my B.Tech degree at Keshav Memorial Institute of Technology.
            <br />
            I have been working as a web developer using the MERN stack for the past year.
            <br />
            <br />
            In Addition to Web Development , i have also worked on LLMs, RAG and GenAI.
            <br/>
            <br/>
            Besides coding , I am also interested in...

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about creating impactful solutions that matter!"{" "}
          </p>
          <footer className="blockquote-footer">Sai Srihitha Mallela</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
