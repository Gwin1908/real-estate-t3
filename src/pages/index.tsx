import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import { api } from "~/utils/api";
import Header from "~/components/Header";
import FirstPage from "./firstpage";
import Featured from "./featured";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

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
      </main>
      <AuthShowcase />
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
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
