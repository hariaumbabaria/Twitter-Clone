import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import Home from './component/Home';
import Sidebar from "./component/Sidebar";
import AccountProvider from './context/AccountProvider';

function App() {
  return (
      <div>
        <AccountProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/home' component={Sidebar} />
            </Switch>
          </BrowserRouter>
        </AccountProvider>
      </div>
  );
}

export default App;
