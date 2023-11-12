import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import Layout from "~/components/Layout/Layout";
import { PropertiesProvider } from "~/context/PropertiesContext";
import { api } from "~/utils/api";

import { Montserrat, Julius_Sans_One } from "next/font/google";
import "~/styles/globals.scss";

const montserrat = Montserrat({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const julius = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-julius",
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
