import styled from "styled-components";
import { useAppSelector } from "../../../redux/hook";
import VendorPanel from "./VendorPanel";
import UserPanel from "./UserPanel";
import AdminPanel from "./AdminPanel";

const Container = styled.div``;

const ProfilePanel = () => {
  const { auth } = useAppSelector((state) => state.auth);
  return (
    <Container>
      {auth?.status === "Vendor" && <VendorPanel />}
      {auth?.status === "Admin" && <AdminPanel />}
      {auth?.status === "Customer" && <UserPanel />}
    </Container>
  );
};

export default ProfilePanel;
