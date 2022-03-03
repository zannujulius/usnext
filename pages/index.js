import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Line } from "react-chartjs-2";
import { BsBookmark, BsFillReplyFill, BsThreeDots } from "react-icons/bs";
import LineChart from "../components/LineChart";
import { RiErrorWarningLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className={styles.homecover}>
      <div className={styles.homenavlink}>
        <div className={styles.homenavlinkcover}>
          <HiArrowNarrowLeft
            size={15}
            color={"#0183d0"}
            style={{
              fill: "#0183d0",
            }}
          />
        </div>
        <div className={styles.homenavlinktext}>podglad sprawy</div>
      </div>
      <div className={styles.homecontent}>
        <div className={styles.hometopcontent}>
          <div
            style={{
              display: "flex",
              width: "fit-content",
              alignItems: "center",
            }}
          >
            <div className={styles.hometopcontenttitle}>
              Umowa na dosatarczeine cemen{" "}
            </div>
            <div
              style={{
                padding: "0 0 -10px 0",
                display: "inline-block",
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                padding: "0 0 0 5px",
              }}
            >
              <RiErrorWarningLine
                size={15}
                style={{
                  fill: "#0183d0",
                }}
              />
            </div>
          </div>

          <div className={styles.hometopicon}>
            <div className={styles.homeiconcover}>
              <BsBookmark
                size={17}
                style={{
                  fill: "#8d8d8d",
                }}
              />
            </div>
            <div className={styles.homeiconcover}>
              <BsFillReplyFill
                size={17}
                style={{
                  fill: "#8d8d8d",
                }}
              />
            </div>
            <div className={styles.homeiconcover}>
              <BsThreeDots
                size={17}
                style={{
                  fill: "#8d8d8d",
                }}
              />
            </div>
          </div>
        </div>
        <LineChart />
        <div className="chart-filter__item-cover">
          <div className="chart-filter__item">1H</div>
          <div className="chart-filter__item">1D</div>
          <div className="chart-filter__item active">1W</div>
          <div className="chart-filter__item">1M</div>
          <div className="chart-filter__item">1Y</div>
        </div>
      </div>
    </div>
  );
}
