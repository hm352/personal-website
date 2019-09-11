import React from 'react';
import Badge from 'react-bootstrap/Badge';

function PillBadge(props){
  return <Badge pill> {props.children} </Badge>;
}

export default PillBadge;
