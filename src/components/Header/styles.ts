import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.gray_700};
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.75rem;

  img {
    height: 2.25rem;
    width: 1.375rem;
  }

  h1 {
    font-weight: 900;
    /* color: var(--blue); */
    color: ${(props) => props.theme.blue};
    font-size: 2.5rem;

    span {
      /* color: var(--purple-dark); */
      color: ${(props) => props.theme.purple_dark};
    }
  }
`;
