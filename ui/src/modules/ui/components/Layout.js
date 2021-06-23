import React, { useEffect } from "react";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline, useMediaQuery } from "@material-ui/core";

import Header from "./Header";
import Content from "./Content";
import { useDispatch, useSelector } from "react-redux";
import { setDarkModeRequest } from "../uiSlice";
export default function Layout() {
  const dispatch = useDispatch();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const darkMode = useSelector((state) => state.ui.darkMode);

  useEffect(() => {
    dispatch(setDarkModeRequest(prefersDarkMode));
  }, [prefersDarkMode, dispatch]);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#1abc9c",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <Content></Content>
    </ThemeProvider>
  );
}
