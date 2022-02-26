import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Grid,
  Card,
  Typography,
  Button,
  TextField,
  Link,
  MenuItem,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3),
  },
  tittle: {
    marginLeft: theme.spacing(33),
  },
  AddButton: {
    margin: theme.spacing(2, 0),
  },
  contentBody: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  form: {
    paddingLeft: 180,

    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  textField: {
    marginTop: theme.spacing(2),
  },
}));

const currencies = [
  {
    value: "Artigo",
  },
  {
    value: "Livro",
  },
  {
    value: "Vídeo",
  },
];
export default function AddNewMaterial() {
  const classes = useStyles();
  const [nome, setNome] = useState();
  const [image, setImage] = useState();
  const [autor, setAutor] = useState();
  const [link, setLink] = useState();
  const [genero, setGenero] = useState();
  const [descricao, setDescricao] = useState();
  const [detalhesM, setDetalhesM] = useState();

  const handleAddMaterial = async (e) => {
    e.preventDefault();
    await api
      .post("/user", {
        author: autor,
        title: nome,
        type_material: genero,
        year: "",
        url: link,
        descrição: descricao,
        detalhes: detalhesM,
      })
      .then(() => {
        console.log("cadastrado com sucesso");
        history.push("/signIn");
      })
      .catch((erro) => {
        console.log(erro);
        setError("Email já existente!");
      });
  };

  return (
    <Grid container className={classes.container}>
      <Grid xs={2}></Grid>
      <Grid xs={8}>
        <Card>
          <Typography variant="h4" className={classes.tittle}>
            Adicionar novo material
          </Typography>
          <div className={classes.contentBody}>
            <form className={classes.form} onSubmit={handleAddMaterial}>
              <TextField
                className={classes.textField}
                fullWidth
                label="Nome"
                name="Nome"
                onChange={(e) => setNome(e.target.value)}
                type="text"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                fullWidth
                label="URL da imagem"
                name="image"
                onChange={(e) => setImage(e.target.value)}
                type="text"
                variant="outlined"
              />

              <TextField
                className={classes.textField}
                fullWidth
                label="autor"
                name="autor"
                onChange={(e) => setAutor(e.target.value)}
                type="text"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                fullWidth
                label="Link onde encontra-se"
                name="Link"
                onChange={(e) => setLink(e.target.value)}
                type="text"
                variant="outlined"
              />
              <TextField
                select
                label="Gênero do material"
                className={classes.textField}
                onChange={(e) => setLink(e.target.value)}
                helperText="Por favor selecione um gênero"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                className={classes.textField}
                multiline
                rows={4}
                defaultValue="Escreva algo..."
                variant="outlined"
                label="Descrição"
                size="small"
                onChange={(e) => setDescricao(e.target.value)}
                style={{ width: "100%" }}
              />

              <TextField
                className={classes.textField}
                multiline
                rows={4}
                defaultValue="Escreva algo..."
                variant="outlined"
                label="Detalhes"
                size="small"
                onChange={(e) => setDetalhesM(e.target.value)}
                style={{ width: "100%" }}
              />

              <Button
                className={classes.AddButton}
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Adicionar
              </Button>
            </form>
          </div>
        </Card>
      </Grid>
      <Grid xs={2} />
    </Grid>
  );
}
