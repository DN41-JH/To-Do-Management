import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Login from './components/Login';
import Welcome from './components/Welcome';
import ErrorPage from './components/ErrorPage';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/welcome/:name" component={Welcome} />

          <Route exact path="/todos">
            <ToDoList />
          </Route>

          <Route component={ErrorPage} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
