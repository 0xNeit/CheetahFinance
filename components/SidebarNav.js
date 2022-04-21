import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/sidebarNav.module.css";
import CheetahLogo from "../public/images/cheetah-logo.png";

const animationMenu = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
  transition: { type: "inertia", velocity: 50 },
};

const animationDropdown = {
  hidden: {
    opacity: 0,
    height: "0px",
  },
  visible: {
    opacity: 1,
    height: "auto",
  },
  exit: {
    opacity: 0,
    height: "0px",
    transition: {
      height: {
        delay: 0.2,
      },
    },
  },
};

const SidebarNav = ({ setShowWallet, account, disconnectWallet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const [button, setButton] = useState("Connect");

  useEffect(() => {
    if (!account) {
      setButton("Connect");
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
    <div>
      <div className={styles.header}>
        <div
          className={styles.menuWrapper}
          onClick={() => {
            setIsOpen(!isOpen);
            setIsDropdownOpen1(false);
            setIsDropdownOpen2(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height={20}
            width={20}
          >
            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
          </svg>
        </div>
        <div className={styles.logoWrapper}>
          <Image src={CheetahLogo} height={30} width={30} />
          <span>Cheetah Finance</span>
        </div>
        <div className={styles.walletButtonWrapper}>
          <div id="walletButton" className={styles.walletButton}>
            {button}
          </div>
        </div>
      </div>
      <motion.div
        variants={animationMenu}
        animate={isOpen ? "open" : "closed"}
        transition="transition"
        className={styles.sidebarWrapper}
      >
        <div className={styles.navListWrapper}>
          <div className={styles.navItemWrapper}>
            <NavItem
              name="Home"
              arrow={true}
              dropdown={true}
              function={() => setIsDropdownOpen1(!isDropdownOpen1)}
            >
              <AnimatePresence exitBeforeEnter>
                {isDropdownOpen1 && (
                  <motion.div
                    variants={animationDropdown}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Dropdown>
                      <DropdownItem
                        function={() => setIsOpen(false)}
                        name="Home"
                        link="/"
                      />
                      <DropdownItem
                        function={() => setIsOpen(false)}
                        name="Angel Investors"
                        link="/#AngleInvestors"
                      />
                      <DropdownItem
                        function={() => setIsOpen(false)}
                        name="Roadmap"
                        link="/#roadmap"
                      />
                      <DropdownItem
                        function={() => setIsOpen(false)}
                        name="Auto Staking"
                        link="/#AutoStaking"
                      />
                      <DropdownItem
                        function={() => setIsOpen(false)}
                        name="Tokenomics"
                        link="/#tokenomics"
                      />
                      <DropdownItem
                        function={() => setIsOpen(false)}
                        name="NFT's"
                        link="/#NFT"
                      />
                    </Dropdown>
                  </motion.div>
                )}
              </AnimatePresence>
            </NavItem>
          </div>
          <div className={styles.navItemWrapper}>
            <NavItem
              name="Docs"
              arrow={true}
              dropdown={true}
              function={() => setIsDropdownOpen2(!isDropdownOpen2)}
            >
              <AnimatePresence exitBeforeEnter>
                {isDropdownOpen2 && (
                  <motion.div
                    variants={animationDropdown}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Dropdown>
                      <DropdownItem
                        function={() => setIsOpen(false)}
                        name="Whitepaper"
                        link="/docs/whitepaper.pdf"
                      />
                      <DropdownItem
                        function={() => setIsOpen(false)}
                        name="Audit"
                        link="#"
                      />
                      <DropdownItem
                        function={() => setIsOpen(false)}
                        name="KYC"
                        link="#"
                      />
                    </Dropdown>
                  </motion.div>
                )}
              </AnimatePresence>
            </NavItem>
          </div>
          <div className={styles.navItemWrapper}>
            <NavItem name="Info" link="/info" dropdown={false} arrow={false} />
          </div>
          <div className={styles.navItemWrapper}>
            <NavItem name="Team" link="/team" dropdown={false} arrow={false} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const NavItem = (props) => {
  return (
    <div>
      <div className={styles.navItem} onClick={props.function}>
        {props.link && (
          <Link href={props.link}>
            <div className={styles.navLink}>{props.name}</div>
          </Link>
        )}
        {!props.link && <div className={styles.navLink}> {props.name}</div>}
        {props.arrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={35}
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
      <div onClick={props.function} className={styles.menuItem}>
        {props.name}
      </div>
    </Link>
  );
};

export default SidebarNav;
