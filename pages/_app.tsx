
import "../assets/main.css";
import { AppProps } from "next/app";
import { FC } from "react";
import { CookiesProvider } from "react-cookie";

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Layout>
        <CookiesProvider>
        <Component {...pageProps} />
    </CookiesProvider>
      </Layout>
  );
}

export default MyApp;
