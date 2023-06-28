import GlobalStyle from "../styles";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <h1>The Lord Of The Ring </h1>
      <Component {...pageProps} />
    </>
  );
}
