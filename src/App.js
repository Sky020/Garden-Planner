import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import './styles/App.css';
import Calendar from './components/Calendar';
import Categories from './components/Categories';
import Plants from './components/Plants';

// const store = createStore(() => [], {}, applyMiddleware());

function App() {
  // const [data, setData] = useState([]);
  // const [month, setMonth] = useState();
  // const [plants, setPlants] = useState([]);

  // function getMonth(mon) {
  //   setMonth(mon);
  // }
  // function getData(cat) {
  //   let myPlants = [];
  //   for (let plant of data) {
  //     if (plant.category === cat) {
  //       myPlants.push(plant);
  //     }
  //   }
  //   setPlants(myPlants)
  // }
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Link to="/"><h1 id="heading">My Garden Planner</h1></Link>
          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/plants">
              <Plants />
            </Route>
            <Route path="/">
              <Calendar />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}


export default App;
