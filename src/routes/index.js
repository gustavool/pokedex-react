import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PokeData from '../pages/PokeData';

import Pokedex from '../pages/Pokedex';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Pokedex} />
      <Route path='/pokemon/:id' exact component={PokeData} />
    </Switch>
  );
}
