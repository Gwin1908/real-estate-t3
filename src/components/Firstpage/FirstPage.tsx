import { julius } from "~/pages/_app";
import styles from "../../styles/FirstPage.module.scss";

function FirstPage() {
  return (
    <section className={styles.firstPage + " " + julius.className}>
      <div className={styles.title}>
        <h1 className={styles.title__header}>Agency Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          voluptatibus?
        </p>
        <div className={styles.keyFrases}>
          <div className={styles.keyFrase}>Key Frase</div>
          <div className={styles.keyFrase}>Key Frase</div>
          <div className={styles.keyFrase}>Key Frase</div>
        </div>
      </div>

      <svg
        id="scroll-me"
        className={styles.scrollMe}
        data-anchor="properties"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 76 130"
        preserveAspectRatio="xMidYMid meet"
        // tabIndex="-1"
      >
        <g fill="none" fillRule="evenodd">
          <rect
            width="70"
            height="118"
            x="1.5"
            y="1.5"
            stroke="#FFF"
            strokeWidth="3"
            rx="36"
          ></rect>
          <circle
            className={styles.scroll}
            cx="36.5"
            cy="31.5"
            r="7"
            fill="#FFF"
          ></circle>
        </g>
      </svg>
    </section>
  );
}

export default FirstPage;
