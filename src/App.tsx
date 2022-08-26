import { SwitchContainer, Container } from "./App.styles";
import { Header } from "./components/Header";
import { TaskContainer } from "./components/TaskContainer";
import { GlobalStyle } from "./styles/global";

import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./styles/themes/dark";
import { Moon, Sun } from "phosphor-react";
import { useState } from "react";
import { LightTheme } from "./styles/themes/ligth";
import Switch from "react-switch";
import { Footer } from "./components/Footer";

export function App() {
  const [themeApplication, setThemeApplication] = useState(LightTheme);

  return (
    <ThemeProvider theme={themeApplication}>
      <GlobalStyle />

      <SwitchContainer>
        <Switch
          onChange={() => {
            setThemeApplication(
              themeApplication == DarkTheme ? LightTheme : DarkTheme
            );
          }}
          checked={themeApplication === DarkTheme}
          checkedIcon={<Sun size={25} color="#1a1a1a" />}
          uncheckedIcon={<Moon size={25} color="#dadada" />}
          onHandleColor="#1a1a1a"
          offColor="#1a1a1a"
          onColor="#dadada"
        />
      </SwitchContainer>

      <Header />

      <Container>
        <TaskContainer />
      </Container>

      <Footer theme={themeApplication.title} />
    </ThemeProvider>
  );
}
