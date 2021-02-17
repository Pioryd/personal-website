import React from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "#000",
      color: "#fff",
      margin: 0,
      padding: 0,
      paddingLeft: "25px",
      paddingRight: "25px",
      paddingTop: "20px",
      paddingBottom: "100px",
      width: "100%"
    }
  })
);

export default function Top() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Typography
          style={{ textAlign: "center", paddingBottom: "40px" }}
          variant="h2"
          gutterBottom
        >
          Hi,
        </Typography>
        <Typography variant="h6" gutterBottom>
          I'm Piotr Rydwański, currently i'm interesting in technologies like
          JavaScript, TypeScript, React, Node.js.
        </Typography>
        <Typography variant="h6" gutterBottom>
          I have also 6 years experience of commercial programing in (C++,
          Windows Forms, PHP, MySql).
        </Typography>
      </Box>
    </Box>
  );
}
