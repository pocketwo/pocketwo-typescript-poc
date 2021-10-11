import React from 'react';
import Container from '../../shared/container';
import BackButton from '../BackButton';
import Logo from '../Logo';
import Form from './Form';

const RegisterScreen: React.FC = () => {
  return (
    <Container>
      <BackButton />
      <Logo />
      <Form />
    </Container>
  );
};

export default RegisterScreen;
