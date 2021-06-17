import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles({
//   root: {
//     padding: "16px",
//     backgroundColor: "blue",
//     color: "white",
//   },
// });
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
  return (
    <>
      <div className={classes.root}>hello</div>
    </>
  );
}

export default App;
