import './styles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import FormAuth from './page/FormAuth';
import GetPagination from './page/GetPagination';
import Dashboard from './page/Dashboard';
import Fibonacci from './page/Fibonacci';
import LinkedList from './page/LinkedList';
import DebounceAndThrottle from './page/DebounceAndThrottle';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                className="notSelected"
                activeClassName="selected"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fibonacci"
                className="notSelected"
                activeClassName="selected"
              >
                Fibonacci
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/debounce_and_throttle"
                className="notSelected"
                activeClassName="selected"
              >
                Debounce & Throttle
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/linkedlist"
                className="notSelected"
                activeClassName="selected"
              >
                Linked List
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pagination"
                className="notSelected"
                activeClassName="selected"
              >
                Pagination
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/formauth"
                className="notSelected"
                activeClassName="selected"
              >
                Form Authentication
              </NavLink>
            </li>
          </ul>
        </header>

        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/fibonacci">
            <Fibonacci />
          </Route>
          <Route path="/debounce_and_throttle">
            <DebounceAndThrottle />
          </Route>
          <Route path="/pagination">
            <GetPagination />
          </Route>

          <Route path="/linkedlist">
            <LinkedList />
          </Route>
          <Route path="/formauth">
            <FormAuth />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
