import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';
import Delivery from './components/Info/Delivery';
import Returns from './components/Info/Returns';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Cart from './components/Cart/Cart';
import User from './components/User/User';
import ProductPage from './components/Products/ProductPage';

function App() {
  return (
      <div className="App">
        <Topbar />
        <Header />
        <Navbar />
          <div>
            <Switch>
              <Route exact path="/delivery">
                <Delivery />
              </Route>
              <Route exact path="/returns">
                <Returns />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/user">
                <User />
              </Route>
              <Route exact path={["/", "/electronics", "/clothes", "/shoes", "/accessories"]}>
                <Products />
              </Route>
              <Route path="products/:id" >
                <ProductPage />
              </Route>
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
          </div>
    </div>
  );
}

export default App;
