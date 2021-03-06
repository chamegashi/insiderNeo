import "../src/styles/globals.css";
import "ui-neumorphism/dist/index.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
