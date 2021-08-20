
import './App.css';
import Home from './component/Home';
import AccountProvider from './context/AccountProvider';

function App() {
  return (
      <div>
        <AccountProvider>
          <Home/>
        </AccountProvider>
      </div>
  );
}

export default App;
