import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    )
  }
}

export default App;
