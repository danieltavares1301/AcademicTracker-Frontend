import React from "react";
import {
  makeStyles,
  Button,
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
} from "@material-ui/core";

import api from "../../Services/api";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
    margin: theme.spacing(3),
  },
  image: {
    height: 170,
    width: "200",
    maxHeight: "100%",
  },
  info: {
    margin: theme.spacing(1),
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  link: {
    color: theme.palette.link.main,
    marginTop: theme.spacing(2),
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: "uppercase",
  },
}));

export default function Courses() {
  const classes = useStyles();

  const [data, setDatas] = useState([]);

  useEffect(() => {
    async function loadDatas() {
      const response = await api
        .get("/course")
        .then((res) => {
          setDatas(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    loadDatas();
  }, []);

  return (
    <div className={classes.root}>
      <h1>Todos os cursos</h1>
      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <CardActionArea
              href={`/Courses/${item._id}`}
              onClick={() => localStorage.setItem("course", item._id)}
            >
              <Card className={classes.card} key={item._id}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.thumb}
                    className={classes.image}
                  />
                  <Box className={classes.info}>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.author}
                    </Typography>
                    <Typography
                      display="block"
                      variant="body3"
                      color="textSecondary"
                    >
                      {item.genre}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
