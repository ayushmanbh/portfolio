import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_COGNIZANT from "../../assets/img/experience/cognizants-logo.svg";
import L_MINDKOSH from "../../assets/img/experience/mindkosh_ai.png";
import L_BOT2DO from "../../assets/img/experience/bot2do.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  const mindkoshRole = [
    "Developed user interfaces for customer facing web service/tools using latest frontend technologies such as HTML , Sass , React , Typescript , JavaScript , Ant Design , etc.",
    "Creating 25+ self-contained, reusable and testable modules and components exclusive of existing code base with proficiency in JavaScript and working knowledge of React and Typescript.",
    "Assured that 100% of user input was validated before submitting to back-end of the system.",
  ];

  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <a
                  href="http://mindkosh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_MINDKOSH}
                    alt="mindkosh ai logo"
                  />
                </a>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Frontend Developer
                  </Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong className="body-title-style ">
                      Image/Video Annotation tool - SAAS
                    </strong>
                    <br />
                    <strong>Technology:</strong> React.js, TypeScript,
                    JavaScript, ANT Design, Docker, Sass
                    <br />
                    <strong>Duration:</strong> June 2021 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      {mindkoshRole.map((role) => (
                        <li>{role}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <a
                  href="http://cognizant.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_COGNIZANT}
                    alt="cognizant logo"
                  />
                </a>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Programmer Analyst Trainee
                  </Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong className="body-title-style ">
                      Enterprise Application Services - DCX
                    </strong>
                    <br />
                    <strong>Technology:</strong> Java, EcmaScript, Genesys
                    <br />
                    <strong>Duration:</strong> July 2020 - June 2021
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Well Trained</strong> in Contact Center
                        Technology
                      </li>
                      <li>
                        <strong>Developed</strong> small features in contact
                        center environment using Java.
                      </li>
                      <li>
                        <strong>Provided</strong> assistance to senior
                        colleagues according to changes in client
                        specifications.
                      </li>
                      <li>
                        <strong>Created</strong> EcmaScript expressions to build
                        routing logic for the contact center application.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <a
                  href="http://bot2do.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_BOT2DO}
                    alt="bot2do logo"
                  />
                </a>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Node Js Developer Intern
                  </Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong>Technology:</strong> Nodejs, Express, RestAPI,
                    MySql, React
                    <br />
                    <strong>Duration:</strong> April 2020 - May 2020
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed</strong> Rest APIs using express
                        framework amd MySql database.
                      </li>
                      <li>
                        <strong>Worked</strong> with the team of experienced
                        developers to understand coding standards and
                        architectural practices.
                      </li>
                      <li>
                        <strong>Provided</strong> assistance to Sr. Developers
                        with tasks other than writing code like documenting Rest
                        Api leveraging open source tools such as swagger ui.
                      </li>
                      <li>
                        <strong>Wrote</strong> CRUD operations in Node.js and
                        Express framework to develop RESTful API which interacts
                        with React client.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
