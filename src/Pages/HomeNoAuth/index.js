import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  makeStyles,
  Typography,
  Avatar,
} from "@material-ui/core";
import AppFooter from "../../Components/AppFooter";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import { Rating, Stack } from "@mui/material";

import { Build } from "@material-ui/icons";
import Header from "../../Components/Header";
import HeaderNoAuth from "../../Components/HeaderNoAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0F0F0",
  },
  firstGrid: {
    marginTop: theme.spacing(1),
  },
  secondGrid: {
    margin: theme.spacing(4, 8),
  },
  othersGrid: {
    margin: theme.spacing(8, 8),
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
    marginTop: theme.spacing(2),
  },
  rating: {
    marginTop: theme.spacing(1),
  },
  ratingBox: {
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(3),
  },
  detailsGrid: {
    marginLeft: theme.spacing(11),
  },
  detailsCard: {
    margin: theme.spacing(2),
  },
  detailsTyp: {
    margin: theme.spacing(2),
  },
  detailsTyp2: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(4),
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

const curso = [
  {
    id: 1,
    title: "React Js do zero ao avançado na pratica",
    author: "Matheus Fraga",
    genre: "Programação",
    duration: "20:00",
    classes: 20,
    description:
      "Opa seja bem-vindo ao curso de React Js." +
      "\n" +
      "Neste curso irá descobrir o jeito mais moderno de desenvolver aplicações web e sistemas web, você vai aprender a criar aplicações completas do extremo zero e entendendo na prática como o React Js funciona. \nO Curso é para qualquer pessoa, desenvolvedores que querem crescer como programadores na área de desenvolvimento web. \nEntão mesmo que você ainda não saiba nada sobre programação e quer começar na area esse curso aqui também é pra você. Vamos aprender na pratica tudo desde o zero á configurar seu ambiente de trabalho e todo ecossistema, entender oque é o react e por que usamos ele, criar seus primeiros projetos e até aplicações completas. \nTemos como objetivo sempre passar boas praticas e métodos que são os mais usados e preparando você seja para o mercado de trabalho, ou apenas para criar seus próprios projetos.",
    details:
      "O que você aprenderá: \nVocê aprenderá criar aplicações com React Js do zero ao avançado. \nAprender a criar sistemas e aplicações de forma certa. \nSistemas completos com rotas, estados isolado, Componentes. \nDominar todo poder do React JS",
    image1: "/images/Descubra.jpg",
    image2: "/images/network.jpg",
    image3: "/images/oportunidades.png",
    comments: [
      {
        id: 1,
        user: "user123",
        avaliation: 4,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 2,
        user: "user123",
        avaliation: 4,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  },
];

export default function HomeNoAuth() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <HeaderNoAuth />
      <Grid xs={1}></Grid>
      <Grid xs={10} className={classes.firstGrid}>
        {curso.map((info) => (
          <div>
            <Card>
              <Grid container className={classes.headerCourse}>
                <Grid xs={4} className={classes.img}>
                  <Box>
                    <img style={{ width: "100%" }} src={info.image1} />
                  </Box>
                </Grid>
                <Grid xs={1} />
                <Grid xs={5} className={classes.description}>
                  <Typography variant="h3">
                    Descubra materiais de ensino.
                  </Typography>
                  <Typography variant="subtitle1">
                    Aqui você pode compartilhar e absorver informações sobre os
                    materiais de estudo nos quais você está utiliza ou pretende
                    utilizar nas principais plataformas de ensino.
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    size="large"
                    href="/signup"
                  >
                    Inscreva-se gratuitamente
                  </Button>
                </Grid>
              </Grid>
            </Card>
            <Grid container className={classes.secondGrid}>
              <Grid xs={3}>
                <img style={{ width: "100%" }} src={info.image2} />
              </Grid>
              <Grid xs={7} className={classes.detailsGrid}>
                <Typography variant="h4" className={classes.detailsTyp}>
                  Crie conexões com pessoas da comunidade científica de várias
                  partes do mundo.
                </Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.othersGrid}>
              <Grid xs={7}>
                <Typography variant="h4" className={classes.detailsTyp2}>
                  Descubra e compartilhe oportunidades de emprego, estágio,
                  bolsa de estudos, dentre outras vagas, com seus amigos.
                </Typography>
              </Grid>
              <Grid xs={3} className={classes.detailsGrid}>
                <img style={{ width: "100%" }} src={info.image3} />
              </Grid>
            </Grid>
          </div>
        ))}
        <AppFooter />
      </Grid>
      <Grid xs={1}></Grid>
    </Grid>
  );
}
