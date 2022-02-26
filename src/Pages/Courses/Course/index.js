import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  makeStyles,
  Typography,
  Avatar,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import { Rating, Stack } from "@mui/material";
import api from "../../../Services/api";

import { Build } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0F0F0",
  },
  headerCourse: {
    backgroundColor: "#fff",
  },
  img: {
    margin: theme.spacing(3),
  },
  description: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(0, 3, 3),
  },
  rating: {
    marginTop: theme.spacing(1),
  },
  ratingGrid: {
    margin: theme.spacing(3),
  },
  ratingBox: {
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(3),
  },
  detailsGrid: {
    margin: theme.spacing(3),
  },
  detailsCard: {
    margin: theme.spacing(2),
  },
  detailsTyp: {
    margin: theme.spacing(2),
  },
  userComment: {
    margin: theme.spacing(2),
  },
  picUserComment: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(4),
  },
  nameUserComment: {
    margin: theme.spacing(2),
  },
  comment: {
    margin: theme.spacing(0, 0, 2, 2),
  },
  avatar: {
    height: "60px",
    width: "60px",
  },
  ratingUser: {
    marginLeft: theme.spacing(2),
  },
}));

export default function CompleteInfoMaterial() {
  const classes = useStyles();
  const [datas, setDatas] = useState();

  useEffect(() => {
    async function loadDatas() {
      const response = await api
        .get(`/course/id?id=${localStorage.getItem("course")}`)
        .then((res) => {
          setDatas(res.data);
          console.log(datas);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    loadDatas();
  }, []);

  return (
    <Grid className={classes.root} container>
      <Grid xs={1}></Grid>
      <Grid xs={10}>
        {[datas]?.map((info) => (
          <div key={info && info._id ? info._id : null}>
            <Card>
              <Grid container className={classes.headerCourse}>
                <Grid xs={3} className={classes.img}>
                  <Box>
                    <img
                      style={{ width: "100%" }}
                      src={info && info.thumb ? info.thumb : null}
                    />
                  </Box>
                  <Typography variant="h5" color="textPrimary">
                    {info && info.tittle ? info.tittle : null}
                  </Typography>

                  <Typography variant="h6" color="textSecondary">
                    {info && info.duration ? info.duration : null} -{" "}
                    {info && info.classes ? info.classes : null} aulas
                  </Typography>

                  <Typography variant="h6" color="textSecondary">
                    {info && info.author ? info.author : null}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    Curso - {info && info.genre ? info.genre : null}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {info && info.provider ? info.provider : null}
                  </Typography>
                </Grid>
                <Grid xs={7} className={classes.description}>
                  <Typography variant="h6">
                    {info && info.description ? info.description : null}
                  </Typography>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    endIcon={<FavoriteIcon />}
                    className={classes.button}
                  >
                    Adicionar a lista
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.button}
                    href={info && info.url ? info.url : null}
                  >
                    Acessar
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<CommentIcon />}
                    className={classes.button}
                  >
                    Adicionar avaliação
                  </Button>
                </Grid>
              </Grid>
            </Card>
            {info && info.details ? (
              <Grid container>
                <Grid xs={3} className={classes.ratingGrid}>
                  <Box className={classes.ratingBox}>
                    <Typography variant="h1">
                      {info && info.rating ? info.rating : null}
                    </Typography>
                    <Rating
                      name="half-rating-read"
                      defaultValue={
                        info && info.rating ? parseFloat(info.rating) : null
                      }
                      precision={0.5}
                      size="large"
                      readOnly
                    />
                  </Box>
                </Grid>
                <Grid xs={7} className={classes.detailsGrid}>
                  <Card className={classes.detailsCard}>
                    <Typography variant="h6" className={classes.detailsTyp}>
                      {info.details}
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            ) : (
              <Grid
                className={classes.ratingGrid}
                justifyContent="center"
                alignItems="center"
              >
                <Box className={classes.ratingBox}>
                  <Typography variant="h1">
                    {info && info.rating ? info.rating : null}
                  </Typography>
                  <Rating
                    name="half-rating-read"
                    defaultValue={
                      info && info.rating ? parseFloat(info.rating) : null
                    }
                    precision={0.5}
                    size="large"
                    readOnly
                  />
                </Box>
              </Grid>
            )}
            <Grid xs={8}>
              {info?.comments.map((item) => (
                <div>
                  {item.id ? (
                    <>
                      <Card
                        key={item && item.id ? item.id : null}
                        className={classes.userComment}
                      >
                        <Grid container alignItems="center">
                          <Grid xs={1} className={classes.picUserComment}>
                            <Avatar className={classes.avatar}>
                              {item && item.user ? item.user[0] : null}
                            </Avatar>
                          </Grid>
                          <Grid xs={8} className={classes.nameUserComment}>
                            <Typography variant="h6">
                              {item && item.user ? item.user : null}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Rating
                          name="half-rating-read"
                          defaultValue={
                            item && item.avaliation
                              ? parseFloat(item.avaliation)
                              : null
                          }
                          precision={0.5}
                          size="small"
                          readOnly
                          className={classes.ratingUser}
                        />
                        <Typography className={classes.comment}>
                          {item && item.comment ? item.comment : null}
                        </Typography>
                      </Card>
                    </>
                  ) : (
                    <Typography variant="h6">
                      Curso ainda não possui comentários.
                    </Typography>
                  )}
                </div>
              ))}
            </Grid>
          </div>
        ))}
      </Grid>
      <Grid xs={1}></Grid>
    </Grid>
  );
}
