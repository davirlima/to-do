import styled from "styled-components";

export const TaskContainer = styled.div`
  position: relative;

  margin-top: 1.5rem;
  padding: 1rem;
  width: 100%;

  background-color: ${(props) => props.theme.gray_500};
  border: 1px solid ${(props) => props.theme.gray_400};
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

    border: 2px solid ${(props) => props.theme.blue};
    border-radius: 100%;

    transition: border, background-color, 0.3s;

    .checkIcon {
      color: ${(props) => props.theme.gray_100};
      font-size: 80%;
      visibility: hidden;
    }
  }

  input:not(checked):hover ~ span {
    border: 2px solid ${(props) => props.theme.blue_dark};
    background-color: ${(props) => props.theme.blue_dark_opacity};
  }

  input:checked ~ span {
    border: 2px solid ${(props) => props.theme.purple_dark};
    background-color: ${(props) => props.theme.purple_dark};
  }

  input:checked:hover ~ span {
    border: 2px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme.purple};
  }

  input:checked ~ span .checkIcon {
    visibility: visible;
  }

  label {
    color: ${(props) => props.theme.gray_100};
    font-size: 0.875rem;
    text-align: left;
    line-height: 1.4;
    max-height: 39.5rem;
  }

  input:checked ~ label {
    text-decoration: line-through;
    color: ${(props) => props.theme.gray_300};
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
    color: ${(props) => props.theme.gray_300};
    transition: background-color, color, 0.3s;

    &:hover {
      color: ${(props) => props.theme.danger};
      background-color: ${(props) => props.theme.gray_400};
    }
  }
`;
