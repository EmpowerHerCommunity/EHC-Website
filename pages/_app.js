import '../styles/globals.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
  
// Client-side cache shared for the whole session 
// of the user in the browser.
  
const clientSideEmotionCache = createEmotionCache();
  
export default function MyApp(props) {
    const { Component, emotionCache = 
        clientSideEmotionCache, pageProps } = props;
  
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" 
                    content="width=device-width initial-scale=0.65" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;1,500&display=swap" rel="stylesheet" />
            </Head>
            <ThemeProvider theme={theme}>
                  
                {/* CssBaseline kickstart an elegant, 
                consistent, and simple baseline to
                build upon. */}
                  
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}
  
MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};