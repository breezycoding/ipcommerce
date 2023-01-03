import "../styles/globals.css";
import { useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Provider } from "react-redux";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { config } from "../src/utils/reactQueryConfig";

import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import wrapper from "../store";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  // This ensures that data is not shared
  // between different users and requests
  const [queryClient] = useState(() => new QueryClient(config));
  const {
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
    ...rest
  } = props;

  const { store } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            {/* Hydrate query cache */}
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default MyApp;
