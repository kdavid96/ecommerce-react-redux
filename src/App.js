import react, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Navbar, Products, Topbar, Home, Delivery, Returns, PageNotFound, Cart, User, ProductPage, Footer, MobileNav } from './components';

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
      <div className="App">
        <Topbar isOpen={isOpen} setOpen={setOpen}/>
        <Navbar isOpen={isOpen}/>
        <MobileNav isOpen={isOpen} setOpen={setOpen}/>
          <div style={{position: 'relative', top: '5vh'}}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
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
              <Route exact path={["/electronics", "/clothes", "/shoes", "/accessories"]}>
                <Products />
              </Route>
              <Route path="/products/:id" >
                <ProductPage />
              </Route>
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
          </div>
        {/*<Footer />*/}
    </div>
  );
}

export default App;
