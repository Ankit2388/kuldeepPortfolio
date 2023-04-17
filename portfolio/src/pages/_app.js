import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Amiri, Roboto } from "next/font/google";
const amiri = Amiri({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --amiri-font: ${amiri.style.fontFamily};
          --roboto-font: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
