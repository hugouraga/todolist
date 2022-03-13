import React, { useState } from 'react';
import theme from '../../global/styles/theme';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Input,
  ButtonAdd
} from './styles';

export const TodoInput: React.FC = () => {

  const [task, setTask] = useState('');

  function handleAddNewTask() {
    console.log(task);
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

      <ButtonAdd>
        <Icon name='chevron-right' size={20} color={theme.colors.gray_3} />
      </ButtonAdd>

    </Container>
  );
}