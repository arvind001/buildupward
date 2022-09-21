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
  width: 35%;
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

const ThresholdChart = () => {
  return (
    <Container>
      <Bar>
        <BarText>15,000 tCO2</BarText>
      </Bar>
      <ThresholdsContainer>
        <Threshold>
          <ThresholdText>Threshold 2035</ThresholdText>
          <ThresholdText>35,000 tCO2</ThresholdText>
          <ThresholdLine />
        </Threshold>
        <Threshold>
          <ThresholdText>Threshold 2030</ThresholdText>
          <ThresholdText>45,000 tCO2</ThresholdText>
          <ThresholdLine />
        </Threshold>
        <Threshold>
          <ThresholdText>Threshold 2024</ThresholdText>
          <ThresholdText>65,000 tCO2</ThresholdText>
          <ThresholdLine />
        </Threshold>
      </ThresholdsContainer>
    </Container>
  );
};

export default ThresholdChart;
