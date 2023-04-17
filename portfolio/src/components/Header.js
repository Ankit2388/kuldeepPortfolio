import React from "react";

import styles from "@/styles/Home.module.css";

export const Header = () => {
  return (
    <section className="md:mt-20 mt-8">
      <span
        className={`md:text-7xl text-4xl text-black capitalize font-bold text-center flex justify-center ${styles.amiri_font}`}
      >
        Kuldeep Patel
      </span>
      <span
        className={`md:text-7xl text-4xl text-black capitalize font-bold text-center flex justify-center md:mt-8 mt-4 ${styles.amiri_font}`}
      >
        UI/UX Interaction Designer
      </span>
      <span
        className={`md:text-7xl text-4xl text-black capitalize font-bold text-center flex justify-center md:mt-8 mt-4 ${styles.amiri_font}`}
      >
        Based in India
      </span>
    </section>
  );
};
