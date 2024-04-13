import { GlobalStyles } from "@/styles/globalStyles";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <GlobalStyles />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
