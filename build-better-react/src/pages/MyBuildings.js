import React, { useState } from "react";
import styled from "styled-components";
import BuildingCard from "../components/BuildingCard";
import { Img } from "../components/Navigation";
import Plus from "../assets/Plus.svg";
import Modal from "@mui/material/Modal";
import BuildingInputs from "../components/BuildingInputs";
import Box from "@mui/material/Box";
import { addBuilding } from "../actions/addBuilding";
import { connect } from "react-redux";

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

const MyBuildings = ({ addBuilding, buildings }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    addBuilding();
    setModalOpen(true);
  };

  return (
    <Container>
      {console.log("what is state", buildings)}
      <Header>
        <Title>My Buildings</Title>
        <AddBuildings onClick={openModal}>
          <Img src={Plus} />
          <ButtonText>New Building</ButtonText>
        </AddBuildings>
      </Header>
      <BuildingCard />
      <Modal open={modalOpen} onClose={closeModal}>
        <StyledBox>
          <BuildingInputs />
        </StyledBox>
      </Modal>
    </Container>
  );
};

export const mapStateToProps = (state) => {
  return {
    buildings: state,
  };
};

export const mapDispatchToProps = (dispatch) => ({
  addBuilding: () => dispatch(addBuilding("hello")),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyBuildings);
