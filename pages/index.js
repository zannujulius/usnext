import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Line } from "react-chartjs-2";
import { BsBookmark, BsFillReplyFill, BsThreeDots } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";
import LineChart from "../components/LineChart";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function Home() {
  const twojData = [
    {
      title: "kraj",
      caption: "Polska",
    },
    {
      title: "nip",
      caption: "643 967 94 40",
    },
    {
      title: "Nazwa firmy",
      caption: "Janbudoplex Sp. z o.o",
    },
    {
      title: "region",
      caption: "53212123",
    },
    {
      title: "KRS",
      caption: "000012718",
    },
    {
      title: "wojewodztwo",
      caption: "Mazowieckie",
    },
    {
      title: "Kod pocztowy",
      caption: "023512718",
    },
  ];
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

        <div className={"hr-divider"}> </div>
        <div className="tagi-container">
          <div className="tagi-title">Tagi</div>
          <div className="tagi-caption__cover">
            <div className="tagi-caption__text">#Wierzytelnosci</div>
            <div className="tagi-caption__icon">
              <div className="tagi-icon">
                <IoClose
                  size={16}
                  style={{
                    fill: "tomato",
                  }}
                />
              </div>
              <div className="tagi-icon">
                <MdCheckCircle
                  size={16}
                  style={{
                    fill: "#0183d0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={"hr-divider"}> </div>
        <div className="twoj-container">
          <div className="towj-title">Twoj Kontrahent</div>
          <div className="twoj-content__cover">
            {twojData.map((item, i) => (
              <div className="twoj-item" key={i}>
                <div className="twoj-title__text">{item.title}</div>
                <div className="twoj-content">{item.caption}</div>
              </div>
            ))}
          </div>
          <div className="bottom-title__cover">
            <div className="bottom-icon">
              <MdCheckCircle
                size={16}
                style={{
                  fill: "#15c040",
                }}
              />
            </div>
            <div className="bottom-title">
              Wykupiles raport o tymkontranhecie
            </div>
            <div className="bottom-tag">Zobacz raport</div>
          </div>
        </div>
        <div className={"hr-divider"}> </div>
      </div>
    </div>
  );
}
