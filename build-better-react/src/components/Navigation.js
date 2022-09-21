import React from "react";
import styled from "styled-components";
import Home from "../assets/Home.svg";
import MyBuildings from "../assets/MyBuildings.svg";
import Plumbing from "../assets/Plumbing.svg";
import Search from "../assets/Search.svg";
import Microscope from "../assets/Microscope.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  margin-right: 40px;
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  z-index: 200;
`;

const Item = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const Img = styled.img`
  &:hover {
    fill: white;
  }
`;

const ItemName = styled.div`
  font-size: 16px;
`;

const Navigation = (props) => {
  const history = useNavigate();

  const goToPage = (page = "") => {
    history(`/${page}`);
  };

  return (
    <Container>
      <Item onClick={() => goToPage()}>
        <Img src={Home} />
        <ItemName>Home</ItemName>
      </Item>
      <Item onClick={() => goToPage("my-buildings")}>
        <Img src={MyBuildings} />
        <ItemName>My Buildings</ItemName>
      </Item>
      <Item onClick={() => goToPage("my-projects")}>
        <Img src={Plumbing} />
        <ItemName>My Projects</ItemName>
      </Item>
      <Item onClick={() => goToPage("all-solutions")}>
        <Img src={Search} />
        <ItemName>All Solutions</ItemName>
      </Item>
      <Item onClick={() => goToPage("knowledge")}>
        <Img src={Microscope} />
        <ItemName>Knowledge</ItemName>
      </Item>
    </Container>
  );
};

export default Navigation;
