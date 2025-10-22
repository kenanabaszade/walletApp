import { calculateDailyPoints } from '../utils/pointsCalculator';
import './DailyPoints.css';

const DailyPoints: React.FC = () => {
  const points = calculateDailyPoints();

  return (
    <div className="daily-points">
      <div className="daily-points-label">Daily Points</div>
      <div className="daily-points-value">{points}</div>
    </div>
  );
};

export default DailyPoints;

