import styled from "styled-components";
import Vendors from "./Vendors";
import Cuisines from "./Cuisines";
import Duration from "./Duration";

const Container = styled.div`
  border-radius: 15px;
  background-color: #fff;
`;
const Category = () => {
  return (
    <Container>
      <Vendors />
      <Cuisines />
      <Duration />
    </Container>
  );
};

export default Category;
