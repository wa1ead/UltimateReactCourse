import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 1.2rem, 3.2rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
`;

function Sidebar() {
  return <StyledSidebar>SIDEBAR</StyledSidebar>;
}
export default Sidebar;
