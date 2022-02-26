import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Button,
  Typography,
  Grid,
  Card,
  CardActionArea,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import api from "../../../Services/api";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
    margin: theme.spacing(3),
  },
  ButtonAdd: {
    marginTop: theme.spacing(4),
  },
  card: {
    width: "330px",
    height: "250px",
  },
  gridInfos: {
    width: "330px",
    height: "250px",
    marginLeft: theme.spacing(1),
  },
  img: {
    margin: theme.spacing(1),
  },
  info: {},
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  link: {
    color: theme.palette.link.main,
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(4),
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

export default function Books() {
  const classes = useStyles();
  const theme = useTheme();
  const [data, setDatas] = useState([]);

  useEffect(() => {
    async function loadDatas() {
      const response = await api
        .get("/materiais")
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
    <div>
      <Grid container>
        <Grid item xs={10}>
          <h1>Todos os Livros</h1>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={classes.ButtonAdd}
            startIcon={<AddCircleIcon />}
            href={"/Materials/AddNewMaterial"}
          >
            Adicionar novo
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {data.map(function (item) {
          if (item.type == "livro") {
            return (
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <CardActionArea
                  href={`/Materiais/${item._id}`}
                  onClick={() => localStorage.setItem("material", item._id)}
                >
                  <Card className={classes.card}>
                    <Grid container className={classes.card}>
                      <Grid item xs={6}>
                        <img
                          style={{ width: "100%", height: "100%" }}
                          src={item.thumb}
                        />
                      </Grid>
                      <Grid item xs={5} className={classes.gridInfos}>
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
                          variant="body2"
                          color="textSecondary"
                        >
                          {item.genre}
                        </Typography>{" "}
                      </Grid>
                    </Grid>
                  </Card>
                </CardActionArea>
              </Grid>
            );
          } else {
            <Typography variant="h3">Nenhum livro</Typography>;
          }
        })}
      </Grid>
    </div>
  );
}
