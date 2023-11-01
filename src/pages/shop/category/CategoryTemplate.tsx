import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
const Content = styled(NavLink)`
  width: fit-content;
  color: orangered;
  text-decoration: none;
`;

interface ContentType {
  id: number;
  catName: any;
}
const CategoryTemplate = ({
  title,
  content,
}: {
  title: string;
  content: ContentType[];
}) => {
  return (
    <Container>
      <TitleWrapper>
        <Decor />
        <Title>{title}</Title>
      </TitleWrapper>
      <ContentWrapper>
        {content.map((el) => (
          <Content to={`shop/${el.id}`} key={el.id}>
            {el.catName}
          </Content>
        ))}
      </ContentWrapper>
    </Container>
  );
};

export default CategoryTemplate;
