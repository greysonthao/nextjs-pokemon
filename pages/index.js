/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Appbar from "../components/Appbar";
import { Grid, Item, Box, Paper, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

export default function Home() {
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
      );
      setPokemon(await response.json());
    }

    getPokemon();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  let pokemonElements = pokemon.map((pokemon) => {
    return (
      <Grid item xs={12} sm={6} md={3} key={pokemon.name}>
        <Item>
          <Typography variant="h5" marginBottom={1}>
            {pokemon.name}
          </Typography>

          <img
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt=""
            width="150"
            height="150"
          />
        </Item>
      </Grid>
    );
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon V2</title>
      </Head>
      <Appbar />
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            marginTop: 3,
          }}
        >
          <Grid container spacing={2}>
            {pokemonElements}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
