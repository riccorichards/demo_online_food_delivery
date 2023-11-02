import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/Home";
import Auth from "./pages/sign/Auth";
import Shop from "./pages/shop/Shop";
import Dashboard from "./pages/dashboard/Dashboard";
import Vendors from "./pages/vendors/Vendors";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/vendor" element={<Vendors />} />
        <Route path="/vendor-dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
