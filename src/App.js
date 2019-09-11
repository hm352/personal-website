import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import logo from './circle.png';
import arrow from './down-arrow.svg';
import diamonds from './diamonds.jpeg';
import './App.css';
import IconNode from "./components/iconNode.js";
import ColorContainer from "./components/colorContainer.js";
import StyledButton from "./components/styledButton.js";
import PillBadge from "./components/styledHeader.js";
import IosCafe from 'react-ionicons/lib/IosCafe';
import IosBulb from 'react-ionicons/lib/IosBulb';
import IosGitCommit from 'react-ionicons/lib/IosGitCommit';
import IosPlaneOutline from 'react-ionicons/lib/IosPlaneOutline';
import MdPaper from 'react-ionicons/lib/MdPaper';
import IosWater from 'react-ionicons/lib/IosWater';

function App() {
  return (
  <div className="App">
      <script src="https://unpkg.com/react/umd/react.production.min.js"/>
      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
      />
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"      />
      <script>var Alert = ReactBootstrap.Alert;</script>
      <div id="spacer">
        <br></br>
        <h5> Henry Maher - Software Developer </h5>
      </div>
    <Container id="circle">
      <Image id="circle-image" src={ logo }/>
      <ButtonGroup vertical>
          <ColorContainer  content="GitHub"  position="outer" href="https://github.com/hm352"> </ColorContainer>
          <ColorContainer  content="LinkedIn" position="inner" href="https://uk.linkedin.com/in/henry-maher-340949b8"></ColorContainer>
          <ColorContainer  content="Blog" position="inner" href="https://henrymaher99.wixsite.com/tinfoil-diaries"></ColorContainer>
          <ColorContainer  content="Fun Stuff"position="outer"></ColorContainer>
      </ButtonGroup>
    </Container>
    <Container id="arrows">
      <Row>
        <Col>
          <Image  className="bounceArrow" src={ arrow }/>
        </Col>
        <Col id="arrowsContent">
          <h4 > scroll down! </h4>
        </Col>
        <Col>
          <Image  className="bounceArrow" src={ arrow }/>
        </Col>
      </Row>
    </Container>
    <Container id="intro">
      <PillBadge> Brief Intro</PillBadge>
      <Row>
        <Col>
          <Image roundedCircle src={ diamonds }/>
        </Col>
      </Row>
      <Row>
        <Col>
            <p>
              Hello there, I'm Henry Maher as you may have already guessed
              and this is the personal website I made to upskill in React.
              I Graduated from the University of Exeter with a BA in Economics
              and through an incredible series of events have ended up becoming a software
              developer.
            </p>
        </Col>
        <Col>
          <p>
            My most recent experience is with a FinTech called Yobota helping to
            build cloud online banking infastructure. Notably building RESTful APIs
            and integrating with the Open Banking Directory.
          </p>
        </Col>
      </Row>
    </Container>
    <Container id="skills">
      <PillBadge> Skills </PillBadge>
      <Row>
        <Col>
            <p> </p>
        </Col>
      </Row>
    </Container>
    <Container id="timeline">
    <Row>
      <Col>
        <PillBadge> Monthly Stats </PillBadge>
      </Col>
    </Row>
    <Row>
        <Col>
          <IconNode content="Coffees"random> <IosCafe color="#748f87"></IosCafe> </IconNode>
          <IconNode content="Ideas" random> <IosBulb color="#748f87"></IosBulb> </IconNode>
          <IconNode content="Commits Made"random> <IosGitCommit color="#748f87"></IosGitCommit> </IconNode>
        </Col>
        <Col>
          <IconNode content="Flights"random> <IosPlaneOutline color="#748f87"></IosPlaneOutline> </IconNode>
          <IconNode content="Blogs" count="1"> <MdPaper color="#748f87"></MdPaper> </IconNode>
          <IconNode content="Km Swam"random> <IosWater color="#748f87"></IosWater> </IconNode>
        </Col>
    </Row>
    <Row>
      <Col>
        <StyledButton href="https://github.com/hm352/personal-website"> See Code! </StyledButton>
      </Col>
    </Row>
  </Container>
  </div>
  );
}

export default App;
