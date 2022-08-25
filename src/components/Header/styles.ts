import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--gray-700);
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
    color: var(--blue);
    font-size: 2.5rem;

    span {
      color: var(--purple-dark);
    }
  }
`;

export const ButtonControlTheme = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--gray-100);
`;
