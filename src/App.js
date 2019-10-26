/* Component handling this SPA rendering */

import React, { useEffect, useState } from 'react';

import BoletaUnica from './components/BoletaUnica';
import Resultados from './components/Resultados';

import './App.css';

const App = ({ match }) => {
  const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';
  const resultsUrl = baseUrl  + '/results' + match.path;
  const [ resultados, setResultados ] = useState(false);
  const [ alreadyVoted, setAlreadyVoted ] = useState(false);

  useEffect(() => {
    fetch(resultsUrl)
      .then(res => res.json())
      .then(res => {
          setResultados(res.resultados);
          setAlreadyVoted(res.alreadyVoted);
      })
      .catch(err => console.log(err));
  }, [resultsUrl])

  /* NOTE: match es una prop que reciben por defecto los componentes que renderiza el router */
  if (alreadyVoted) return <Resultados resultados={resultados} />;
  return <BoletaUnica match={match} />

}

export default App;
