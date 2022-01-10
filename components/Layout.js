import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/style';
export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazone APP</title>
      </Head>
      {/* Header */}
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>All right reseverd next amazone App</footer>
    </div>
  );
}
