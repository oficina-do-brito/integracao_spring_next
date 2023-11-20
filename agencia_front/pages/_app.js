import "@/styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContextCardProvider from '@/context/useCards';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Header />
      <ContextCardProvider>
          <Component {...pageProps} />
      </ContextCardProvider>
      <Footer />
    </>
  );
}
