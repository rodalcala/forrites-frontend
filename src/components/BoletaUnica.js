/* Component handling votation logic */

import React from 'react';

const BoletaUnica = props => {
  const votingUrl = 'http://localhost:4000/vote' + props.match.path;
  const defaultHeaders = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
  const forrites = [
    'ariel',
    'evelin',
    'federico',
    'ignacio',
    'marco',
    'rodrigo',
    'santiago',
    'solana',
    'yamila'
  ];

  const handleVote = (forrite) => {
    fetch(votingUrl, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify({
        vote: forrite,
      })
    })
      .catch(err => alert(err));
  }

  const renderForrites = () => (
    forrites.map(forrite => <button key={forrite} onClick={() => handleVote(forrite)}>{forrite}</button>)
  );

  return <div>
    <p>Bienvenide {props.match.path}</p>
    {renderForrites()}
  </div>
}

export default BoletaUnica;
