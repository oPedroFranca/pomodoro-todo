import { useState } from 'react';
import { getCurrentDate } from '../../../../utils/getCurrentDay';
import { CreateTaskButton } from '../../../../components/CreateTaskButton';
import * as S from './styles';
import { CreatingTaskGhost } from '../../../../components/CreatingTaskGhost';
import { Tasks } from '../../../../components/Tasks';
import { toast } from 'react-toastify';
import { ToastProvider } from '../../../../components/ToastProvider';

export const MainContent = () => {
  const [search, setSearch] = useState('');
  const [isCreateButtonClicked, setIsCreateButtonClicked] = useState(false);
  const currentDate = getCurrentDate();

  const [tasks, setTasks] = useState({});
  const [tasksDone, setTasksDone] = useState({});
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
        priority: 'Normal',
        isDone: false,
        selected: false,
      },
    }));
    setNewTaskId(taskId);

    setTimeout(() => setNewTaskId(null), 200);
  };

  const handleTaskCompletion = (taskId) => {
    const taskInTasks = tasks[taskId];
    const taskInTasksDone = tasksDone[taskId];
  
    if (taskInTasks) {
      // Mover de tasks para tasksDone
      setTasksDone((prevTasksDone) => ({
        ...prevTasksDone,
        [taskId]: { ...taskInTasks, isDone: true },
      }));
      setTasks((prevTasks) => {
        const { [taskId]: _, ...remainingTasks } = prevTasks;
        return remainingTasks;
      });

    } else if (taskInTasksDone) {
      // Mover de tasksDone para tasks
      setTasks((prevTasks) => ({
        ...prevTasks,
        [taskId]: { ...taskInTasksDone, isDone: false },
      }));
      setTasksDone((prevTasksDone) => {
        const { [taskId]: _, ...remainingTasksDone } = prevTasksDone;
        return remainingTasksDone;
      });
    }
  };

  const taskList = Object.values(tasks);
  const taskDoneList = Object.values(tasksDone);

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
          <Tasks
            key={task.id} 
            taskData={task}
            isNew={task.id === newTaskId}
            onTaskComplete={() => handleTaskCompletion(task.id)}
          />
        ))}

        <S.TextTitle>Done - {taskDoneList.length}</S.TextTitle>
        {taskDoneList.map((task) => (
          <Tasks
            key={task.id}
            isNew={task.id === newTaskId}
            taskData={task}
            onTaskComplete={() => handleTaskCompletion(task.id)}
          />
        ))}
      </S.Container>
    </>
  );
};