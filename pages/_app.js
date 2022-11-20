import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
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
