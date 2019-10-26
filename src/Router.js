/* Navigational component handling specific URL requests and fetching the app's data */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';

const forrites = {
  ariel: '/M2tLnmk', 
  evelin: '/Xmwdme6', 
  federico: '/voHVeGX', 
  ignacio: '/jTZX5Hh', 
  marco: '/kEw1P1x', 
  rodrigo: '/fpFr67v', 
  santiago: '/DvQ3TW1', 
  solana: '/WMNhGxh', 
  yamila: '/eBHBQEh'
};

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        { Object.keys(forrites).map(forrite => <Route exact key={forrites[forrite]} path={forrites[forrite]} component={App} />) }
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
