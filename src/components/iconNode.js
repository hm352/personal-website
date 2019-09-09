import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class IconNode extends React.Component {
  constructor(props){
    super(props);
    var count = 0;
    var min = 1;
    var max = 100;
    if(props.random){
      var count = Math.floor(Math.random()*(max - min));
    }
    this.state = {count: count};
  }
  render(){
    return(<div className="icon">
      <Row className="counterRow">
            <Col className="counterImage">
              { this.props.children }
              <p>  { this.props.content || "hello" } </p>
            </Col>
            <Col className="counterText"> <p> { this.state.count} </p>
</Col>
      </Row>
    </div>)
  };
}
export default IconNode;
