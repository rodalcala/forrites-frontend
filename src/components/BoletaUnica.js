/* Component handling votation logic */

import React from 'react';

import './BoletaUnica.css';

const BoletaUnica = ({ match, setAlreadyVoted }) => {
  const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';
  const votingUrl = baseUrl + '/vote' + match.path;
  const defaultHeaders = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

  const forrites = {
    ignacio: 'https://i.imgur.com/Bfvj2WX.jpg',
    marco: 'https://i.imgur.com/t8b8FqX.jpg',
  };

  const handleVote = (forrite) => {
    fetch(votingUrl, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify({
        vote: forrite,
      })
    })
      .then(() => {
        setAlreadyVoted(true);
        alert(('Tu voto fue registrado con exito!'));
      })
      .catch(err => console.log(err));
  }

  const renderCandidatos = () => (
    Object.keys(forrites).map(forrite => (
      <img
        className='BoletaUnica-candidato'
        alt='candidato'
        src={forrites[forrite]}
        key={forrite}
        onClick={() => handleVote(forrite)}
      />
    ))
  );

  return (
    <div className='BoletaUnica-container'>
      <div className='BoletaUnica-candidatos-container'>
        {renderCandidatos()}
      </div>
      <p className='BoletaUnica-footer'>LOS FORRITOS '19</p>
    </div>
  )
}

export default BoletaUnica;
