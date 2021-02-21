import React from "react";
import clsx from "clsx";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Link,
  Typography,
  Chip,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: "300px",
      align: "none",
      margin: "0 auto",
      padding: 0
    },
    media: {
      width: "300px",
      height: "200px"
    },
    chip: {
      margin: theme.spacing(0.5),
      fontWeight: "bold"
    },
    "C++17": {
      backgroundColor: "#fff",
      border: "1px solid #3178c6",
      color: "#3178c6"
    },
    Python: {
      backgroundColor: "#3178c6",
      color: "#efd81d"
    },
    JavaScript: {
      backgroundColor: "#efd81d",
      color: "#000"
    },
    TypeScript: {
      backgroundColor: "#3178c6",
      color: "#fff"
    },
    React: {
      backgroundColor: "#282c34",
      color: "#5ed3f3"
    },
    "Node.js": {
      backgroundColor: "#026e00",
      color: "#fff"
    },
    defaultTool: {
      border: "1px solid",
      backgroundColor: "#ffffff",
      borderColor: theme.palette.primary.main
    },
    toolContainer: {
      paddingTop: "20px",
      marginBottom: "20px"
    },
    toolTitle: {
      textAlign: "center",
      color: "white",
      backgroundColor: theme.palette.primary.main
    },
    actionLink: {
      margin: "0 auto"
    }
  })
);

export default function ProjectCard({ data }) {
  const { title, photo, parts, demo, github } = data;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box style={{ borderBottom: "1px solid black" }}>
        <CardMedia className={classes.media} image={photo} title={title} />
      </Box>
      <CardContent>
        <Typography style={{ textAlign: "center" }} gutterBottom variant="h5">
          {title}
        </Typography>
        {parts.map(({ name, tools }) => (
          <Box className={classes.toolContainer}>
            <Typography
              className={classes.toolTitle}
              gutterBottom
              variant="subtitle1"
            >
              {name}
            </Typography>
            <div>
              {tools.map((tool) => (
                <Chip
                  className={clsx(
                    classes.chip,
                    classes[tool] || classes.defaultTool
                  )}
                  label={tool}
                />
              ))}
            </div>
          </Box>
        ))}
      </CardContent>

      <CardActions>
        {demo && (
          <Link href={demo} className={classes.actionLink}>
            <Button variant="contained" color="primary">
              DEMO
            </Button>
          </Link>
        )}
        {github && (
          <Link
            hidden={github == null}
            href={github}
            className={classes.actionLink}
          >
            <Button variant="contained" color="primary">
              Github
            </Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
