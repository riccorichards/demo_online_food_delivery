import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const Amount = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

const Desc = styled.span`
  font-size: 16px;
`;

interface Datatype {
  amount: number;
  desc: string;
}

const DataTemplate: FC<{ data: Datatype }> = ({ data }) => {
  return (
    <Container>
      <Amount>{data.amount}</Amount>
      <Desc>{data.desc}</Desc>
    </Container>
  );
};

export default DataTemplate;
