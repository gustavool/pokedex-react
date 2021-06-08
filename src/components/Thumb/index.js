import React from 'react';
import PropTypes, { string } from 'prop-types';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import TypeBar from '../TypeBar';

export default function Thumb({ id, name, image, types }) {
  return (
    <Link to={`/pokemon/${id}`}>
      <Container type={types[0]}>
        <h3>
          {id < 10 && `#00${id}`}
          {id >= 10 && id < 100 && `#0${id}`}
          {id >= 100 && `#${id}`}
        </h3>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <TypeBar types={types} />
      </Container>
    </Link>
  );
}

Thumb.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(string).isRequired,
};
