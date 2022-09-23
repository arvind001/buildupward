import logo from "./logo.svg";
import "./App.css";
import BuildingInputs from "./components/BuildingInputs";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import MyBuildings from "./pages/MyBuildings";
import { StateProvider } from "./store/store";

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  max-width: 1100px;
`;

const PageContainer = styled.div``;

function App() {
  return (
    <BrowserRouter>
      <StateProvider>
        <Container>
          <Navigation />

          <Routes>
            <Route path="/" element={<BuildingInputs />} />
            <Route path="/my-buildings" element={<MyBuildings />} />
          </Routes>
          {/* <BuildingInputs /> */}
        </Container>
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
