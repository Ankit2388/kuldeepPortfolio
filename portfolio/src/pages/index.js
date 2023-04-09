import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
// library.add(fab, fas, far);
// import "../fontawesome.js";
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        {/* <h1
          style={{ height: "calc(100vh - 4rem)" }}
          className="text-3xl font-bold text-green-500"
        >
          Hello world
        </h1> */}
        {/* <Image src="/KD.jpg" alt="My Image" width={500} height={500} /> */}
      </main>
    </>
  );
}
