import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

const Foods = () => {
  return (
    <Container>
      {/*{fakeFoods.map((food) => (
        <Food food={food} />
      ))}*/}
    </Container>
  );
};

export default Foods;
