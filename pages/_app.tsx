import '../styles/globals.css'
import type {AppContext,AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import {theme} from "../theme";
import {CacheProvider} from "@emotion/react";
import createEmotionCache from "../createEmotionCache";
import {EmotionCache} from "@emotion/cache/dist/emotion-cache.cjs";
import {store} from "../redux/store";
import {Provider} from "react-redux";
import App from "next/app";
import parser from "ua-parser-js";
import mediaQuery from "css-mediaquery";
import {createTheme} from "@mui/material/styles";

const clientSideEmotionCache = createEmotionCache();

function MyApp({Component, pageProps, emotionCache = clientSideEmotionCache, userAgent}: AppProps & {
  emotionCache: EmotionCache;
  userAgent?: string;
}) {

  // UAからデバイスの種類を判定(判定出来なければdesktop)
  const deviceType = parser(userAgent).device.type || "desktop";
  const ssrMatchMedia = (query: string) => ({
    matches: mediaQuery.match(query, {
      // deviceTypeがmobileならウィンドウ幅0px, desktopなら1024pxで仮判定
      width: deviceType === "mobile" ? "0px" : "1024px",
    }),
  });

  const theme = createTheme({
    components: {
      MuiUseMediaQuery: {
        defaultProps: {
          ssrMatchMedia,
        },
      },
    },
  })

  return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </CacheProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return {
    ...appProps,
    userAgent: appContext.ctx.req?.headers?.["user-agent"],
  }
}

export default MyApp;