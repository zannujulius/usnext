import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function Home() {
  return (
    <div className={styles.homecover}>
      <div className={styles.homenavlink}>
        <div className={styles.homenavlinkcover}>
          <HiArrowNarrowLeft
            size={15}
            color={"dodgerblue"}
            className="arrowleft"
          />
        </div>
        <div className={styles.homenavlinktext}>podglad sprawy</div>
      </div>
      <div className={styles.homecontent}>
        <div className={styles.hometopcontent}>
          <div className={styles.hometopcontenttitle}>
            Umowa na dosatarczeine cementu
          </div>
        </div>
      </div>
    </div>
  );
}
