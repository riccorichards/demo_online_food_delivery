import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/Home";
import Auth from "./pages/sign/Auth";
import Shop from "./pages/shop/Shop";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default App;
