// import logo from './logo.svg';
import './App.css';
import MiniDrawer from './component/Layout';
import Home from './container/Home';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import About from './container/About';
import Blog from './container/Blog';
import Contact from './container/Contact';
import Medicine from './container/Medicine';
import Table from './container/Table';

function App() {
  return (
    <div className="App">
      <MiniDrawer>
        <Switch>
        <Route exact to path={"/"} component={Home}/>
        <Route exact to path={"/About"} component={About}/>
        <Route exact to path={"/Blog"} component={Blog}/>
        <Route exact to path={"/Contact"} component={Contact}/>
        <Route exact to path={"/Medicine"} component={Medicine}/>
        <Route exact to path={"/Table"} component={Table}/>
        </Switch>
      </MiniDrawer>
    </div>
  );
}

export default App;
