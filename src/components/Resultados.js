/* Component displaying the results */

import React from 'react';

import './Resultados.css';

const Resultados = ({ resultados }) => {
  const miniaturas = {
    ignacio: 'https://i.imgur.com/aWpHyew.jpg',
    marco: 'https://i.imgur.com/x5clGis.jpg',
  };

  const renderResultados = () => {
    const sortedResultados = Object.keys(resultados).sort((a,b) => resultados[b]-resultados[a]);
    const participacion = Math.trunc(Object.keys(resultados).reduce((acc, cur) => acc + resultados[cur], 0) / 9 * 100);

    return (
      <div>
        <p className='Resultados-titulo'>HABEMUS NOVI ADMINISTRADOR</p>
        <div className='Resultados-divider' />
        <div className='Resultados-candidato-container'>
          <img
            className='Resultados-candidato'
            alt='candidato'
            src={miniaturas[sortedResultados[0]]}
          />
        </div>
        <p className='Resultados-subtitulo'>Resultados finales:</p>
        <p className='Resultados-resultados'>{sortedResultados[0]}: {resultados[sortedResultados[0]]}</p>
        <p className='Resultados-resultados'>{sortedResultados[1]}: {resultados[sortedResultados[1]]}</p>
        <p className='Resultados-resultados'>------------------------</p>
        <p className='Resultados-resultados'>participación: {participacion}%</p>
        <div className='Resultados-divider' />
      </div>
    )
  }

  const renderPending = () => {
    return (
      <div>
        <p className='Resultados-subtitulo'>Gracias por participar de las</p>
        <p className='Resultados-titulo'>II Elecciones Generales</p>
        <p className='Resultados-subtitulo'>LOS FORRITOS</p>
        <div className='Resultados-divider' />
        <p className='Resultados-text'>Tan pronto como cierre la votación, los resultados estarán disponibles en esta misma página.</p>
      </div>
    );
  }

  return (
    <div className='Resultados-container'>
      { resultados ? renderResultados() : renderPending() }
    </div>
  )
}

export default Resultados;
