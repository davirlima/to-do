import rocketImage from "../../assets/rocket.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={rocketImage} alt="rocket symbol" />
      <h1>
        to<span>do</span>
      </h1>
    </HeaderContainer>
  );
}
