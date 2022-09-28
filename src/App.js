import { Route, Switch, Redirect } from "react-router-dom";

import MainHeader from "./components/MainHeader";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
            <Route path="/products/:productId">
              <ProductDetail />
            </Route>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
