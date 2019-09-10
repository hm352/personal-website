import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import logo from './circle.png';
import arrow from './down-arrow.svg'
import styled from 'styled-components';
import './App.css';
import IconNode from "./components/iconNode.js";
import IosCafe from 'react-ionicons/lib/IosCafe';
import IosBulb from 'react-ionicons/lib/IosBulb';
import IosGitCommit from 'react-ionicons/lib/IosGitCommit';


const Stripe = styled(Col)`
  background: ${props => props.color};
  height: ${ props => props.height};
`

function StyledStripe(props){
var colour1 = props.colour1;
var colour2 = props.colour2;
var height = props.height || '500px';
return <Row className={props.className}>
  <Col></Col>
  <Stripe id="left-stripe" color={colour1} height={height}/>
  <Stripe id="right-stripe"color={colour2} height={height}/>
  <Col></Col>
</Row>;
}

const StyledButton = styled(Button)`
  background: #cd7a23;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  text-align: center;
  opacity: 1;
  z-index: 1;
`

class ColorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: true};
  }
  onClick() {
    alert("click");
  }
  render() {
    if(this.state.date){
    return (
      <Row id={ this.props.position }>
        <Col text-center="true" >
          <Button onClick={this.onClick} href={this.props.href}>
            {this.props.content}
          </Button>
        </Col>
      </Row>
    );
  }
  }
}

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
          <ColorContainer  content="GitHub" href="https://github.com/hm352" position="outer"> </ColorContainer>
          <ColorContainer  content="LinkedIn" position="inner" href="https://uk.linkedin.com/in/henry-maher-340949b8"></ColorContainer>
          <ColorContainer  content="Blog" position="inner"></ColorContainer>
          <ColorContainer  content="Fun Stuff"position="outer"></ColorContainer>
      </ButtonGroup>
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
    </Container>
    <Container id="intro">
      <StyledButton> Brief Intro</StyledButton>
      <Row>
        <Col>
            <p> hello, there </p>
        </Col>
    </Row>
    </Container>
    <Container id="timeline">
    <Row>
      <Col>
        <StyledButton> Since 1995 I have</StyledButton>
      </Col>
    </Row>
    <Row>
        <Col className="left">
          <IconNode content="Coffees"random> <IosCafe color="#748f87"></IosCafe> </IconNode>
          <IconNode content="Ideas" random> <IosBulb color="#748f87"></IosBulb> </IconNode>
          <IconNode content="Commits Made"random> <IosGitCommit color="#748f87"></IosGitCommit> </IconNode>
        </Col>
        <Col className="right">
          <IconNode content=""random> <IosCafe color="#748f87"></IosCafe> </IconNode>
          <IconNode content="" random> <IosBulb color="#748f87"></IosBulb> </IconNode>
          <IconNode content="Km Swam"random> <IosGitCommit color="#748f87"></IosGitCommit> </IconNode>
        </Col>
    </Row>
    <Row className="bottom">
      <Col>
        <StyledButton href="https://github.com/hm352/personal-website"> See Code! </StyledButton>
      </Col>
    </Row>
  </Container>
  </div>
  );
}

export default App;
