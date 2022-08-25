import styled from "styled-components";

export const TaskContainer = styled.div`
  position: relative;

  margin-top: 1.5rem;
  padding: 1rem;
  width: 100%;

  background-color: var(--gray-500);
  border: 1px solid var(--gray-400);
  border-radius: 8px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem;

  input {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    opacity: 0;
  }

  span {
    margin: calc((1.5rem - 1.090625rem) / 2);
    width: 1.090625rem;
    height: 1.090625rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid var(--blue);
    border-radius: 100%;

    transition: border, background-color, 0.3s;

    .checkIcon {
      color: var(--gray-100);
      font-size: 80%;
      visibility: hidden;
    }
  }

  input:not(checked):hover ~ span {
    border: 2px solid var(--blue-dark);
    background-color: var(--blue-dark-opacity);
  }

  input:checked ~ span {
    border: 2px solid var(--purple-dark);
    background-color: var(--purple-dark);
  }

  input:checked:hover ~ span {
    border: 2px solid var(--purple);
    background-color: var(--purple);
  }

  input:checked ~ span .checkIcon {
    visibility: visible;
  }

  label {
    color: var(--gray-100);
    font-size: 0.875rem;
    text-align: left;
    line-height: 1.4;
    max-height: 39.5rem;
  }

  input:checked ~ label {
    text-decoration: line-through;
    color: var(--gray-300);
  }

  button {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: auto;

    background-color: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-300);
    transition: background-color, color, 0.3s;

    &:hover {
      color: var(--danger);
      background-color: var(--gray-400);
    }
  }
`;
