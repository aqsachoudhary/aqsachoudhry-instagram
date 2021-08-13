import { Switch, Route, Router } from "react-router-dom";
import history from "./@history";
import { Provider } from "react-redux";

import "./App.css";
import store from "./store/index";
import HomePage from "./modules/Home/HomePage";
import LoginPage from "./modules/LoginPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/home" component={HomePage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
