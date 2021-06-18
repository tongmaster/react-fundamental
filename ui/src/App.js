import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "./modules/ui/components/Layout";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(1, 2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
function App() {
  const classes = useStyles();
  return <Layout></Layout>;
}

export default App;
