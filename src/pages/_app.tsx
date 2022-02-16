import type { AppProps } from "next/app";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
