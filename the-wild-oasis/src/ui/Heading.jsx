import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 40px;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 30px;
      font-weight: 6 00;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 15px;
      font-weight: 500;
    `}
  text-color: var(--color-brand-600);
`;
export default Heading;
