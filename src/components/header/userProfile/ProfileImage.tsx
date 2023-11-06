import styled from "styled-components";

const url =
  "https://i.pinimg.com/564x/49/34/13/49341348c72031411c1db23d071032df.jpg";
const Container = styled.div``;

const ImageWrapper = styled.div`
  width: 25px;
  height: 25px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const ProfileImage = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={url} />
      </ImageWrapper>
    </Container>
  );
};

export default ProfileImage;
