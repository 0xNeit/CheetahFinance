import styles from "../styles/team.module.css";
import { motion } from "framer-motion";
const Team = () => {
  return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    className={styles.main}>
      <div className="container">
        <div className={styles.divider}>
          <span></span>
          <h3>Co-Leads</h3>
          <span></span>
        </div>
        <div className={styles.cardRow}>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={`${styles.cardFront} ${styles.selfmade}`}>
                <div className={styles.teamIntro}>
                  <h2>Selfmade - Fredrik Rafn</h2>
                  <h2>CTO and Co-Lead</h2>
                </div>
              </div>
              <div className={styles.cardBack}>
                <ul>
                  <li>
                    Grossed Multiple 7 Figures From Reverse Engineering, Team
                    Management And Investing.
                  </li>
                  <li>
                    Quit his job in December 2021 to pursue the
                    crypto-development world full-time.
                  </li>
                  <li>
                    Have been doing reverse engineering, pen-testing and other
                    forms of whitehat hacking for 5 years.
                  </li>
                  <li>
                    Owned his first crypto asset in 2014, been trading ever
                    since.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={`${styles.cardFront} ${styles.guru}`}>
                <div className={styles.teamIntro}>
                  <h2>Guru</h2>
                  <h2>CEO and Co-Lead</h2>
                </div>
              </div>
              <div className={styles.cardBack}>
                <ul>
                  <li>
                    Ex-Investment Banker, who decided to peruse his career in
                    crypto whilst investing into real life Business ventures.
                  </li>
                  <li>
                    Shares his Financial expertise to advise teams on best
                    sustainable economics models for the long term growth.
                  </li>
                  <li>
                    Proficient in solidity, marketing and business management.
                  </li>
                  <li>
                    Got into Crypto in 2017, had 30 bitcoins but sold for 10,000
                    pizza, also pumps degens 1000x in his free time..
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider}>
          <span></span>
          <h3>Moderators</h3>
          <span></span>
        </div>
        <div className={styles.cardRow}>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={`${styles.cardFront} ${styles.wario}`}>
                <div className={styles.teamIntro}>
                  <h2>Wario</h2>
                  <h2>Social Media Manager & Mod</h2>
                </div>
              </div>
              <div className={styles.cardBack}>
                <ul>
                  <li>Wario, because I only take W’s.</li>
                  <li>Experienced Social Media Manager.</li>
                  <li>
                    Professional Reddit marketer for multi-million dollar
                    projects.
                  </li>
                  <li>Full-time engineer IRL.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={`${styles.cardFront} ${styles.roclips}`}>
                <div className={styles.teamIntro}>
                  <h2>Roclips - Ronan</h2>
                  <h2>Social Media Manager & Mod</h2>
                </div>
              </div>
              <div className={styles.cardBack}>
                <ul>
                  <li>
                    A true CS:GO fanatic, went from casual gaming to blockchain
                    gaming!
                  </li>
                  <li>
                    Has worked for multiple different high-end restaurants;
                    shaping his working attitude.
                  </li>
                  <li>
                    First enrolled into TeamOdds with Puli, currently starring
                    as our Community Lead.
                  </li>
                  <li>
                    He’s been on Discord ever since he was young, having made
                    multiple servers for large companies!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider}>
          <span></span>
          <h3>GFX Specalist</h3>
          <span></span>
        </div>
        <div className={styles.cardRow}>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={`${styles.cardFront} ${styles.jesse}`}>
                <div className={styles.teamIntro}>
                  <h2>FlamorCreates - Jesse Lubbers</h2>
                  <h2>Graphics & Motion Designer</h2>
                </div>
              </div>
              <div className={styles.cardBack}>
                <ul>
                  <li>Graphic and motion designer from The Netherlands.</li>
                  <li>
                    Started his design carreer off in the Esports and gaming
                    industry, he was able to build up a strong portfolio and
                    worked with some of the biggest brands in that space
                    (Samsung, Phillips, BIGclan, GODSENT).
                  </li>
                  <li>
                    Later went on a journey in the Web3 space where he worked
                    with brands like Voxies (Binance campaign), Shiburai, Refi
                    and many more.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={`${styles.cardFront} ${styles.rowvisuals}`}>
                <div className={styles.teamIntro}>
                  <h2>RowVisuals</h2>
                  <h2>Graphics & Motion Designer</h2>
                </div>
              </div>
              <div className={styles.cardBack}>
                <ul>
                  <li>6 years of professional experience in design.</li>
                  <li>Masters degree in business design innovation.</li>
                  <li>Worked with a global client base.</li>
                  <li>Process optimisation advocate and practitioner.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
