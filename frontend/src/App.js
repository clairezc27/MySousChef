import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Search from './components/search';
import Favorites from './components/fav';
import Saved from './components/saved';
import Completed from './components/completed';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/favs" component={Favorites} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/completed" component={Completed} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
