import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_COGNIZANT from "../../assets/img/experience/cognizants-logo.svg";
import L_BOT2DO from "../../assets/img/experience/bot2do.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_COGNIZANT} alt="cognizant logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Programmer Analyst Trainee</Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong className="body-title-style ">Enterprise Application Services - DCX</strong>
                    <br />
                    <strong>Technology:</strong> Java, EcmaScript, Genesys
                    <br />
                    <strong>Duration:</strong> July 2020 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Well Trained</strong> in Contact Center Technology</li>
                      <li><strong>Developed</strong> small features in contact center environment using Java.
                      </li>
                      <li><strong>Provided</strong> assistance to senior colleagues according to changes in client specifications.
                      </li>
                      <li><strong>Created</strong> EcmaScript expressions to build routing logic for the contact center application.
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
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_BOT2DO} alt="bot2do logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Backend Developer</Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong>Technology:</strong> Nodejs, Express, RestAPI, MySql, React
                    <br />
                    <strong>Duration:</strong> April 2020 - May 2020
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed</strong> Rest APIs using express framework amd MySql database.</li>
                      <li><strong>Worked</strong> with the team of experienced developers to understand coding
                        standards and architectural practices.
                      </li>
                      <li><strong>Provided</strong> assistance to Sr. Developers with tasks other than writing code like
                        documenting Rest Api leveraging open source tools such as swagger ui.
                      </li>
                      <li><strong>Wrote</strong> CRUD operations in Node.js and Express framework to develop
                        RESTful API which interacts with React client.</li>
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
