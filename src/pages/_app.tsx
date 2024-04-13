import { CartProvider } from "@/context/cartContext";
import { queryClient } from "@/lib/react-query";
import { GlobalStyles } from "@/styles/globalStyles";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </QueryClientProvider>

    </>
  );
}
