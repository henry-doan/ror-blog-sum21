import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';

// nav routes
const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="/blog/:id" component={About} /> */}
      {/* make sure it is the last item */}
      <Route component={NoMatch} />
    </Switch>
  </>
)

export default App;
