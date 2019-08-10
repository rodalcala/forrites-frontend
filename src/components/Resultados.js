/* Component handling votation logic */

import React, { useEffect } from 'react';

const Resultados = props => {
  const resultsUrl = 'http://localhost:4000/results';

  useEffect(() => getResults())

  const getResults = () => {
    fetch(resultsUrl)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => alert(err));
  }

  return <div>
    <p>Bienvenides</p>
  </div>
}

export default Resultados;
