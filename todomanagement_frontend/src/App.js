import './App.css';
import './Bootstrap.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './views/Login';
import Logout from './views/Logout';
import Welcome from './views/Welcome';
import NewTodo from './views/NewTodo';
import ErrorPage from './views/ErrorPage';
import Todos from './views/Todos';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>

        <MenuBar />

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

          <Route path="/welcome/:name" component={Welcome}/>

          <Route exact path="/todos">
            <Todos />
          </Route>

          <Route path="/todos/:id" component={NewTodo}/>

          <Route component={ErrorPage} />

        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;