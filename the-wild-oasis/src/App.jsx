import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: red;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Button variation="primary" size="large">
          Check In
        </Button>
        <Button variation="secondary" size="medium">
          Check Out
        </Button>
        <Heading as="h3">Dashboard</Heading>
      </StyledApp>
    </>
  );
}
export default App;
