import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import NewQuestion from './pages/New';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/new">New</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/new" component={NewQuestion} />
            <Route path="/q/:id" component={Detail} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
