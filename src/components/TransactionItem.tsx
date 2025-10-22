import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAmazon } from '@fortawesome/free-brands-svg-icons';
import { 
  faBuildingColumns, 
  faHouse, 
  faBullseye, 
  faWifi, 
  faShoppingCart 
} from '@fortawesome/free-solid-svg-icons';
import type { Transaction } from '../types/Transaction';
import { formatTransactionDate } from '../utils/dateUtils';
import './TransactionItem.css';

interface TransactionItemProps {
  transaction: Transaction;
  onClick: () => void;
}

const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    'apple': faApple,
    'building-columns': faBuildingColumns,
    'house': faHouse,
    'bullseye': faBullseye,
    'wifi': faWifi,
    'amazon': faAmazon,
    'shopping-cart': faShoppingCart,
  };
  return iconMap[iconName] || faBuildingColumns;
};

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onClick }) => {
  const { type, amount, name, description, date, isPending, authorizedUser, icon, iconBg, percentage } = transaction;
  
  const formattedDate = formatTransactionDate(date);
  
  // Build date display string
  let dateDisplay = formattedDate;
  if (authorizedUser) {
    dateDisplay = `${authorizedUser} - ${formattedDate}`;
  }
  
  // Build description display
  let descriptionDisplay = description;
  if (isPending) {
    descriptionDisplay = `Pending - ${description}`;
  }

  return (
    <div className="transaction-item" onClick={onClick}>
      <div className="transaction-icon" style={{ background: iconBg }}>
        <FontAwesomeIcon icon={getIcon(icon)} />
      </div>
      <div className="transaction-details">
        <div className="transaction-name">{name}</div>
        <div className="transaction-description">{descriptionDisplay}</div>
        <div className="transaction-date">{dateDisplay}</div>
      </div>
      <div className="transaction-right">
        <div className="transaction-amount">
          {type === 'Payment' ? '+' : ''}${amount.toFixed(2)}
        </div>
        {percentage && (
          <div className="transaction-percentage">{percentage}%</div>
        )}
      </div>
      <FontAwesomeIcon icon={faChevronRight} className="transaction-chevron" />
    </div>
  );
};

export default TransactionItem;

