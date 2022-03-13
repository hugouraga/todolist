import React, { useState } from 'react';

import { Header } from '../../components/Header';
import TasksList from '../../components/TasksList';
import { TodoInput } from '../../components/TodoInput';
import { Task } from '../../interface/interface.task';

import { Container } from './styles';

export const Home: React.FC = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }

    console.log(newTask);

    setTasks(oldState => [...oldState, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
  }

  return (
    <Container>
      <Header tasksCounter={1} />
      <TodoInput addTask={(task) => { handleAddTask(task) }} />

      <TasksList
        tasks={tasks}
        removeTask={handleRemoveTask}
        toggleTaskDone={handleToggleTaskDone}
      />
    </Container>
  );
}