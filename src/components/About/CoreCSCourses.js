import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLinux, SiBookstack } from "react-icons/si";
import { FaNetworkWired, FaDatabase } from "react-icons/fa";

function CoreCSCourses() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col xs={6} md={3} className="tech-icons">
                <SiLinux style={{ fontSize: "2.5rem", marginBottom: "3px" }} />
                <p style={{ fontSize: "1rem", fontWeight: "bold" }}>Operating Systems</p>
            </Col>
            <Col xs={6} md={3} className="tech-icons">
                <SiBookstack style={{ fontSize: "2.5rem", marginBottom: "3px" }} />
                <p style={{ fontSize: "1rem", fontWeight: "bold" }}>Software Engineering</p>
            </Col>
            <Col xs={6} md={3} className="tech-icons">
                <FaNetworkWired style={{ fontSize: "2.5rem", marginBottom: "3px" }} />
                <p style={{ fontSize: "1rem", fontWeight: "bold" }}>Computer Networks</p>
            </Col>
            <Col xs={6} md={3} className="tech-icons">
                <FaDatabase style={{ fontSize: "2.5rem", marginBottom: "3px" }} />
                <p style={{ fontSize: "1rem", fontWeight: "bold" }}>Database Management</p>
            </Col>
        </Row>
    );
}

export default CoreCSCourses;
