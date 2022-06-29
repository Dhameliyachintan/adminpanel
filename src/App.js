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
import { Provider } from 'react-redux';
import { configureStore } from './Redux/Store';
import Counter from './container/Counter/Counter';

function App() {

 let store = configureStore()

  return (
    <>
      <Provider store={store}>
        <MiniDrawer>
          <Switch>
            <Route exact to path={"/"} component={Home} />
            <Route exact to path={"/About"} component={About} />
            <Route exact to path={"/Blog"} component={Blog} />
            <Route exact to path={"/Contact"} component={Contact} />
            <Route exact to path={"/Medicine"} component={Medicine} />
            <Route exact to path={"/Table"} component={Table} />
            <Route exact to path={"/Counter"} component={Counter} />
          </Switch>
        </MiniDrawer>
      </Provider>
    </>
  );
}

export default App;
