import Layout from "./components/Layout/Layout";
import Shop from "./components/Shop/Shop";
import Cart from './components/Cart/Cart'
import WatchList from "./components/WatchList/WatchList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./store/CartContext/CartContext";
import StoreNotifications from "./components/StoreNotifications/StoreNotifications";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/notifications" element={<StoreNotifications />} />
            <Route path="/order/checkout" element={<Shop />} />
            <Route path="/order/confirmation" element={<Shop />} />
            <Route path="/auth/login" element={<Shop />} />
            <Route path="/auth/login/forgotPassword" element={<Shop />} />
            <Route path="/auth/register" element={<Shop />} />
            <Route path="/profile" element={<Shop />} />
            <Route path="/notfound" element={<Shop />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
