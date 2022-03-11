import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';

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
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/*'>
          <ErrorPage />
        </Route>
     </Switch>
    </main>
  );
}

export default App;
