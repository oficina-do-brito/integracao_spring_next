import "@/styles/globals.css";
import "@/styles/styles.css";
import "@/styles/card.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
