import { AppHeader } from './cmps/AppHeader'
import { Home } from './pages/Home'
import { DogFactApp} from './pages/DogFactApp'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { MyFacts } from './pages/MyFacts';
import { Footer } from './cmps/Footer';

function App() {
  return (
    <div className="App flex column space-between">
      <AppHeader />
      <Switch>
        <Route component={MyFacts} path="/my-facts" />
        <Route component={DogFactApp} path="/dog-fact" />
        <Route component={Home} path="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
