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

const App = () => {
  const { auth } = useAppSelector((state) => state.auth);
  return (
    <div>
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
      </Routes>
    </div>
  );
};

export default App;
