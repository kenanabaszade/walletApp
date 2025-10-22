import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionsList from './components/TransactionsList';
import TransactionDetail from './components/TransactionDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransactionsList />} />
        <Route path="/transaction/:id" element={<TransactionDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
