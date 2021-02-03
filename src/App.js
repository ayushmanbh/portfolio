import React from 'react'
import MyNavbar from './components/my-navbar/my-navbar.component'
import MyCarousal from './components/my-carousal/my-carousal.component'
import TitleMessage from './components/title-message/title-message.component';
import TimeLine from './components/projects-timeline/projects-timeline.component'
import FooterPanel from './components/footer/footer.component'
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component'
import Experience from './pages/experience/experience.component'
import ContactForm from './pages/contact-form/contact-form.component'
import Container from "react-bootstrap/Container";
import Fade from 'react-reveal/Fade'
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";
import { Parallax } from 'react-parallax';
import BgImage from "./assets/img/parallex/background.webp";

import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

import './App.css';

function App() {
  const ApplyParticlesAfterWindowSize = 900
  const [width, setWidth] = React.useState(window.innerWidth)
  const [shouldApplyparticles, setShouldApplyParticles] = React.useState(width >= ApplyParticlesAfterWindowSize)


  React.useEffect(() => {
    const handleApplyParticle = () => {
      setWidth(window.innerWidth)
      setShouldApplyParticles(width >= ApplyParticlesAfterWindowSize)
      // console.log(`app.js width ${width} || shouldApplyparticles ${shouldApplyparticles}`)
    }
    window.addEventListener('resize', handleApplyParticle);

    return () => {
      window.removeEventListener('resize', handleApplyParticle);
    }
  }, [shouldApplyparticles, width])
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousal shouldApplyparticles={shouldApplyparticles} />
      <TitleMessage />
      <MyNavbar />
      {shouldApplyparticles ? (
        <Particles
          className="particles particles-box"
          params={particlesOptions}
        />
      ) : null}
      <div id='about'>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BgImage}
          bgImageAlt="parallax bg"
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade right duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div id="skills">
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>

      <div id='experience'>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>
      <div id="projects">
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <TimeLine />
          </Slide>
        </Container>
      </div>
      <div id="contact">
        <Container className="container-box rounded">
          <Roll left duration={500}>
            <hr />
            <ContactForm />
          </Roll>
        </Container>
      </div>
      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
