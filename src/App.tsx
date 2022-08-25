import { ButtonControlTheme, Container } from "./App.styles";
import { Header } from "./components/Header";
import { TaskContainer } from "./components/TaskContainer";
import { GlobalStyle } from "./styles/global";

import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./styles/themes/dark";
import { Moon, Sun } from "phosphor-react";
import { useState } from "react";
import { LightTheme } from "./styles/themes/ligth";

export function App() {
  const [themeApplication, setThemeApplication] = useState(DarkTheme);

  return (
    <ThemeProvider theme={themeApplication}>
      <GlobalStyle />

      <ButtonControlTheme>
        {themeApplication === DarkTheme ? (
          <Sun size={32} onClick={() => setThemeApplication(LightTheme)} />
        ) : (
          <Moon size={32} onClick={() => setThemeApplication(DarkTheme)} />
        )}
      </ButtonControlTheme>

      <Header />

      <Container>
        <TaskContainer />
      </Container>
    </ThemeProvider>
  );
}
