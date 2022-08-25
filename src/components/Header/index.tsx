import rocketImage from "../../assets/rocket.svg";
import { Moon, Sun } from "phosphor-react";
import { ButtonControlTheme, HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={rocketImage} alt="rocket symbol" />
      <h1>
        to<span>do</span>
      </h1>
      <ButtonControlTheme>
        <Sun size={32} />
        <Moon size={32} />
      </ButtonControlTheme>
    </HeaderContainer>
  );
}
