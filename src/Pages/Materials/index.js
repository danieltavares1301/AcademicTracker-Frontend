import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  makeStyles,
  Typography,
  Avatar,
  Tab,
  Tabs,
} from "@material-ui/core";
import Books from "./Books";
import Articles from "./Articles";
import Videos from "./Videos";
import AppFooter from "../../Components/AppFooter";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0F0F0",
  },
}));

export default function Materials() {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  return (
    <Grid container>
      <Grid xs={1}></Grid>
      <Grid xs={10}>
        <Grid>
          <Tabs value={tab} onChange={handleChange} variant="fullWidth">
            <Tab label="Livros" />
            <Tab label="Artigos" />
            <Tab label="videos" />
          </Tabs>
          <TabPanel value={tab} index={0}>
            <Books />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Articles />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <Videos />
          </TabPanel>
        </Grid>
      </Grid>
      <Grid xs={1}></Grid>
    </Grid>
  );
}
