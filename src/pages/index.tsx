import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import { api } from "~/utils/api";
import Header from "~/components/Header/Header";
import FirstPage from "./firstpage";
import Featured from "./featured";
import Footer from "~/components/Footer/Footer";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  // const { data } = api.property.getAll.useQuery();

  // console.log(data)

  return (
    <>
      <Head>
        <title>Real Estate Agency Name</title>
        <meta name="description" content="Real esate agency from Odessa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={montserrat.className}>
        <Header />
        <FirstPage />
        <Featured />
        <AuthShowcase />
        <Footer />
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div>
      <p>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
