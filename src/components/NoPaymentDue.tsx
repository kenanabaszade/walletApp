import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './NoPaymentDue.css';

const NoPaymentDue: React.FC = () => {
  return (
    <div className="no-payment-due">
      <div className="no-payment-content">
        <div className="no-payment-label">No Payment Due</div>
        <div className="no-payment-message">You've paid your September balance.</div>
      </div>
      <div className="no-payment-icon">
        <FontAwesomeIcon icon={faCheck} />
      </div>
    </div>
  );
};

export default NoPaymentDue;

