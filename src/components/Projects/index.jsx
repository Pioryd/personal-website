import React from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";

import data from "./data";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    cardsContainer: {
      maxWidth: "100%",
      margin: "0 auto",
      [theme.breakpoints.up("sm")]: {
        maxWidth: "1000px"
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: "1400px"
      }
    },
    card: {
      direction: "column",
      justify: "center",
      alignItems: "center",
      padding: 20,
      margin: 0
    }
  })
);

export default function Projects() {
  const classes = useStyles();

  return (
    <Box className={classes.cardsContainer}>
      <Grid container xs={12}>
        {data.map((value) => (
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={6}
            xs={12}
            className={classes.card}
          >
            <ProjectCard data={value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
