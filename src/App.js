import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';

function App() {
  return (
    <main className="App">
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
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/*'>
          <ErrorPage />
        </Route>
     </Switch>
     <Footer/>
    </main>

  );
}

export default App;
