/* Component displaying the results */

import React, { useEffect, useState } from 'react';

import './Resultados.css';

const Resultados = () => {
  const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';
  const resultsUrl = baseUrl  + '/results';
  const [ resultados, setResultados ] = useState(false);
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

  useEffect(() => {
    fetch(resultsUrl)
      .then(res => res.json())
      .then(res => {
        console.log('Resultados parciales:', res.resultados);
        console.log('Asistencia parcial:', res.asistencia);
        // const votacionCerrada = Object.values(res.asistencia).every(item => item);
        // if (votacionCerrada) {
          setResultados(res.resultados);
        // }
      })
      .catch(err => alert(err));
  }, [resultsUrl])

  const renderResultados = () => {
    if (!resultados) {
      return <div className='Resultados-pending-container'>
        <p className='Resultados-subtitulo'>Smartmatic está procesando los resultados</p>
      </div>
    }
    const resultadosFinales = Object.keys(resultados).sort((a,b) => resultados[b]-resultados[a]).map(forrite => <p
      className='Resultados-forrito'
      alt='candidato'
      key={forrite}
    >{forrite}: {resultados[forrite]}</p>)
    return <div className='Resultados-resultados-container'>
      <p className='Resultados-subtitulo'>Los resultados finales son:</p>
      {resultadosFinales}
    </div>
  }

  const renderCandidatos = () => {
    const candidatos = Object.keys(resultados).filter(forrite => resultados[forrite] >= 2)
    return candidatos.map(candidato => <img
      className='Resultados-candidato'
      alt='candidato'
      src={miniaturas[candidato]}
      key={candidato}
    />)
  }

  return <div className='Resultados-container'>
    { resultados ? <p className='Resultados-titulo'>HABEMUS CANDIDATOS:</p> : null }
    <div className='Resultados-candidatos-container'>
      { resultados ? renderCandidatos() : null }
    </div>
    { renderResultados() }
  </div>
}

export default Resultados;
