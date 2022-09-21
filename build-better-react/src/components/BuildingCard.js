import React from "react";
import styled from "styled-components";
import Edit from "../assets/Edit.svg";
import { Img } from "../components/Navigation";
import PieColorful from "./PieChart";

const Container = styled.div`
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.15);
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Address = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const EditButton = styled.div`
  display: flex;
  gap: 8px;
  background-color: #3958ff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const EditButtonText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const DataRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 25px 0;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const DataHeader = styled.div`
  font-size: 20px;
  font-weoght: 400;
  color: rgba(0, 0, 0, 0.5);
`;

const DataValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: black;
`;

const Charts = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const BuildingCard = ({ building }) => {
  return (
    <Container>
      <Header>
        <Address>241 10th St</Address>
        <EditButton>
          <Img src={Edit} />
          <EditButtonText>Edit</EditButtonText>
        </EditButton>
      </Header>
      <DataRow>
        <Data>
          <DataHeader>Annual Energy Cost</DataHeader>
          <DataValue>$ 13,200,324</DataValue>
        </Data>
        <Data>
          <DataHeader>Total Carbon Emissions</DataHeader>
          <DataValue>55,000 tCO2</DataValue>
        </Data>
        <Data>
          <DataHeader>Energy Use Intensity</DataHeader>
          <DataValue>0.01234</DataValue>
        </Data>
      </DataRow>
      <Charts>
        <PieColorful />
        <PieColorful />
      </Charts>
    </Container>
  );
};

export default BuildingCard;
