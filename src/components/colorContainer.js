import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

export default ColorContainer;
