import './App.css';
import LoginForm from './LoginForm/LoginForm';
import CustomerTable from './CustomerTable/CustomerTable';

function App() {
  const customers = [
    {
      id: '1',
      name: 'Alfreds Futterkiste',
      country: 'Germany',
      area: 'Sports',
    },
    {
      id: '2',
      name: 'Berglunds snabbkop',
      country: 'Sweden',
      area: 'Medicine',
    },
    {
      id: '3',
      name: 'Koniglich Essen',
      country: 'France',
      area: 'Food & Drinks',
    },
    {
      id: '4',
      name: 'Magazzini Alimentari Riuniti',
      country: 'Italy',
      area: 'Technology',
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <LoginForm/>
        <CustomerTable customers={customers} />
      </header>
    </div>
  );
}

export default App;
