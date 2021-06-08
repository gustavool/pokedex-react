import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Container } from './styles';
import TypeBar from '../TypeBar';

export default function Board({ id, name, image, types }) {
  return (
    <Container type={types[0]}>
      <img src={image} alt={name} />
      <div>
        <strong>
          {id < 10 && `#00${id}`}
          {id >= 10 && id < 100 && `#0${id}`}
          {id >= 100 && `#${id}`}
        </strong>
        <strong>{name}</strong>
        <TypeBar types={types} />
      </div>
    </Container>
  );
}

Board.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(string).isRequired,
};
