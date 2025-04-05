import { useState } from 'react';
import { getCurrentDate } from '../../../../utils/getCurrentDay';
import { CreateTaskButton } from '../../../../components/CreateTaskButton';
import * as S from './styles';
import { CreatingTaskGhost } from '../../../../components/CreatingTaskGhost';
import { Tasks } from '../../../../components/Tasks';
import { toast } from 'react-toastify';
import { ToastProvider } from '../../../../components/ToastProvider';

export const MainContent = () => {
  const notify = () => toast("Task Created! 🚀");

  const [search, setSearch] = useState('');
  const [isCreateButtonClicked, setIsCreateButtonClicked] = useState(false);
  const currentDate = getCurrentDate();

  const [tasks, setTasks] = useState({});
  const [newTaskId, setNewTaskId] = useState(null);

  const handleSubmit = (inputValue) => {
    if (inputValue.trim() === '') {
      toast.error('Please enter a task name!');
      return;
    }

    notify();
    setIsCreateButtonClicked(false);

    const taskId = Date.now();
    setTasks((prevTasks) => ({
      ...prevTasks,
      [taskId]: {
        id: taskId,
        name: inputValue,
        date: currentDate,
        isDone: false,
        selected: false,
      },
    }));
    setNewTaskId(taskId);

    setTimeout(() => setNewTaskId(null), 200);
  };

  const taskList = Object.values(tasks);

  return (
    <>
      <ToastProvider />
      <S.Container>
        <S.Header>
          <S.SearchContainer>
            <S.SearchIcon />
            <S.Search placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
          </S.SearchContainer>

          <S.ActualDate>{currentDate}</S.ActualDate>

          <CreateTaskButton onClick={() => setIsCreateButtonClicked(true)} />
        </S.Header>

        <S.TextTitle>Tasks - {taskList.length}</S.TextTitle>
        <CreatingTaskGhost
          setIsCreateButtonClicked={setIsCreateButtonClicked}
          isVisible={isCreateButtonClicked}
          submit={handleSubmit}
        />

        {taskList.map((task) => (
          <Tasks key={task.id} taskData={task} isNew={task.id === newTaskId} />
        ))}
      </S.Container>
    </>
  );
};