import React from "react";
import { ThemeProvider } from "styled-components";

interface IProps {
  children: JSX.Element;
  theme: Theme;
}

const Theme: React.FC<IProps> = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;
