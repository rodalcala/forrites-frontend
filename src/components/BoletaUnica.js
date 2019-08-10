/* Component handling votation logic */

import React, { useEffect } from 'react';

const BoletaUnica = props => {
  console.log(props.match.path)

  const votingUrl = '';
  const defaultHeaders = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
  const forrites = [
    'Eve',
    'Fede',
    'Nacho',
    'Rodri',
    'Soli',
    'Ojis',
    'Santi',
    'Toro',
    'Yami'
  ]


  const handleVote = (forrite) => {
    fetch(votingUrl, {
      method: 'POST',
      headers: defaultHeaders,
      body: forrite
    })
      .then(res => res.json())
      .then(/* Navigate to results screen */)
  }

  const renderForrites = () => (
    forrites.map(forrite => <p key={forrite} >{forrite}</p>)
  );

  return <div>
    <p>Bienvenide {props.match.path}</p>
    {renderForrites()}
  </div>
}

export default BoletaUnica;
