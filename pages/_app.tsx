
import "../assets/main.css";
import { AppProps } from "next/app";
import { FC, useState } from "react";
import { CookiesProvider } from "react-cookie";
import { createContext } from "react";
import { Layout } from "components/ui";
import axios from "axios";

export const UserContext = createContext({})

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;



  return (
    <UserContext.Provider value={"MIYA"} >
    <Layout>
        <CookiesProvider>
        <Component {...pageProps} />
    </CookiesProvider>
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;


export async function getServerSideProps(context) {
  const res = await axios.get("http://localhost:9000/car-body-number");
  const carData = await res.data;
  return {
    props: {
      carData,
    },
  };
}