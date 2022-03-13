import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import theme from '../../global/styles/theme';

import logo from './../../assets/images/logo.png';

import { headerProps } from './interface';

import {
  Container,
  Tasks,
  TaskDetail,
} from './styles';

export const Header: React.FC<headerProps> = ({ tasksCounter }) => {

  const tasksText = tasksCounter === 1 ? 'tarefa' : 'tarefas';

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.primary }}>
      <Container>
        <Image source={logo} />
        <Tasks>
          <TaskDetail weight='normal'>Você tem</TaskDetail>
          <TaskDetail weight='large'> {tasksCounter} {tasksText}</TaskDetail>
        </Tasks>
      </Container>
    </SafeAreaView>
  );
}
