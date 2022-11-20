import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <meta name='keywords' content='fyxren portfolio personal' />
        <meta name='language' content='EN' />
        <meta name='robots' content='index,follow' />
        <meta name='author' content='Fyxren' />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;