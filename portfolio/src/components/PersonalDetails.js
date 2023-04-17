import React from "react";
import styles from "@/styles/Home.module.css";

export const PersonalDetails = () => {
  return (
    <section className={`mt-[150px]`}>
      <div class=" grid md:grid-cols-5 sm:grid-cols-1 md:gap-4">
        <div className={`bg-red-200 `}>
          <div className="flex-col flex">
            <span
              className={`text-[14px] capitalize ${styles.roboto_font} text-black`}
            >
              BIOGRAPHY
            </span>
            <span
              className={`text-[24px] mt-12 capitalize ${styles.amiri_font} font-bold text-black`}
            >
              Work for money and design for love! I’m Bruno, an UI/UX
              Interaction Designer based in India.
            </span>
          </div>
          {/*  */}
          <div className="flex-col flex mt-[75px]">
            <span
              className={`text-[14px] capitalize ${styles.roboto_font} text-black`}
            >
              CONTACT
            </span>
            <span
              className={`text-[24px] mt-12 capitalize ${styles.amiri_font} font-bold text-black`}
            >
              India, Gujarat
            </span>
            <span
              className={`text-[16px]  capitalize ${styles.amiri_font} font-bold text-black`}
            >
              info.kuldeepdesigner@gmail.com
            </span>
            <span
              className={`text-[24px]  capitalize ${styles.amiri_font} font-bold text-black`}
            >
              +91 8238577723
            </span>
          </div>
          {/*  */}
          <div className="flex-col flex mt-[75px]">
            <span
              className={`text-[14px] capitalize ${styles.roboto_font} text-black`}
            >
              SERVICES
            </span>
            <span
              className={`text-[24px] mt-12 capitalize ${styles.amiri_font} font-bold text-black`}
            >
              Website Design Mobile Application Design Animation.
            </span>
          </div>
        </div>
        <div className={`bg-red-300 md:col-start-2 md:col-span-3`}>2</div>
        <div className={`bg-red-400`}>3</div>
      </div>
    </section>
  );
};
