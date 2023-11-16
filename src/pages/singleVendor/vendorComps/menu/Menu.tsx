import styled from "styled-components";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import MainCourses from "./MainCourses";
import SideDishes from "./SideDishes";
import MenuHeaderTemplate from "./MenuHeader";

const label = { inputProps: { "aria-label": "Color switch demo" } };

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  padding: 15px;
`;

const MenuHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const MenuSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Switcher = styled.span`
  font-size: 24px;
`;
const Menu = () => {
  const [setMenu, setSetMenu] = useState(true);
  return (
    <Container>
      <MenuHeaderWrapper>
        <MenuHeaderTemplate title="menu" />
        <MenuSwitcher>
          <Switcher>Main Courses</Switcher>
          <Switch
            {...label}
            defaultChecked
            color="default"
            sx={{
              transform: "scale(2)",
            }}
            onClick={() => setSetMenu((prev) => !prev)}
          />
          <Switcher>Side Dishes</Switcher>
        </MenuSwitcher>
      </MenuHeaderWrapper>
      {setMenu ? <MainCourses /> : <SideDishes />}
    </Container>
  );
};

export default Menu;
