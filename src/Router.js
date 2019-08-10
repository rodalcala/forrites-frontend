/* Navigational component handling specific URL requests and fetching the app's data */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BoletaUnica from './components/BoletaUnica';

const forrites = {
  ariel: '/ariel', 
  evelin: '/evelin', 
  federico: '/federico', 
  ignacio: '/ignacio', 
  marco: '/marco', 
  rodrigo: '/rodrigo', 
  santiago: '/santiago', 
  solana: '/solana', 
  yamila: '/yamila'
};

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        { Object.keys(forrites).map(forrite => <Route exact key={forrites[forrite]} path={forrites[forrite]} component={BoletaUnica} />) }
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
