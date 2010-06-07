// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import DashBoard from './components/Admin/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/dashboard" component={DashBoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
