export const formatTransactionDate = (dateString: string): string => {
  const transactionDate = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - transactionDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // If within last 7 days, show day name
  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays <= 7) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[transactionDate.getDay()];
  } else {
    // Format as M/D/YY
    const month = transactionDate.getMonth() + 1;
    const day = transactionDate.getDate();
    const year = transactionDate.getFullYear().toString().slice(-2);
    return `${month}/${day}/${year}`;
  }
};

export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear().toString().slice(-2);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${month}/${day}/${year}, ${hours}:${minutes}`;
};

