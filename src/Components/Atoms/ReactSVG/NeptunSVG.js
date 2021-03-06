import React from "react";
import styles from "./Planets.module.css";

const NeptunSVG = ({ clicked, changeClicked }) => {
  return (
    <svg
      onClick={changeClicked}
      className={clicked ? styles.neptunClicked : styles.neptun}
      viewBox="0 0 57 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Neptun">
        <circle id="Ellipse 10" cx="32" cy="30" r="24.5" stroke="white" />
        <path
          id="Vector 5"
          d="M8.5 36L29.5 10L17 42L43 41L40 49.5L53.5 40L39 8L31.5 55L13.5 16.5L53.5 20.5L10.5 39.5L22.5 51.5L55.5 27.5L27.5 6.5L8.5 26L56 33L16 48.5"
          stroke="white"
          stroke-width="0.5"
        />
        <g id="MecanicSatelite" className={styles.neptunSatelite}>
          <rect
            id="Rectangle 4"
            width="4.10887"
            height="2.17735"
            transform="matrix(0.692529 0.72139 -0.729332 0.684159 3.05847 1.43887)"
            fill="white"
          />
          <rect
            id="Rectangle 6"
            width="1.49285"
            height="0.743808"
            transform="matrix(-0.70753 0.706683 -0.71481 -0.699319 3.13123 4.54398)"
            fill="white"
          />
          <rect
            id="Rectangle 14"
            width="1.49285"
            height="0.743808"
            transform="matrix(-0.70753 0.706683 -0.71481 -0.699319 5.4458 2.07495)"
            fill="white"
          />
          <rect
            id="Rectangle 8"
            width="2.02571"
            height="0.207064"
            transform="matrix(-0.717294 -0.69677 0.70501 -0.709197 2.22473 6.22266)"
            fill="white"
          />
          <rect
            id="Rectangle 16"
            width="2.02571"
            height="0.207064"
            transform="matrix(-0.717294 -0.69677 0.70501 -0.709197 1.45312 7.00003)"
            fill="white"
          />
          <rect
            id="Rectangle 15"
            width="2.83363"
            height="0.207064"
            transform="matrix(-0.717294 -0.69677 0.70501 -0.709197 2.03259 6.78558)"
            fill="white"
          />
          <rect
            id="Rectangle 17"
            width="2.02571"
            height="0.207064"
            transform="matrix(-0.717294 -0.69677 0.70501 -0.709197 6.85413 1.55835)"
            fill="white"
          />
          <rect
            id="Rectangle 18"
            width="2.02571"
            height="0.207064"
            transform="matrix(-0.717294 -0.69677 0.70501 -0.709197 6.08252 2.33572)"
            fill="white"
          />
          <rect
            id="Rectangle 19"
            width="2.83363"
            height="0.207064"
            transform="matrix(-0.717294 -0.69677 0.70501 -0.709197 6.66211 2.12125)"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};

export default NeptunSVG;
