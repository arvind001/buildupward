import React, { useState, useContext } from "react";
import styled from "styled-components";
import BuildingCard from "../components/BuildingCard";
import { Img } from "../components/Navigation";
import Plus from "../assets/Plus.svg";
import Modal from "@mui/material/Modal";
import BuildingInputs from "../components/BuildingInputs";
import Box from "@mui/material/Box";
import { store } from "../store/store";

const Container = styled.div`
  min-width: 840px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 30px 10px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
`;

const AddBuildings = styled.div`
  display: flex;
  border-radius: 30px;
  padding: 14px 24px;
  border: 2px solid black;
  gap: 16px;
  cursor: pointer;
`;

const ButtonText = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

const StyledBox = styled(Box)`
  background-color: white;
  width: max-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
`;

const MyBuildings = ({ buildings }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const gState = useContext(store);
  const { dispatch } = gState;
  const globalState = gState.state;

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <Container>
      <Header>
        <Title>My Buildings</Title>
        <AddBuildings onClick={openModal}>
          <Img src={Plus} />
          <ButtonText>New Building</ButtonText>
        </AddBuildings>
      </Header>
      {globalState.myBuildings.length > 0 &&
        globalState.myBuildings.map((building) => {
          return <BuildingCard building={building} />;
        })}
      {globalState.myBuildings.length === 0 && (
        <>{`Add buildings to get started`}</>
      )}
      {/* <BuildingCard /> */}
      <Modal open={modalOpen} onClose={closeModal}>
        <StyledBox>
          <BuildingInputs closeModal={closeModal} />
        </StyledBox>
      </Modal>
    </Container>
  );
};

export default MyBuildings;
