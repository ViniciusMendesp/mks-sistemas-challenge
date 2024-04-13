"use client"

import { HomePage } from "@/components/pages/home";
import { Montserrat } from "next/font/google";
import Head from "next/head";


const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="MKS Front End Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.className}`}>
        <HomePage />
      </main>
    </>
  );
}
