import React from 'react';
import { Link } from 'react-router-dom';
import { GoMarkGithub } from 'react-icons/go';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
        <p />
        <Link to='/'>POKEDEX</Link>
        <a href='https://github.com'>
          <GoMarkGithub size={24} />
        </a>
      </nav>
    </Container>
  );
}
