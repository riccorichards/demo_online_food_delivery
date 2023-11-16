import { TbMenuOrder } from "react-icons/tb";
import styled from "styled-components";
import { useState } from "react";
import MenuHandler from "./MenuHandler";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineReddit,
} from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { SlSocialVkontakte } from "react-icons/sl";
import { useAppSelector } from "../../../../redux/hook";
import { mobileDevice } from "../../../../responsive";

const Container = styled.div`
  position: absolute;
  width: 300px;
  height: 350px;
  top: 10%;
  right: 5%;
  border-radius: 15px;
  padding: 15px;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  ${mobileDevice({ width: "280px", right: "4.9%" })}
`;

const MenuWrapper = styled.div`
  box-shadow: 0 0 1.5px rgba(205, 205, 205, 0.35);
  border-radius: 15px;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const MenuTitle = styled.span`
  font-size: 28px;
  color: #fff;
  flex: 4;
  margin-left: 15px;
`;

const MenuController = styled.div`
  flex: 1.5;
  background-color: orangered;
  height: 100%;
  border-radius: 0 15px 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const MenuIcon = styled(TbMenuOrder)`
  font-size: 24px;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25vh;
  border-radius: 15px;
  gap: 15px;
`;

const ToOurEmail = styled.div`
  width: 100%;
  height: 5vh;
  border-bottom: 0.5px solid rgba(205, 205, 205, 1);
  display: flex;
  align-items: center;
  color: #fff;
  gap: 15px;
`;

const OurEmail = styled.input`
  border: 1px solid;
  border-radius: 15px;
  background-color: transparent;
  padding: 15px;
  font-family: "Playpen Sans", "cursive";
  color: #fff;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: 1px solid;
  border-radius: 15px;
  background-color: transparent;
  padding: 15px;
  font-family: "Playpen Sans", "cursive";
  color: #fff;
  align-self: flex-end;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

const Socials = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { vendorById } = useAppSelector((state) => state.vendor);

  return (
    <Container>
      <MenuWrapper>
        <MenuTitle>Menu</MenuTitle>
        <MenuController>
          <MenuIcon onClick={() => setIsOpenMenu((prev) => !prev)} />
          {isOpenMenu && <MenuHandler />}
        </MenuController>
      </MenuWrapper>
      <ContactWrapper>
        <ToOurEmail>
          <span>To:</span>
          <span>{vendorById?.email}</span>
        </ToOurEmail>
        <OurEmail placeholder="example@gmail.com" />
        <Button>Send</Button>
      </ContactWrapper>
      <Socials>
        <IconWrapper>
          <AiOutlineFacebook style={{ fontSize: "24px" }} />
        </IconWrapper>
        <IconWrapper>
          <AiOutlineInstagram style={{ fontSize: "24px" }} />
        </IconWrapper>
        <IconWrapper>
          <CiTwitter style={{ fontSize: "24px" }} />
        </IconWrapper>
        <IconWrapper>
          <SlSocialVkontakte style={{ fontSize: "24px" }} />
        </IconWrapper>
        <IconWrapper>
          <AiOutlineReddit style={{ fontSize: "24px" }} />
        </IconWrapper>
      </Socials>
    </Container>
  );
};

export default Menu;
