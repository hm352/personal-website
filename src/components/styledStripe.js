import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

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

export default StyledStripe;
