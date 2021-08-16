import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <img class="logo" src="../images/logo.svg" alt="Logo" />
        </Link>
        <input type="checkbox" id="nav-toggle" class="nav-toggle" />
        <nav>
          <ul>
            <li>
              <a href="#">Dresses</a>
            </li>
            <li>
              <a href="#">Shoes</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">Beauty and Wellness</a>
            </li>
            <li>
              <a href="#">Gifts and Candles</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
          </ul>
        </nav>
        <div class="search-cart">
          <i class="fa fa-search"></i>
          <i class="fas fa-shopping-bag"></i>
          <label for="nav-toggle" class="nav-toggle-label">
            <span></span>
          </label>
        </div>
      </header>
      <main>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
      </main>
      <footer class="footer">
        <div class="footer-left">
          <img src="../images/logo.svg" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sint
            incidunt accusamus tenetur nihil officia aliquid illum? Ipsa
            reiciendis nisi aspernatur fugiat laboriosam nobis quae dignissimos.
            Saepe excepturi iusto tempore.
          </p>
        </div>
        <ul class="footer-right">
          <li>
            <h2>Help and Info</h2>
            <ul class="box">
              <li>
                <a href="#">Track Your Order</a>
              </li>
              <li>
                <a href="#">Start A Return or Exchange</a>
              </li>
              <li>
                <a href="#">Returns and Exchanges</a>
              </li>
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>About Us</h2>
            <ul class="box">
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Wholesale</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Our Policies</h2>
            <ul class="box">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Supply Chain Transparency</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="footer-bottom">
          <div class="socials">
            <a href="https://www.pinterest.com/envision5076111/">
              <i class="fab fa-pinterest"></i>
            </a>
            <a href="https://www.instagram.com/landofgaia/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/LandofGaia/">
              <i class="fab fa-facebook"></i>
            </a>
          </div>
          <p>&copy; 2021 Land of Gaia, LLC. All Rights Reserved.</p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
