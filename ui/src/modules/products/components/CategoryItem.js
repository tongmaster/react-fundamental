import React from "react";
import { Grid, Chip } from "@material-ui/core";
import { useHistory, useRouteMatch } from "react-router-dom";
export default function CategoryItem({ title, Icon }) {
  const history = useHistory();
  const { path } = useRouteMatch();
  const filterProductsByCategory = () => {
    history.push(`${path}?category=${title}`);
  };
  return (
    <Grid item onClick={filterProductsByCategory}>
      <Chip icon={<Icon />} label={title} clickable color="primary"></Chip>
    </Grid>
  );
}
