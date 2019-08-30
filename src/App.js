import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import logo from './circle.png';
import stripe from './stipes1.png';
import styled from 'styled-components';
// import { bounce } from 'react-animations';
// import logo from './logo.svg';
import './App.css';

const Stripe = styled(Col)`
  background: ${props => props.color};
`
function StyledStripe(props){
var colour1 = props.colour1;
var colour2 = props.colour2;
return <Row className={props.className}>
  <Col></Col>
  <Stripe id="left-stripe" color={colour1}/>
  <Stripe id="right-stripe"color={colour2}/>
  <Col></Col>
</Row>;
}

function OuterStripe(props){
var colour1 = props.colour1;
var colour2 = props.colour2;
return <Row className={props.className}>

  <Stripe id="left-stripe" color={colour1}/>
    <Col></Col>
    <Col></Col>
  <Stripe id="right-stripe"color={colour2}/>

</Row>;
}


function ColorContainer(props){
  var position = props.position;
  return <Row id={ position }>
      <Col text-center="true" >
        <Button></Button>
      </Col>
    </Row>;
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
        <h5> Henry Maher </h5>
        <h6> Brief Intro </h6>
        <h6> Hoverable </h6>
      </div>
      <Container id="circle">
        <Image id="circle-image" src={ logo }/>
        <ButtonGroup vertical>
            <ColorContainer position="outer"></ColorContainer>
            <ColorContainer  position="inner"></ColorContainer>
            <ColorContainer  position="inner"></ColorContainer>
            <ColorContainer  position="outer"></ColorContainer>
        </ButtonGroup>
      </Container>
      <Container id="stripes">
          <StyledStripe id="stripe" className="stripe" colour1="#748f87" colour2="#2b211f"></StyledStripe>
      </Container>
      <div id="CV">
      <Container id="stripes">
          <StyledStripe id="stripe" className="stripe" colour1="#748f87" colour2="#2b211f"></StyledStripe>
          <p></p>
      </Container>
      <Container id="outerStripe">
        <OuterStripe className="yay" colour1="#748f87" colour2="#2b211f"></OuterStripe>
      </Container>
      </div>
  </div>
  );
}

export default App;
