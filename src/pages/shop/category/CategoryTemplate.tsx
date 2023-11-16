import { useContext, useState } from "react";
import styled from "styled-components";
import CatContext from "../../../context";
import { FilterByType } from "../../../redux/ApiCall";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
`;

const TitleWrapper = styled.div`
  position: relative;
  height: 5vh;
  display: flex;
  align-items: center;
  background-color: rgb(220, 222, 224);
  border-radius: 0 7px 7px 0;
  box-shadow: 0 0 1.5px rgba(0, 0, 0, 0.35);
`;

const Title = styled.h3`
  color: #fff;
  margin-left: 15px;
  letter-spacing: 1.5px;
  text-shadow: 0 0 1.5px black;
`;
const Decor = styled.div`
  height: 100%;
  width: 10px;
  background-color: orangered;
  position: absolute;
  top: 0;
  left: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Content = styled.div`
  width: fit-content;
  color: orangered;
  text-decoration: none;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

interface ContentType {
  content: string[] | undefined;
  title: string;
}

const CategoryTemplate = ({ title, content }: ContentType) => {
  const [clickedContent, setClicketContent] = useState("");
  const getContext = useContext(CatContext);

  if (getContext === null) return null;

  const setFilterBy = getContext.setFilterBy;
  const { reset } = getContext.filterBy;

  const onClick = (name: string) => {
    setClicketContent((prev) => (prev === name ? "" : name));

    setFilterBy((prev: FilterByType) => {
      if (title === "Vendors") {
        return {
          ...prev,
          vendor: clickedContent === name ? "" : name,
          reset: false,
        };
      } else if (title === "Duration") {
        return {
          ...prev,
          duration: clickedContent === name ? "" : name,
          reset: false,
        };
      } else if (title === "Cuisines") {
        return {
          ...prev,
          cuisines: clickedContent === name ? "" : name,
          reset: false,
        };
      }
      return prev;
    });
  };

  return (
    <Container>
      <TitleWrapper>
        <Decor />
        <Title>{title}</Title>
      </TitleWrapper>
      <ContentWrapper>
        {content?.map((name) => (
          <Content
            key={name}
            style={{
              color:
                clickedContent === name && !reset ? "#032f05" : "orangered",
            }}
            onClick={() => onClick(name)}
          >
            {name}
          </Content>
        ))}
      </ContentWrapper>
    </Container>
  );
};

export default CategoryTemplate;
