export const parseDateString = (dateString) => {
    const [year, month, day] = dateString.split('.').map(Number);
    return new Date(year, month - 1, day); // Month is zero-indexed in JavaScript Date
  };
  
  export const calculateDaysBetween = (startDate, endDate) => {
    const oneDay = 1000 * 60 * 60 * 24; // Milliseconds in one day
    const diffInTime = endDate - startDate; // Difference in milliseconds
    return Math.round(diffInTime / oneDay);
  };
  
  export const inProgress = (startDate, today) => {
    return today > startDate;
  };
  
  export const percentDone = (startDate, endDate, today) => {
    return (today - startDate) / (endDate - startDate);
  };
  
  export const formatDayMonth = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    return `${day}/${month}`;
  };

