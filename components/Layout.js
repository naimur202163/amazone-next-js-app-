import React from 'react';
import Head from 'next/head';
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import NextLink from 'next/link';

import useStyles from '../utils/style';
export default function Layout({ title, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title> {title ? `${title}-Next Amazone` : 'Next Amazona'}</title>
      </Head>
      {/* Header */}
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" style={{ color: '#fff' }} passherf>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" style={{ color: '#fff' }} passherf>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        All right reseverd next amazone App
      </footer>
      {/* 32Min */}
    </div>
  );
}
