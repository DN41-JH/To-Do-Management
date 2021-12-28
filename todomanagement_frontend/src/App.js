import './App.css';
import './Bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Login from './components/Login';
import Logout from './components/Logout';
import Welcome from './components/Welcome';
import ErrorPage from './components/ErrorPage';
import ToDoList from './components/ToDoList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <Switch>

          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/logout">
            <Logout />
          </Route>

          <Route path="/welcome/:name" component={Welcome} />

          <Route exact path="/todos">
            <ToDoList />
          </Route>

          <Route component={ErrorPage} />

        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
