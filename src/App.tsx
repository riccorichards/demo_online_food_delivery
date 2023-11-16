import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/Home";
import Auth from "./pages/sign/Auth";
import Shop from "./pages/shop/Shop";
import Dashboard from "./pages/dashboard/Dashboard";
import Vendors from "./pages/vendors/Vendors";
import SingleVendor from "./pages/singleVendor/SingleVendor";
import AdminDashboard from "./pages/admin/admin-dashboard/AdminDashboard";
import CreateVendor from "./pages/admin/CreateVendor";
import { useAppSelector } from "./redux/hook";
import CreateFood from "./pages/singleVendor/vendorComps/CreateFood";
import CurrentOrder from "./pages/CurrentOrder/CurrentOrder";
import styled from "styled-components";
import Cart from "./pages/cart/Cart";

const Container = styled.div`
  
`;

const App = () => {
  const { auth } = useAppSelector((state) => state.auth);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/vendor" element={<Vendors />} />
        <Route path="/vendor/:id" element={<SingleVendor />} />
        <Route
          path="/vendor-dashboard"
          element={
            auth?.status === "Vendor" ? <Dashboard /> : <Navigate to="/" />
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            auth?.status === "Admin" ? <AdminDashboard /> : <Navigate to="/" />
          }
        />
        <Route path="/create-vendor" element={<CreateVendor />} />
        <Route path="/create-food" element={<CreateFood />} />
        <Route path="/current-order" element={<CurrentOrder />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Container>
  );
};

export default App;
