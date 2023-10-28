import Head from "next/head";
import FirstPage from "../components/Firstpage/FirstPage";
import Featured from "../components/Featured/Featured";

export default function Home() {
  return (
    <>
      <Head>
        <title>Real Estate Agency Name</title>
        <meta name="description" content="Real esate agency from Odessa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstPage />
      <Featured />
    </>
  );
}
