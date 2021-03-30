import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Error404 from "./components/Error/Error404";
import ProtectedRoute from "./protected.route";
import Landing from "./components/Landing";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <Route path="/*" component={Error404} render={(...props) => {}} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
