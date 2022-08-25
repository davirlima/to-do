import styled from "styled-components";

import { DarkTheme } from "../styles/themes/dark";

type ThemeType = typeof DarkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
