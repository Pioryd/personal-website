import React from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Avatar, Box, Typography, Link } from "@material-ui/core";
import { Email as EmailIcon, GitHub as GitHubIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    avatarBox: {
      marginTop: "50px",
      marginBottom: "20px",
      justifyContent: "center",
      display: "flex"
    },
    avatar: {
      height: "150px",
      width: "150px"
    },
    contactBox: {
      margin: 0,
      padding: 0,
      marginTop: "25px",
      paddingTop: "25px",
      paddingBottom: "25px",
      backgroundColor: "#000",
      color: "white",
      textAlign: "center"
    },
    contactGridContainer: {
      direction: "row",
      justify: "center",
      alignItems: "center",
      [theme.breakpoints.only("sm")]: {
        direction: "column"
      }
    },
    email: {
      float: "right",
      marginRight: "25px",
      [theme.breakpoints.down("sm")]: {
        float: "none",
        marginRight: "0px"
      }
    },
    github: {
      float: "left",
      marginLeft: "25px",
      [theme.breakpoints.down("sm")]: {
        float: "none",
        marginLeft: "0px"
      }
    }
  })
);

export default function Top() {
  const classes = useStyles();

  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Box className={classes.avatarBox}>
          <Avatar className={classes.avatar} src="photo.png" />
        </Box>
        <Typography align="center" variant="h5">
          Piotr Rydwański
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.contactBox}>
          <Grid container item className={classes.contact} xs={12}>
            <Grid item xs={12} md={6}>
              <Link href="mailto:pioryd123@gmail.com" color="inherit">
                <Typography className={classes.email} variant="h6">
                  <EmailIcon /> pioryd123@gmail.com
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <Link href="https://github.com/Pioryd" color="inherit">
                <Typography className={classes.github} variant="h6">
                  <GitHubIcon /> https://github.com/Pioryd
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
