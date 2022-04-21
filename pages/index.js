import styles from "../styles/index.module.css";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import rocket from "../public/images/rocket.json";
import genius from "../public/images/genius.json";
import arrow from "../public/images/arrow.json";
import angel from "../public/images/angel.json";
import wallet from "../public/images/wallet.json";
import lock from "../public/images/lock.json";
import total from "../public/images/total.json";
import Modal from "../components/Modal";
import { addTokenFunction } from "../components/web3/wallets/metamaskfunctions/metamask";

const Home = () => {
  function copyEmail() {
    /* Copy the text inside the text field */
    navigator.clipboard.writeText("info@CheetahFinance.io");
  }
  function copyContract() {
    /* Copy the text inside the text field */
    navigator.clipboard.writeText("0xEA620a491111bF54db6B702ee9F6Df6fE539967d");
  }

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1.5],
        type: "seek",
        frames: [0, 180],
      },
    ],
  };

  useEffect(() => {
    var countDownDate = new Date("April 21, 2022 20:00:00");

    const x = setInterval(function () {
      // Get today's date and time
      var now = new Date();
      var nowUTC = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );
      // Find the distance between now and the count down date
      var distance = countDownDate - nowUTC;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Display the result in the element with id="demo"
      document.getElementById("timer").innerHTML =
        "Launch Timer:" +
        " " +
        days +
        "d " +
        hours +
        "h " +
        minutes +
        "m " +
        seconds +
        "s ";
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML =
          "Launch Timer: Buying is enabled!!!"
      }
    }, 1000);
  }, []);

  const [showBuy, setShowBuy] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Cheetah Finance</title>
        <meta name="keywords' content='bsc, staking, blockchain, cheetah, binance" />
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" href="/images/cheetah-logo.ico" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        {showAlert && (
          <Modal setShowModal={setShowAlert} showModal={showAlert}>
            <div className={styles.alertModal}>
              <h1>
                {" "}
                <span className={styles.redText}>!WARNING!</span> DO NOT BUY
                BEFORE THE TIMER HITS ZERO{" "}
                <span className={styles.redText}>!WARNING!</span>
              </h1>
              <h2 id="timer"></h2>
            </div>
          </Modal>
        )}
        {showBuy && (
          <Modal setShowModal={setShowBuy} showModal={showBuy}>
            <div className={styles.buyModal}>
              <div
                onClick={() => setShowBuy(false)}
                className={styles.modalItem}
              >
                <iframe
                  width="400"
                  height="610"
                  src="https://www.flooz.trade/embedded/0xEA620a491111bF54db6B702ee9F6Df6fE539967d/?backgroundColor=transparent&chainId=56"
                  title="Flooz Trade"
                  frameborder="0"
                  allow="clipboard-read; clipboard-write; web-share; accelerometer *; autoplay *; camera *; gyroscope *; payment *"
                >
                  {" "}
                </iframe>
              </div>
              <div
                onClick={() => setShowBuy(false)}
                className={styles.modalItem}
              ></div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
      <main className={styles.main}>
        <div className={styles.socialsBar}>
          <div className={styles.socialsBarWrapper}>
            <Link href="https://t.me/CheetahFinance">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
              </svg>
            </Link>
            <Link href={"https://twitter.com/CheetahBSC"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </Link>
            <svg
              onClick={() => {
                {
                  console.log("Email address coppied!");
                }
                {
                  copyEmail();
                }
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
            </svg>
            <Link href="https://www.reddit.com/r/CheetahFinance/" passHref>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z" />
              </svg>
            </Link>
          </div>
        </div>
        <section className={styles.mainContent}>
          <div className="container">
            <div className={styles.mainContentWrapper}>
              <div className={styles.imageBoxMain}>
                <div className={styles.featuresVideo}>
                  <video autoPlay muted loop>
                    <source src="/videos/WelcomeVideo.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className={styles.tokenInfo}>
                <h1>{"Cheetah Finance"}</h1>
                <div className={styles.infoWrapper}>
                  <p>
                    {
                      "Prepare yourselves for the new generation of DeFi. Auto-staking with an APY of 1,000,000,000%! x10,000,000 your investment in a year! 300 BNB pre-sale filled, but 0 allocated tokens. One of the very first fair launches with no presale dumpers or team tokens."
                    }
                  </p>
                  <div className={styles.buttonWrapperMain}>
                    <button onClick={() => setShowBuy(true)}>Buy</button>
                    <h3 onClick={addTokenFunction}>Import Cheetah</h3>
                    <h3
                      onClick={() => {
                        {
                          copyContract();
                        }
                        {
                          console.log("Contract copied to clipboard!");
                        }
                      }}
                    >
                      Contract
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="AngleInvestors" className={styles.features}>
          <div className="container">
            <div
              className={`${styles.featuresWrapper} ${styles.angelInvestors}`}
            >
              <div className={styles.featuresImage}>
                <img src="/images/angel-investors.jpg" alt="" />
              </div>
              <div className={styles.featuresInfoWrapper}>
                <div className={styles.featuresInfo}>
                  <h2>Angel Investors</h2>
                  <p>
                    Cheetah Finance will be different from other projects with
                    NO private sale and NO presale that allocates tokens to
                    investors. Without a presale, there will be no tokens
                    allocated before launch and resulting in more tokens
                    available in supply to achieve a high APY. The benefit of no
                    private/presale token allocations means no token dumps at
                    launch.
                  </p>
                  <div className={styles.buttonWrapper}>
                    <Link href="/info" passHref>
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="roadmap" className={styles.roadmap}>
          <div className={"container"}>
            <div className={styles.roadmapWrapper}>
              <h2>Roadmap</h2>
              <div className={styles.phaseOne}>
                <div>
                  <Lottie
                    animationData={rocket}
                    interactivity={interactivity}
                  />
                </div>
                <div className={styles.roadmapInfoWrapper}>
                  <div className={styles.roadmapInfo}>
                    <h3>Launch phase</h3>
                    <ul>
                      <li>
                        <strike>300 BNB ANGEL INVESTORS SALE</strike>
                      </li>
                      <li>NFT GENESIS SET PREVIEW AND PRESALE</li>
                      <li>
                        <strike>WEBSITE RELEASE</strike>
                      </li>
                      <li>LAUNCH XXXX MC</li>
                      <li>CMC CG APPLICATION</li>
                      <li>STANDARD KYC AND AUDIT</li>
                      <li>
                        <strike>TEAM DOX</strike>
                      </li>
                      <li>TELEGRAM CALLERS</li>
                      <li>AMA TOUR</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.phaseTwo}>
                <div className={styles.roadmapInfoWrapper}>
                  <div className={styles.roadmapInfo}>
                    <h3>Preying phase</h3>
                    <ul>
                      <li>NFT MINTING </li>
                      <li>SWAP DEVELOPMENT</li>
                      <li>CMC & CG LISTED</li>
                      <li>AGGRESSIVE MARKETING</li>
                      <li>NFT LAUNCHPAD FOR FUTURE SETS</li>
                      <li>P2E GAME TEASER</li>
                      <li>GIVEAWAYS</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Lottie animationData={arrow} interactivity={interactivity} />
                </div>
              </div>
              <div className={styles.phaseThree}>
                <div>
                  <Lottie
                    animationData={genius}
                    interactivity={interactivity}
                  />
                </div>
                <div className={styles.roadmapInfoWrapper}>
                  <div className={styles.roadmapInfo}>
                    <h3>Attack Phase</h3>
                    <ul>
                      <li>CERTIK AUDIT</li>
                      <li>NFT NEXT GENERATIONS RELEASED</li>
                      <li>NFT STAKING</li>
                      <li>P2E GAME RELEASE</li>
                      <li>LARGER GIVEAWAYS</li>
                      <li>CEX LISTINGS</li>
                      <li>METAVERSE</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="autostaking" className={styles.features}>
          <div className="container">
            <div className={`${styles.featuresWrapper} ${styles.autoStaking}`}>
              <div className={styles.featuresInfoWrapper}>
                <div className={styles.featuresInfo}>
                  <h2>Auto Staking</h2>
                  <p>
                    Cheetah finance will consist of an AutoStake feature; it is
                    a simple yet cutting-edge function called Buy-Hold-Earn,
                    that provides the ultimate ease of use for $CHEETAH holders.
                    Buy-Hold-Earn - By simply buying $CHEETAH and holding the
                    token in your wallet, you earn daily rebase with an APY of
                    1,000,000,000%. And thanks to the positive rebase function,
                    it is easily sustainable!
                  </p>
                  <Link href="/info" passHref>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
              <div className={styles.featuresImage}>
                <img src="/images/apy.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="tokenomics" className={styles.tokenomics}>
          <div className="container">
            <div className={styles.tokenomicsWrapper}>
              <h2>Tokenomics</h2>
              <div className={styles.tokenomicsInfo}>
                <h3>Blockchain: BEP-20</h3>
                <h3>Total Supply: 100,000,000</h3>
                <h3>TICKER: $CHEETAH</h3>
              </div>
              <div className={styles.taxWrapper}>
                <div className={styles.taxItems}>
                  <Lottie animationData={wallet} loop={true} />
                  <h3>8%</h3>
                  <p>Marketing</p>
                </div>
                <div className={styles.taxItems}>
                  <Lottie animationData={angel} loop={true} />
                  <h3>4%</h3>
                  <p>Angel Investors</p>
                </div>
                <div className={styles.taxItems}>
                  <Lottie animationData={lock} loop={true} />
                  <h3>3%</h3>
                  <p>Liquidity</p>
                </div>
                <div className={styles.taxItems}>
                  <Lottie animationData={total} loop={true} />
                  <h3>15%</h3>
                  <p>Total Buy/Sell</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="nfts" className={styles.features}>
          <div className="container">
            <div className={`${styles.featuresWrapper} ${styles.nfts}`}>
              <div className={styles.featuresImage}>
                <img src="/images/cheetah-nfts.png" alt="" />
              </div>
              <div className={styles.featuresInfoWrapper}>
                <div className={styles.featuresInfo}>
                  <h2>NFT’s</h2>
                  <p>
                    Our vision is to offer a deeply immersive metaverse in which
                    players will create virtual worlds and games collaboratively
                    and without central authority. We are aiming to disrupt the
                    existing game makers like Minecraft and Roblox by providing
                    creators true ownership of their creations as non-fungible
                    tokens (NFTs) and rewarding their participation with our
                    utility token; CHEETAH.
                  </p>
                  <Link href="/info" passHref>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};
export default Home;
