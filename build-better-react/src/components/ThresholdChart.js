import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 0 30px;
`;

const Threshold = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ThresholdLine = styled.div`
  width: 3px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ThresholdText = styled.div`
  font-size: 16px;
`;

const ThresholdsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  //   width: 60%;
  z-index: 200;
  gap: 100px;
`;

const Bar = styled.div`
  position: absolute;
  height: 30px;
  width: ${(props) => (props.size ? props.size : "0%")};
  background-color: red;
  top: 62%;
  left: 0;
  z-index: -1;
  //   text-align: center;
`;

const BarText = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  padding-left: 10px;
`;

const ThresholdChart = ({ fines, tce }) => {
  const calculateBarWidth = () => {
    if (tce <= fines.fines35) {
      return "20%";
    } else if (tce > fines.fines35 && tce <= fines.fines30) {
      return "35%";
    } else if (tce > fines.fines30 && fines <= fines.fine24) {
      return "60%";
    } else if (tce > fines.fines24) {
      return "85%";
    }
  };
  return (
    <Container>
      <Bar size={calculateBarWidth()}>
        <BarText>{Number(tce).toLocaleString()} tCO2</BarText>
      </Bar>
      <ThresholdsContainer>
        <Threshold>
          <ThresholdText>Threshold 2035</ThresholdText>
          <ThresholdText>
            {Number(fines.fines35).toLocaleString()} tCO2
          </ThresholdText>
          <ThresholdLine />
        </Threshold>
        <Threshold>
          <ThresholdText>Threshold 2030</ThresholdText>
          <ThresholdText>
            {Number(fines.fines30).toLocaleString()} tCO2
          </ThresholdText>
          <ThresholdLine />
        </Threshold>
        <Threshold>
          <ThresholdText>Threshold 2024</ThresholdText>
          <ThresholdText>
            {Number(fines.fines24).toLocaleString()} tCO2
          </ThresholdText>
          <ThresholdLine />
        </Threshold>
      </ThresholdsContainer>
    </Container>
  );
};

export default ThresholdChart;
