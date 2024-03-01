import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: green;
`;

const StyledApp = styled.div`
  background-color: red;
  padding: 8px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello World</H1>
        <Button>Check In</Button>
      </StyledApp>
    </>
  );
}
export default App;
