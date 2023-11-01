import styled from "styled-components";
import food_1 from "../../assets/food_1.jpeg";
import food_2 from "../../assets/food_2.jpeg";
import food_3 from "../../assets/food_3.jpeg";
import food_4 from "../../assets/food_4.jpeg";
const Container = styled.div`
  width: 100%;
  height: 50vh;
  padding: 15px;
  margin-top: 30px;
  display: flex;
  gap: 15px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 1.5px 10.5px rgba(0, 0, 0, 0.35);
`;

const LeftSide = styled.div`
  flex: 2;
`;
const MiddleSide = styled.div`
  flex: 2;
`;
const RightSide = styled.div`
  flex: 1.35;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RightSideA = styled.div`
  flex: 1;
`;
const RightSideB = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
`;

const Intro = () => {
  return (
    <Container>
      <LeftSide>
        <Image src={food_1} />
      </LeftSide>
      <MiddleSide>
        <Image src={food_2} />
      </MiddleSide>
      <RightSide>
        <RightSideA>
          <Image src={food_3} />
        </RightSideA>
        <RightSideB>
          <Image src={food_4} />
        </RightSideB>
      </RightSide>
    </Container>
  );
};

export default Intro;
