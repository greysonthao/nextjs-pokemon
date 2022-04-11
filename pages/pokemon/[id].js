/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Details.module.css";
import Appbar from "../../components/Appbar";
import {
  Grid,
  Link,
  Item,
  Box,
  Paper,
  Container,
  Typography,
} from "@mui/material";
import Table from "../../components/Table";

export default function Details() {
  const {
    query: { id },
  } = useRouter();

  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
      );
      setPokemon(await response.json());
    }

    if (id) {
      getPokemon();
    }
  }, [id]);

  if (!pokemon) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <Appbar />
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          marginTop={2}
        >
          {pokemon.name}
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            marginTop: 3,
            marginBottom: 5,
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={0}
                sx={{
                  textAlign: "center",
                }}
              >
                <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                  width="200"
                  height="200"
                />
              </Paper>
              <Typography variant="body1" textAlign="center" marginTop={1}>
                {pokemon.type.join(", ")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Table pokemon={pokemon} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
