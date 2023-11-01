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

const TimesItems = ({
  openFilter,
  setSelectedItem,
}: {
  openFilter: boolean;
  setSelectedItem: any;
}) => {
  const Times = ["15 mins", "30 mins", "45 mins", "1 hour"]; // this way becaues it is demo version and for that request my server is not ready

  return (
    <>
      {openFilter ? (
        <Container>
          <ItemsWrapper>
            {Times.map((time) => (
              <Items key={time} onClick={() => setSelectedItem(time)}>
                {time}
              </Items>
            ))}
          </ItemsWrapper>
        </Container>
      ) : null}
    </>
  );
};

export default TimesItems;
