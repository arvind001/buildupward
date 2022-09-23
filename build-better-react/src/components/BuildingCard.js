import React from "react";
import styled from "styled-components";
import Edit from "../assets/Edit.svg";
import { Img } from "../components/Navigation";
import PieColorful from "./PieChart";
import ThresholdChart from "./ThresholdChart";

const Container = styled.div`
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin: 35px 0;
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

const RowHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const FinesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const FinesTitle = styled.div`
  font-size: 20px;
  display: flex;
  align-self: flex-end;
`;

const Fines = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-evenly;
`;

const Fine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FineValue = styled.div`
  font-size: 20px;
`;

const RecommendButton = styled.div`
  padding: 18px 20px;
  background-color: #3958ff;
  border-radius: 5px;
  max-width: max-content;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 0 auto;
`;

const BuildingCard = ({ building }) => {
  return (
    <Container>
      <Header>
        <Address>{building.address}</Address>
        <EditButton>
          <Img src={Edit} />
          <EditButtonText>Edit</EditButtonText>
        </EditButton>
      </Header>
      <DataRow>
        <Data>
          <DataHeader>Annual Energy Cost</DataHeader>
          <DataValue>
            ${Number(building.annualEnergyCost).toLocaleString()}
          </DataValue>
        </Data>
        <Data>
          <DataHeader>Total Carbon Emissions</DataHeader>
          <DataValue>
            {Number(building.totalCarbonEmissions).toLocaleString()} tCO2
          </DataValue>
        </Data>
        <Data>
          <DataHeader>Energy Use Intensity</DataHeader>
          <DataValue>0.01234</DataValue>
        </Data>
      </DataRow>
      <Charts>
        <PieColorful data={building.energyTypes} />
        <PieColorful data={building.energyTypes} />
      </Charts>
      <RowHeader>Local Law 97 Fines</RowHeader>
      <ThresholdChart
        fines={building.LL97Fines}
        tce={building.totalCarbonEmissions}
      />
      <FinesContainer>
        <FinesTitle>Fines</FinesTitle>
        <Fines>
          <Fine>
            <FineValue>2024</FineValue>
            <FineValue>
              ${Number(building.LL97Fines.fines24).toLocaleString}
            </FineValue>
          </Fine>
          <Fine>
            <FineValue>2030</FineValue>
            <FineValue>
              ${Number(building.LL97Fines.fines30).toLocaleString()}
            </FineValue>
          </Fine>
          <Fine>
            <FineValue>2035</FineValue>
            <FineValue>
              ${Number(building.LL97Fines.fines35).toLocaleString()}
            </FineValue>
          </Fine>
        </Fines>
      </FinesContainer>
      <RecommendButton>Recommend Solutions</RecommendButton>
    </Container>
  );
};

export default BuildingCard;
