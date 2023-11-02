import styled from "styled-components";
import { FaBorderStyle } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { FC } from "react";
const Container = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.15);
`;

const Decor = styled.div`
  position: absolute;
  right: 0;
  margin: auto 0;
  height: 70%;
  width: 5px;
  background-color: ${(prop) => prop.color};
  border-radius: 15px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(prop) => prop.color};
  color: #fff;
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentInfoNum = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
const ContentInfoDesc = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

interface OverviewType {
  type: string;
  amount: number;
  desc: string;
  color: string;
}
const OverviewTemplate: FC<{ data: OverviewType }> = ({ data }) => {
  return (
    <Container>
      <Decor color={data.color} />
      <ContentWrapper>
        <IconWrapper color={data.color}>
          {data.type === "foods" ? (
            <IoFastFoodSharp style={{ fontSize: "24px" }} />
          ) : null}
          {data.type === "orders" ? (
            <FaBorderStyle style={{ fontSize: "24px" }} />
          ) : null}
          {data.type === "feeds" ? (
            <VscFeedback style={{ fontSize: "24px" }} />
          ) : null}
          {data.type === "incoming" ? (
            <GiReceiveMoney style={{ fontSize: "24px" }} />
          ) : null}
          {data.type === "expenses" ? (
            <GiPayMoney style={{ fontSize: "24px" }} />
          ) : null}
        </IconWrapper>
        <ContentInfo>
          <ContentInfoNum>{data.amount}</ContentInfoNum>
          <ContentInfoDesc>{data.desc}</ContentInfoDesc>
        </ContentInfo>
      </ContentWrapper>
    </Container>
  );
};

export default OverviewTemplate;
