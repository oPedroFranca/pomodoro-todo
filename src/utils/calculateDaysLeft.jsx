export const calculateDaysLeft = (taskDate) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Converte "05-04-2025" para "2025-04-05"
  const [day, month, year] = taskDate.split('-');
  const formattedDate = new Date(`${year}-${month}-${day}`);
  formattedDate.setHours(0, 0, 0, 0);

  const timeDiff = formattedDate - today;
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
};