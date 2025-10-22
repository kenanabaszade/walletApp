import './CardBalance.css';

interface CardBalanceProps {
  balance: number;
  limit: number;
}

const CardBalance: React.FC<CardBalanceProps> = ({ balance, limit }) => {
  const available = limit - balance;

  return (
    <div className="card-balance">
      <div className="card-balance-label">Card Balance</div>
      <div className="card-balance-amount">${balance.toFixed(2)}</div>
      <div className="card-balance-available">
        ${available.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Available
      </div>
    </div>
  );
};

export default CardBalance;

