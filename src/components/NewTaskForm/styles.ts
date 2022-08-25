import styled from "styled-components";

export const FormContainer = styled.form`
  margin-top: -1.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 100%;
    padding: 1rem;
    background-color: ${(props) => props.theme.gray_500};
    border: 1px solid ${(props) => props.theme.gray_700};
    border-radius: 8px;
    color: ${(props) => props.theme.gray_300};

    &:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.purple_dark};
      color: ${(props) => props.theme.gray_100};
    }
  }

  button {
    padding: 1rem;

    color: #f2f2f2;
    font: 0.875rem;
    font-weight: 700;

    background-color: ${(props) => props.theme.blue_dark};
    transition: background-color, 0.5s;
    border: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:disabled {
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.blue};
    }
  }
`;
