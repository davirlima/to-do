import styled from "styled-components";

export const Container = styled.main`
  max-width: 46rem;
  margin: 0 auto;
  padding: 0 1rem 1rem 1rem;
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
  color: #f2f2f2;

  transition: opacity, 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
