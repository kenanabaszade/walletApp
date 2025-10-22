import { useNavigate } from 'react-router-dom';
import CardBalance from './CardBalance';
import NoPaymentDue from './NoPaymentDue';
import DailyPoints from './DailyPoints';
import TransactionItem from './TransactionItem';
import type { Transaction } from '../types/Transaction';
import transactionsData from '../data/transactions.json';
import './TransactionsList.css';

const TransactionsList: React.FC = () => {
  const navigate = useNavigate();
  const cardBalance = 17.30;
  const cardLimit = 1500;
  const transactions: Transaction[] = transactionsData as Transaction[];

  const handleTransactionClick = (transactionId: string) => {
    navigate(`/transaction/${transactionId}`);
  };

  return (
    <div className="transactions-list-container">
      <div className="top-cards">
        <div className="left-column">
          <CardBalance balance={cardBalance} limit={cardLimit} />
          <DailyPoints />
        </div>
        <div className="right-column">
          <NoPaymentDue />
        </div>
      </div>

      <div className="latest-transactions-section">
        <h2 className="section-title">Latest Transactions</h2>
        <div className="transactions-list">
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onClick={() => handleTransactionClick(transaction.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;

