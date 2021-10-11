import React from 'react';
import Container from '../../shared/container';
import BackButton from '../BackButton';
import Logo from '../Logo';
import Footer from './Footer';
import Form from './Form';

const LoginScreen: React.FC = () => {
  return (
    <Container>
      <BackButton />
      <Logo />
      <Form />
      <Footer />
    </Container>
  );
};

export default LoginScreen;
