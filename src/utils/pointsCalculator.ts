// Calculate daily points based on season day
export const calculateDailyPoints = (currentDate: Date = new Date()): string => {
  const month = currentDate.getMonth(); // 0-11
  const day = currentDate.getDate();
  
  // Determine season and day of season
  // Spring: March 1 (month 2), Summer: June 1 (month 5), Autumn: September 1 (month 8), Winter: December 1 (month 11)
  let seasonStartMonth: number;
  
  if (month >= 2 && month < 5) {
    // Spring (March, April, May)
    seasonStartMonth = 2; // March
  } else if (month >= 5 && month < 8) {
    // Summer (June, July, August)
    seasonStartMonth = 5; // June
  } else if (month >= 8 && month < 11) {
    // Autumn (September, October, November)
    seasonStartMonth = 8; // September
  } else {
    // Winter (December, January, February)
    seasonStartMonth = 11; // December
  }
  
  // Calculate day of season
  let dayOfSeason: number;
  
  if (seasonStartMonth === 11 && month < 2) {
    // Winter spans across year boundary
    if (month === 11) {
      dayOfSeason = day;
    } else if (month === 0) {
      dayOfSeason = 31 + day; // December has 31 days
    } else {
      dayOfSeason = 31 + 31 + day; // December + January
    }
  } else {
    const seasonStart = new Date(currentDate.getFullYear(), seasonStartMonth, 1);
    const diffTime = currentDate.getTime() - seasonStart.getTime();
    dayOfSeason = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  }
  
  // Calculate points
  let points: number;
  
  if (dayOfSeason === 1) {
    points = 2;
  } else if (dayOfSeason === 2) {
    points = 3;
  } else {
    // Calculate recursively for all previous days
    const pointsArray: number[] = [0, 2, 3]; // index 0 is unused, 1 is day 1, 2 is day 2
    
    for (let d = 3; d <= dayOfSeason; d++) {
      const prevDayPoints = pointsArray[d - 1];
      const twoDaysAgoPoints = pointsArray[d - 2];
      const newPoints = twoDaysAgoPoints * 1.0 + prevDayPoints * 0.6;
      pointsArray.push(newPoints);
    }
    
    points = pointsArray[dayOfSeason];
  }
  
  // Round and format
  points = Math.round(points);
  
  if (points >= 1000) {
    const k = Math.round(points / 1000);
    return `${k}K`;
  }
  
  return points.toString();
};

