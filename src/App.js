import React from "react";
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
//import {Layout} from "antd";
import {Router} from "react-router-dom";
import configureStore, {history} from './appRedux/store';
//import Navigation from "./containers/Navigation";
import Pages from "./pages";

const store = configureStore(/ provide initial state if any /);

function App() {
  return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router history={history}>
            <Pages />
          </Router>
        </ConnectedRouter>
      </Provider>
  );
}

export default App;
