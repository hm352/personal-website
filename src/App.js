import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import logo from './circle.png';
import node from './node.png';
import stripe from './stipes1.png';
import styled from 'styled-components';
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

function Node(props) {
  var imageClass = props.position + " nodeImage";
  return <Col className="nodeContent">
  <Image className={imageClass} src={node} fluid></Image>
  <p className="nodeText"> {props.content} </p>
  </Col>;
}

function TimelineNode(props){
var left = props.left;
var right = props.right;
var content = props.content;
if (left){
return <Row>
    <Node content={content} position="left"></Node>
    <Col/>
  </Row>;
}
return <Row>
    <Col/>
    <Node position="right"></Node>
  </Row>;
}

const CVButton = styled(Button)`
  background: #2b211f;
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
        <h5> Henry Maher - Developer </h5>
      </div>
      <Container id="circle">
        <Image id="circle-image" src={ logo }/>
        <ButtonGroup vertical>
            <ColorContainer  content="GitHub" href="https://github.com/hm352" position="outer"> </ColorContainer>
            <ColorContainer  content="LinkedIn" position="inner" href="https://uk.linkedin.com/in/henry-maher-340949b8"></ColorContainer>
            <ColorContainer  content="Blog" position="inner"></ColorContainer>
            <ColorContainer  content="Fun Stuff"position="outer"></ColorContainer>
        </ButtonGroup>
      </Container>
      <Container id="stripes">
          <StyledStripe id="stripe" className="stripe" colour1="#748f87" colour2="#2b211f"></StyledStripe>
      </Container>
      <div id="CV">
      <Container id="stripes">
          <StyledStripe id="stripe" className="stripe" colour1="#748f87" colour2="#2b211f"></StyledStripe>
          <CVButton className="cvbutton"> Download CV </CVButton>
      </Container>
      <Container id="timeline">
        <TimelineNode left="this" content="some string
          "></TimelineNode>
        <TimelineNode></TimelineNode>
        <TimelineNode left="this"></TimelineNode>
        <TimelineNode></TimelineNode>
        <TimelineNode left="this"></TimelineNode>
        <TimelineNode></TimelineNode>

      </Container>
      </div>
  </div>
  );
}

export default App;
