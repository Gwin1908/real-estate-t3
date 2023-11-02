import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import Layout from "~/components/Layout/Layout";
import { PropertiesProvider } from "~/context/PropertiesContext";
import { api } from "~/utils/api";

import { Montserrat } from "next/font/google";
import "~/styles/globals.scss";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <PropertiesProvider>
        <main className={montserrat.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </PropertiesProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
