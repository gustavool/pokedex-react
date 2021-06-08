import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Type } from './styles';

export default function TypeBar({ types }) {
  return (
    <div>
      {types &&
        types.map(type => {
          return (
            <Type key={type} type={type}>
              {type}
            </Type>
          );
        })}
    </div>
  );
}

TypeBar.propTypes = {
  types: PropTypes.arrayOf(string).isRequired,
};
