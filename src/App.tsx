import { Container } from "./App.styles";
import { Header } from "./components/Header";
import { TaskContainer } from "./components/TaskContainer";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Container>
        <TaskContainer />
      </Container>
    </div>
  );
}
