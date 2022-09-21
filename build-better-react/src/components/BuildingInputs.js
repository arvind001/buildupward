import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { Flex } from "../styles/global";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { getCalculation } from "../api/getCalculation";

const Container = styled.div``;

const StyledSelect = styled(Select)`
  margin: 5px;
  width: 200px;
`;

const StyledTextField = styled(TextField)`
  margin: 5px !important;
  width: 200px;
`;

const BuildingInputs = (props) => {
  const [fields, setFields] = useState({
    buildingType: null,
    area: 0,
    electricity: 0,
    natGas: 0,
    steam: 0,
    fuelOil2: 0,
    fuelOil4: 0,
    kWh: 0,
    therm: 0,
    mLb: 0,
    gal2: 0,
    gal4: 0,
  });
  const [defaultValuesChecked, setDefaultValuesChecked] = useState(true);

  const handleSelectChange = (e) => {
    console.log("what is changing", e.target.value, e.target);
    setFields({
      ...fields,
      buildingType: e.target.value,
    });
  };

  const handleTextChange = (e, type) => {
    setFields({
      ...fields,
      [type]: e.target.value,
    });
  };

  const handleDefaultValuesCheck = () => {
    setDefaultValuesChecked(!defaultValuesChecked);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    let res = getCalculation({
      bldType: fields.buildingType,
      sqft: fields.area,
      steam: fields.steam,
      natGas: fields.natGas,
      electricity: fields.electricity,
      fuelOil2: fields.fuelOil2,
      fuelOil4: fields.fuelOil4,
    });
  };

  useEffect(() => {
    console.log("what is fields", fields);
  }, [fields]);

  useEffect(() => {
    if (defaultValuesChecked) {
      setFields({
        ...fields,
        kWh: 0.22,
        therm: 0.997,
        mLb: 35,
        gal2: 1.65,
        gal4: 1.65,
      });
    } else {
      setFields({
        ...fields,
        kWh: 0,
        therm: 0,
        mLb: 0,
        gal2: 0,
        gal4: 0,
      });
    }
  }, [defaultValuesChecked]);

  return (
    <Container>
      <Flex>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Building Type</InputLabel>
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={fields.buildingType}
            onChange={handleSelectChange}
            label="Building Type"
          >
            <MenuItem value={"A"}>A (Assembly)</MenuItem>
            <MenuItem value={"B"}>B (Business)</MenuItem>
            <MenuItem value={"BH"}>B (Healthcare)</MenuItem>
            <MenuItem value={"E"}>E (Educational)</MenuItem>
            <MenuItem value={"F"}>F (Factory/Industrial)</MenuItem>
            <MenuItem value={"H"}>H (High Hazard)</MenuItem>
            <MenuItem value={"I1"}>I-1 (Institutional)</MenuItem>
            <MenuItem value={"I2"}>I-2 (Institutional)</MenuItem>
            <MenuItem value={"I3"}>I-3 (Institutional)</MenuItem>
            <MenuItem value={"I4"}>I-4 (Institutional)</MenuItem>
            <MenuItem value={"M"}>M (Mercantile)</MenuItem>
            <MenuItem value={"R1"}>R-1 (Residential)</MenuItem>
            <MenuItem value={"R2"}>R-2 (Residential)</MenuItem>
            <MenuItem value={"S"}>S (Storage)</MenuItem>
            <MenuItem value={"U"}>U (Utility/Misc)</MenuItem>
          </StyledSelect>
        </FormControl>

        <StyledTextField
          id="outlined-basic"
          label="Area (SF)"
          variant="outlined"
          value={fields.area}
          onChange={(e) => handleTextChange(e, "area")}
        />
      </Flex>
      <FormControlLabel
        control={
          <Checkbox
            checked={defaultValuesChecked}
            onChange={handleDefaultValuesCheck}
          />
        }
        label="Default Rates"
        style={{ display: "flex" }}
      />
      <Flex>
        <StyledTextField
          id="outlined-basic"
          label="Electricity - kWh)"
          variant="outlined"
          value={fields.electricity}
          onChange={(e) => handleTextChange(e, "electricity")}
        />
        <StyledTextField
          id="outlined-basic"
          label="$/kWh"
          variant="outlined"
          value={fields.kWh}
          onChange={(e) => handleTextChange(e, "kWh")}
        />
      </Flex>
      <Flex>
        <StyledTextField
          id="outlined-basic"
          label="Natural Gas - therms"
          variant="outlined"
          value={fields.natGas}
          onChange={(e) => handleTextChange(e, "natGas")}
        />
        <StyledTextField
          id="outlined-basic"
          label="$/therm"
          variant="outlined"
          value={fields.therm}
          onChange={(e) => handleTextChange(e, "therm")}
        />
      </Flex>
      <Flex>
        <StyledTextField
          id="outlined-basic"
          label="Steam - mLbs"
          variant="outlined"
          value={fields.steam}
          onChange={(e) => handleTextChange(e, "steam")}
        />
        <StyledTextField
          id="outlined-basic"
          label="$/mLb"
          variant="outlined"
          value={fields.mLb}
          onChange={(e) => handleTextChange(e, "mLb")}
        />
      </Flex>
      <Flex>
        <StyledTextField
          id="outlined-basic"
          label="Fuel Oil 2 - gal"
          variant="outlined"
          value={fields.fuelOil2}
          onChange={(e) => handleTextChange(e, "fuelOil2")}
        />
        <StyledTextField
          id="outlined-basic"
          label="$/gal"
          variant="outlined"
          value={fields.gal2}
          onChange={(e) => handleTextChange(e, "gal2")}
        />
      </Flex>
      <Flex>
        <StyledTextField
          id="outlined-basic"
          label="Fuel Oil 4 - gal"
          variant="outlined"
          value={fields.fuelOil4}
          onChange={(e) => handleTextChange(e, "fuelOil4")}
        />
        <StyledTextField
          id="outlined-basic"
          label="$/gal"
          variant="outlined"
          value={fields.gal4}
          onChange={(e) => handleTextChange(e, "gal4")}
        />
      </Flex>

      <Button
        variant="contained"
        style={{ display: "flex" }}
        onClick={handleCalculate}
      >
        Calculate
      </Button>
    </Container>
  );
};

export default BuildingInputs;
