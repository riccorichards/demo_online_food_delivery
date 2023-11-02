import styled from "styled-components";
import TableOfContants from "./dashboardComp/TableOfContants";
import Overview from "./dashboardComp/overview/Overview";
import InAndEx from "./dashboardComp/incomingAndExpenses/InAndEx";
import VolumesAndFoods from "./dashboardComp/VolumesAndFoods/VolumsAndFoods";
import ListOfFood from "./dashboardComp/ListOfFood";

const Container = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 0;
`;

const Dashboard = () => {
  return (
    <Container>
      <TableOfContants />
      <Overview />
      <InAndEx />
      <VolumesAndFoods />
      <ListOfFood />
    </Container>
  );
};

export default Dashboard;
