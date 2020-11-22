import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_COGNIZANT from "../../assets/img/experience/cognizants-logo.svg";
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
                <Card.Img variant="top" className="img-resize" src={L_COGNIZANT} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Programmer Analyst Trainee</Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong className="body-title-style ">Enterprise Application Services - DCX</strong>
                    <br />
                    <strong>Technology:</strong> Java, Node.js, AWS, Genesys
                    <br />
                    <strong>Duration:</strong> July 2020 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across enterprise level application.</li>
                      <li><strong>Developed</strong> Chatbot/IVR modules in contact center environment.
                      </li>
                      <li><strong>Provided</strong> assistance to senior colleagues according to changes in client specifications.
                      </li>
                      <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according
                      to the business requirements.</li>
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
