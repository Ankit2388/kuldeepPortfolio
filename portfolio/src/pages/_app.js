import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";

// config.autoAddCss = false;
// library.add(fab, fas, far);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
