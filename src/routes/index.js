import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PokeData from '../components/PokeData';

import Pokedex from '../components/Pokedex';
// import PokemonThumb from '../pages/PokemonThumb';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Pokedex} />
      <Route path='/pokemon/:id' exact component={PokeData} />
    </Switch>
  );
}
