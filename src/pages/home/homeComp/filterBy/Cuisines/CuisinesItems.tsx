import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 100%;
  border: 1px solid;
  margin-top: 10px;
  width: 100%;
  border-radius: 15px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
const Items = styled.span`
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const CuisinesItems = ({
  openFilter,
  setSelectedItem,
}: {
  openFilter: boolean;
  setSelectedItem: any;
}) => {
  const cuisines = [
    "Georgian",
    "American",
    "Italian",
    "Chinese",
    "Mexican",
    "Indian",
    "Thai",
  ]; // this way becaues it is demo version and for that request my server is not ready

  return (
    <>
      {openFilter ? (
        <Container>
          <ItemsWrapper>
            {cuisines.map((cuisine) => (
              <Items key={cuisine} onClick={() => setSelectedItem(cuisine)}>
                {cuisine}
              </Items>
            ))}
          </ItemsWrapper>
        </Container>
      ) : null}
    </>
  );
};

export default CuisinesItems;
