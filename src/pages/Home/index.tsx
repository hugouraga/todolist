import React from 'react';

import { Header } from '../../components/Header';
import { TodoInput } from '../../components/TodoInput';

import { Container } from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <Header tasksCounter={1} />
      <TodoInput />
    </Container>
  );
}