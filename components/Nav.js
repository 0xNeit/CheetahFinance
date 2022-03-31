import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/nav.module.css";
import { CgMenuRound } from "react-icons/cg";

const Nav = ({ handlerConnectWallet }) => {
  const [open, setOpen] = useState(true);


  useEffect(() => {
    if (window.location.pathname !== "/dapp") {
      document.getElementById("connectButton").style.display = "none";
      document.getElementById("dappButton").style.display = "flex";
      document.getElementById("connectButtonMobile").style.display = "none";
      document.getElementById("dappButtonMobile").style.display = "flex";
    } else {
      document.getElementById("dappButton").style.display = "none";
      document.getElementById("connectButton").style.display = "flex";
      document.getElementById("dappButtonMobile").style.display = "none";
      document.getElementById("connectButtonMobile").style.display = "flex";
    }
  });

  useEffect(() => {
    document.getElementById("connectButton").addEventListener("click", (e) => {
      handlerConnectWallet().then((label) => {
        document.getElementById("connectButton").innerText = label.label;
      });
    });
    document
      .getElementById("connectButtonMobile")
      .addEventListener("click", (e) => {
        handlerConnectWallet().then((label) => {
          document.getElementById("connectButtonMobile").innerText =
            label.label;
        });
      });
  }, []);

  useEffect(() => {
    if (open === true) {
      document.getElementById("menu").style.display = "none";
    } else {
      document.getElementById("menu").style.display = "flex";
    }
  }, [open]);

  return (
    <div>
      <div className={styles.mobileMenu}>
        <CgMenuRound
          onClick={() => setOpen(!open)}
          className={styles.hamburger}
          size="70px"
          color="#fff"
        ></CgMenuRound>
        <Link href="/dapp" passHref>
          <button id="dappButtonMobile" className={styles.headerButton}>
            PreSale
          </button>
        </Link>
        <Link href="/dapp" passHref>
          <button
            id="connectButtonMobile"
            onClick={handlerConnectWallet}
            className={styles.headerButton}
          >
            Connect
          </button>
        </Link>
        <ul
          id="menu"
          className={styles.mobileList}
          onClick={() => setOpen(!open)}
        >
          <li>
            <Link href="/" passHref>
              Home
            </Link>
          </li>
          <li>
            <Link href="/info" passHref>
              Info
            </Link>
          </li>
          <li>
            <Link href="/#tokenomics" passHref>
              Tokenomics
            </Link>
          </li>
          <li>
            <Link href="/#roadmap" passHref>
              Roadmap
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              Team
            </Link>
          </li>
        </ul>
      </div>
      <header className={styles.mainHeader}>
        <nav className={styles.mainNav}>
          <div className={styles.branding}>
            <img src="/images/cheetah-logo.png" className={styles.headerLogo} />
            <h2>Cheetah</h2>
          </div>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#roadmap" passHref>
                Roadmap
              </Link>
            </li>
            <li>
              <Link href="/#tokenomics" passHref>
                Tokenomics
              </Link>
            </li>
            <li>
              <Link href="/info" passHref>
                Info
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                Team
              </Link>
            </li>
            <li>
              <Link href="/dapp" passHref>
                <button id="dappButton" className={styles.headerButton}>
                  PreSale
                </button>
              </Link>
              <Link href="/dapp" passHref>
                <button
                  id="connectButton"
                  onClick={handlerConnectWallet}
                  className={styles.headerButton}
                >
                  Connect
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
