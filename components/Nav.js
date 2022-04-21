import Link from "next/link";
import SidebarNav from "./SidebarNav";
import { useEffect, useState } from "react";
import styles from "../styles/nav.module.css";
import Image from "next/image";
import { tokenPrice } from "../components/web3/tokenprice";
import CheetahLogo from "../public/images/cheetah-logo.png";

const Nav = ({ setShowWallet, account, disconnectWallet }) => {
  const [button, setButton] = useState("Connect Wallet");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getPrice = async () => {
      let p = await tokenPrice();
      setPrice(p.priceInUSD.toFixed(5));
    };
    getPrice();
    const t = setInterval(getPrice, 10000);

    return () => clearInterval(t); // clear
  }, []);

  useEffect(() => {
    if (!account) {
      setButton("Connect Wallet");
      document.getElementById("walletButton").style.border =
        "2px solid var(--action-color)";
      document
        .getElementById("walletButton")
        .removeEventListener("click", disconnectWallet);
      document
        .getElementById("walletButton")
        .addEventListener("click", setShowWallet);
    } else {
      setButton("Disconnect");
      document
        .getElementById("walletButton")
        .removeEventListener("click", setShowWallet);
      document
        .getElementById("walletButton")
        .addEventListener("click", disconnectWallet);
    }
  }, [account]);


  return (
    <main>
      <div className={styles.mobileNav}>
        <SidebarNav
          setShowWallet={setShowWallet}
          account={account}
          disconnectWallet={disconnectWallet}
        />
      </div>
      <div className={styles.header}>
        <nav className={styles.navWrapper}>
          <div className={styles.navRight}>
            <div className={styles.logo}>
              <Link href="/">
                <Image src={CheetahLogo} height={50} width={50} />
              </Link>
            </div>
            <h2>Cheetah Finance</h2>
          </div>
          <div className={styles.navLeft}>
            <div className={styles.navListWrapper}>
              <div className={styles.navList}>
                <NavItem name="Home" link="/" dropdown={true} arrow={true}>
                  <Dropdown>
                    <DropdownItem
                      name="Angel Investors"
                      link="/#AngleInvestors"
                    />
                    <DropdownItem name="Roadmap" link="/#roadmap" />
                    <DropdownItem name="Auto Staking" link="/#AutoStaking" />
                    <DropdownItem name="Tokenomics" link="/#tokenomics" />
                    <DropdownItem name="NFT's" link="/#NFT" />
                  </Dropdown>
                </NavItem>
              </div>
              <div className={styles.navList}>
                <NavItem name="Docs" dropdown={true} arrow={true}>
                  <Dropdown>
                    <DropdownItem
                      name="Whitepaper"
                      link="/docs/whitepaper.pdf"
                    />
                    <DropdownItem name="Audit" link="#" />
                    <DropdownItem name="KYC" link="#" />
                  </Dropdown>
                </NavItem>
              </div>
              <div className={styles.navList}>
                <NavItem
                  name="Info"
                  link="/info"
                  dropdown={false}
                  arrow={false}
                />
              </div>
              <div className={styles.navList}>
                <NavItem
                  name="Team"
                  link="/team"
                  dropdown={false}
                  arrow={false}
                />
              </div>
            </div>
            <div className={styles.walletButtonWrapper}>
              <div id="walletButton" className={styles.walletButton}>
                {button}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
};

const NavItem = (props) => {
  return (
    <div>
      <div className={styles.navItem}>
        {props.link && (
          <Link href={props.link}>
            <div className={styles.navLink}> {props.name}</div>
          </Link>
        )}
        {!props.link && <div className={styles.navLink}> {props.name}</div>}
        {props.arrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={25}
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        )}
      </div>
      {props.dropdown && props.children}
    </div>
  );
};

const Dropdown = (props) => {
  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.dropdown}>{props.children}</div>
    </div>
  );
};

const DropdownItem = (props) => {
  return (
    <Link href={props.link}>
      <div className={styles.menuItem}>
        {props.icon && <div className={styles.iconWrapper}>{props.icon}</div>}
        {props.name}
      </div>
    </Link>
  );
};
export default Nav;
