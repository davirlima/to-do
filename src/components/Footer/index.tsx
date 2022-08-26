import mySymbolWhite from "../../assets/mySymbolWhite.svg";
import mySymbolDark from "../../assets/mySymbolDark.svg";
import { FooterContainer } from "./styles";

interface FooterProps {
  theme: string;
}

export function Footer({ theme }: FooterProps) {
  return (
    <FooterContainer>
      <a href="https://github.com/davirlima" target="_blank">
        <img src={theme === "lightTheme" ? mySymbolDark : mySymbolWhite} />
      </a>
    </FooterContainer>
  );
}
