import { useState } from 'react';
import { getCurrentDate } from '../../../../utils/getCurrentDay';
import { CreateTaskButton } from '../../../../components/CreateTaskButton';
import { EditTaskButton } from '../../../../components/EditTaskButton';
import * as S from './styles';
import { CreatingTaskGhost } from '../../../../components/CreatingTaskGhost';
import { Tasks } from '../../../../components/Tasks';
import { toast } from 'react-toastify';
import { ToastProvider } from '../../../../components/ToastProvider';

export const MainContent = () => {
  const [search, setSearch] = useState('');
  const [isCreateButtonClicked, setIsCreateButtonClicked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const currentDate = getCurrentDate();

  const [tasks, setTasks] = useState({});
  const [newTaskId, setNewTaskId] = useState(null);

  const handleSubmit = (inputValue) => {
    if (inputValue.trim() === '') {
      toast.error('Please enter a task name!');
      return;
    }

    toast("Task Created! 🚀");
    setIsCreateButtonClicked(false);

    const taskId = Date.now();
    setTasks((prevTasks) => ({
      ...prevTasks,
      [taskId]: {
        id: taskId,
        name: inputValue,
        date: currentDate,
        priority: '',
        isDone: false,
        selected: false,
      },
    }));
    setNewTaskId(taskId);

    setTimeout(() => setNewTaskId(null), 200);
  };

  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [taskId]: {
        ...prevTasks[taskId],
        isDone: !prevTasks[taskId].isDone,
      },
    }));
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      delete updatedTasks[taskId];
      return updatedTasks;
    });
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

          <div style={{ display: 'flex', gap: '10px' }} >
            <EditTaskButton onClick={() => setIsEditing(!isEditing)} isEditing={isEditing} />
            <CreateTaskButton onClick={() => setIsCreateButtonClicked(true)} />
          </div>
        </S.Header>

        <S.TextTitle>Tasks - {taskList.length}</S.TextTitle>
        <CreatingTaskGhost
          setIsCreateButtonClicked={setIsCreateButtonClicked}
          isVisible={isCreateButtonClicked}
          submit={handleSubmit}
        />

        {taskList.map((task, index) => (
          <Tasks
            key={task.id} taskData={task}
            index={index}
            isNew={task.id === newTaskId}
            isEditing={isEditing}
            onTaskComplete={() => handleTaskCompletion(task.id)}
            onDelete={handleDeleteTask}
          />
        ))}
      </S.Container>
    </>
  );
};