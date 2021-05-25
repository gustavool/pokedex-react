import React from 'react';
import PropTypes, { string } from 'prop-types';

import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function PokemonThumb({ id, name, image, type }) {
  return (
    <Link to={`/pokemon/${id}`}>
      <Container type={type[0]}>
        <header>
          <small>#0{id}</small>
        </header>
        <img src={image} alt={name} />
        <footer>
          <h3>{name}</h3>
          <small>Type: {type}</small>
        </footer>
      </Container>
    </Link>
  );
}

PokemonThumb.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.arrayOf(string).isRequired,
};
