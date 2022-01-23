
import "../assets/main.css";
import { AppProps } from "next/app";
import { FC, useState } from "react";
import { CookiesProvider } from "react-cookie";
import { createContext } from "react";

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
