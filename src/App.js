import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <main className="App">
     <Header/>
     <Switch>
       <Route exact path='/'>
          <Home />
       </Route>
        <Route  path='/menu'>
          <Menu />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
     </Switch>
    </main>
  );
}

export default App;
