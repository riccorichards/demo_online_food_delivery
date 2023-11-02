import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 15px;
  background-color: #fff;
  padding: 15px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`;
const Item = styled.li``;

const TableOfContants = () => {
  return (
    <Container>
      <Title>Table of contants</Title>
      <Items>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
        <Item>reetr</Item>
      </Items>
    </Container>
  );
};

export default TableOfContants;
