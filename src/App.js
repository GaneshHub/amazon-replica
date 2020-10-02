import React, { useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Components/Payment";
import SubHeader from "./Components/SubHeader";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

const promise = loadStripe(
  "pk_test_51HSbOjDjK43wp30B29pyHD7iYBukdSkRaaHYd3ASvKIMGxyrPZDW3mTxjQfDOX9Z2wq7mMlAdb1q9HBFpP2XWEdw00G1Z9WhFe"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          payload: {
            user: authUser
          }
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          payload: {
            user: null
          }
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <SubHeader />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <SubHeader />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <SubHeader />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <SubHeader />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
