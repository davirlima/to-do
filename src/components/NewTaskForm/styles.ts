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

    background-color: var(--gray-500);
    border: 1px solid var(--gray-700);
    border-radius: 8px;
    color: var(--gray-300);

    &:focus {
      outline: none;
      border: 1px solid var(--purple-dark);
      color: var(--gray-100);
    }
  }

  button {
    padding: 1rem;

    color: var(--gray-100);
    font: 0.875rem;
    font-weight: 700;

    background-color: var(--blue-dark);
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
      background-color: var(--blue);
    }
  }
`;
