import styled from "styled-components";
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: green;
`;
const Button = styled.button`
  font-size: 20px;
  padding: 16px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: yellow;
  color: blue;
  margin: 8px;
`;
const StyledApp = styled.div`
  background-color: red;
  padding: 8px;
`;

function App() {
  return (
    <StyledApp>
      <H1>Hello World</H1>
      <Button>Check In</Button>
    </StyledApp>
  );
}
export default App;
