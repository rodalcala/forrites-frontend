/* Component handling votation logic */

import React from 'react';

import './BoletaUnica.css';

const BoletaUnica = props => {
  const votingUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000' + '/vote' + props.match.path;
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
  const miniaturas = {
    ariel: 'https://i.imgur.com/6hP9MpN.jpg',
    evelin: 'https://i.imgur.com/R3y8g8Z.jpg',
    federico: 'https://i.imgur.com/cHan80d.jpg',
    ignacio: 'https://i.imgur.com/Bfvj2WX.jpg',
    marco: 'https://i.imgur.com/t8b8FqX.jpg',
    rodrigo: 'https://i.imgur.com/4U1U2GG.jpg',
    santiago: 'https://i.imgur.com/QZh3biP.jpg',
    solana: 'https://i.imgur.com/9YOIdDK.jpg',
    yamila: 'https://i.imgur.com/Y6kXsGX.jpg'
  };

  const handleVote = (forrite) => {
    fetch(votingUrl, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify({
        vote: forrite,
      })
    })
      .then(() => alert('Tu voto fue registrado con exito!'))
      .catch(err => alert('Solo un vote por forrite, campeon'));
  }

  const renderForrites = () => (
    forrites.map(forrite => <img
      className='BoletaUnica-candidato'
      alt='candidato'
      src={miniaturas[forrite]}
      key={forrite}
      onClick={() => handleVote(forrite)}
    />)
  );

  return <div className='BoletaUnica-container'>
    <p className='BoletaUnica-titulo'>PASO '19</p>
    <p className='BoletaUnica-intro'>Cuatro años despuês, acá estamos nuevamente, celebrando la fiesta de la democracia!</p>
    <p className='BoletaUnica-intro'> </p>
    <p className='BoletaUnica-intro'>La consigna es sencilla:</p>
    <p className='BoletaUnica-intro'>Elegí al forrite que quieras que te represente en las elecciones generales del 27 de ocubre.</p>
    <p className='BoletaUnica-intro'> </p>
    <p className='BoletaUnica-intro'> </p>
    <p className='BoletaUnica-intro'> </p>
    <p className='BoletaUnica-intro'> </p>
    <p className='BoletaUnica-intro'>A continuación, LOS CANDIDATOS:</p>
    <div className='BoletaUnica-candidatos-container'>
      {renderForrites()}
    </div>
    <p className='BoletaUnica-footer'>--</p>
    <p className='BoletaUnica-footer'>Hecho con 💞 desde la futura sede central</p>
  </div>
}

export default BoletaUnica;
