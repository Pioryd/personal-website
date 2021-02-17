import React from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Top from "./Top";
import Projects from "./Projects";
import About from "./About";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "none"
    }
  })
);

export default function Page() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Grid container>
        <Top />
        <Projects />
        <About />
      </Grid>
    </main>
  );
}
