import Head from "next/head";
import styles from "../styles/Home.module.css";
import Section from "../components/section/Section";
import Header from "../components/header/Header";
import Services from "../components/Services/services";
import Footer from "../components/Footer/Footer";
import ContactInfo from "../components/ContactInfo/ContactInfo";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Grzegorz Pieetruszka Gabinet Lekarski"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Section backgroundColour={"yellow"}>Section component</Section>
        <Services />
        <ContactInfo />
        <Footer />
      </main>
    </div>
  );
}
