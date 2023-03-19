import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <h1 className="text-3xl font-bold text-green-500">Hello world</h1>
      </main>
    </>
  );
}
