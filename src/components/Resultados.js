/* Component displaying the results */

import React, { useEffect } from 'react';

import './Resultados.css';

const Resultados = props => {
  const resultsUrl = 'http://localhost:4000/results';

  useEffect(() => getResults())

  const getResults = () => {
    fetch(resultsUrl)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => alert(err));
  }

  return <div className='Resultados-container'>
    <p>Bienvenides</p>
  </div>
}

export default Resultados;
