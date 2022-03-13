import React, { useState } from 'react';
import theme from '../../global/styles/theme';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Input,
  ButtonAdd
} from './styles';
import { todoProps } from './interface';

export const TodoInput: React.FC<todoProps> = ({ addTask }) => {

  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if (!task)
      return;

    addTask(task);
  }

  return (
    <Container>
      <Input
        placeholder='Adicione uma tarefa'
        placeholderTextColor={theme.colors.gray_3}
        returnKeyType="send"
        autoCorrect={false}
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />

      <ButtonAdd onPress={handleAddNewTask}>
        <Icon name='chevron-right' size={20} color={theme.colors.gray_3} />
      </ButtonAdd>

    </Container>
  );
}