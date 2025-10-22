import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import type { Transaction } from '../types/Transaction';
import { formatDateTime } from '../utils/dateUtils';
import transactionsData from '../data/transactions.json';
import './TransactionDetail.css';

const TransactionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const transactions: Transaction[] = transactionsData as Transaction[];
  
  const transaction = transactions.find(t => t.id === id);

  if (!transaction) {
    return (
      <div className="transaction-detail-container">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <div className="transaction-not-found">Transaction not found</div>
      </div>
    );
  }

  const formattedDateTime = formatDateTime(transaction.date);

  return (
    <div className="transaction-detail-container">
      <div className="detail-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-amount">
          ${transaction.amount.toFixed(2)}
        </div>
        <div className="detail-merchant">{transaction.name}</div>
        <div className="detail-datetime">{formattedDateTime}</div>

        <div className="detail-info-card">
          <div className="detail-status">
            <span className="status-label">Status:</span> <span className="status-value">{transaction.status}</span>
          </div>
          <div className="detail-card">{transaction.cardUsed}</div>
          <div className="detail-separator"></div>
          <div className="detail-total">
            <span className="total-label">Total</span>
            <span className="total-amount">${transaction.amount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;

