import { Header, NavBar, PersonalDetails } from "@/components";
// import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
// library.add(fab, fas, far);
// import "../fontawesome.js";
export default function Home() {
  return (
    <>
      <main className={`${styles.main} select-none`}>
        <NavBar />
        <div
          className="mt-20 mx-20 mb-[250px]"
          style={{ height: "calc(100vh - 5rem) " }}
        >
          <Header />
          <PersonalDetails />
        </div>
        {/* <h1
         
          className="text-3xl font-bold text-green-500"
        >
          Hello world
        </h1> */}
        {/* <Image src="/KD.jpg" alt="My Image" width={500} height={500} /> */}
      </main>
    </>
  );
}
