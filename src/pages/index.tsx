import Head from "next/head";
import { Montserrat } from "next/font/google";
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
        <Footer />
      </main>
    </>
  );
}

