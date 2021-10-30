import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Game from './components/Game';

function App() {
  return (
    <>
    <Router>
  <Nav/>
  <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/game/:id' component={Game}/>      
  </Switch>
  </Router>
  </>
  )
}

export default App;
