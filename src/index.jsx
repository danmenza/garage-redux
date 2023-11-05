// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { reducer as formReducer } from 'redux-form';

// internal modules
import '../assets/stylesheets/application.scss';
import CarsIndex from './containers/CarsIndex';
import CarsShow from './containers/CarsShow';
import CarsNew from './containers/carsNew';
import carsReducer from './reducers/carsReducer';

const history = createBrowserHistory();

// State and reducers
const initialState = {
  cars: carsReducer,
  garage: prompt("What is your garage?") || uuidv4()
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <div className="view-container">
          <Route path="/" component={CarsIndex} />
          <Route path="/cars/new" component={CarsNew} />
          <Route path="/cars/:id" component={CarsShow} />
        </div>
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('.container'));
