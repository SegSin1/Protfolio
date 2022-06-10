import logo from "./logo.svg";
import Layout from "./components/Layout/Layout";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/cart" element={<Shop />} />
          <Route path="/shop/order/checkout" element={<Shop />} />
          <Route path="/shop/order/confirmation" element={<Shop />} />
          <Route path="/auth/login" element={<Shop />} />
          <Route path="/auth/login/forgotPassword" element={<Shop />} />
          <Route path="/auth/register" element={<Shop />} />
          <Route path="/profile" element={<Shop />} />
          <Route path="/notfound" element={<Shop />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
