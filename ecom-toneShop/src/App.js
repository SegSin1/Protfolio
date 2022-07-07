import Layout from "./components/Layout/Layout";
import Shop from "./components/Shop/Shop";
import Cart from './components/Cart/Cart'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./store/CartContext/CartContext";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
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
