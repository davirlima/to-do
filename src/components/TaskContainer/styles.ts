import styled from "styled-components";

export const TasksContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 4rem;
  text-align: center;
`;

export const InformationAboutTasks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    font-size: 0.875rem;
    font-weight: 700;
  }

  span {
    margin-left: 0.5rem;

    padding: 0.125rem 0.5rem;
    background-color: ${(props) => props.theme.gray_400};
    border-radius: 999px;

    font-size: 0.75rem;
    color: ${(props) => props.theme.gray_200};
  }

  .createdTasks {
    color: ${(props) => props.theme.blue};
  }

  .concludedTasks {
    color: ${(props) => props.theme.purple};
  }
`;

export const DefaultInformationContainer = styled.div`
  margin-top: 1.5rem;
  padding: 4rem 1.5rem;
  border-top: 1px solid ${(props) => props.theme.gray_400};
  border-radius: 8px;

  .icon {
    color: ${(props) => props.theme.gray_400};
  }

  h2 {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }
`;
