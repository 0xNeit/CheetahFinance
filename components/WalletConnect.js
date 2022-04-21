import React from "react";
import styles from "../styles/walletconnect.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import MetaMaskIcon from "../public/images/MetaMask.png";
import BinanceIcon from "../public/images/Binance.png";
import TrustWalletIcon from "../public/images/TrustWallet.png";
import WalletConnectIcon from "../public/images/WalletConnect.png";

const WalletConnect = (props) => {
  const injectedWallet = async () => {
    const injected = await props.connectInjectedWallet();
    props.setWeb3(injected.web3);
    props.setAccount(injected.account);
  };
  const binanceWallet = async () => {
    const binance = await props.connectBinanceWallet();
    props.setWeb3(binance.web3);
    props.setAccount(binance.account);
  };
  const walletConnect = async () => {
    const wallet = await props.connectWalletConnect();
    document.getElementsByClassName(
      "walletconnect-modal__base"
    ).style.fontSize = "5rem";

    props.setWeb3(wallet.web3);
    props.setAccount(wallet.account);
  };

  const animationBackground = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  const animationModal = {
    hidden: {
      scale: 2,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  const animationWallets = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <main>
      {props.showWallet && (
        <motion.div
          variants={animationBackground}
          style={{ position: "relative", zIndex: "100000" }}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <main
            className={styles.main}
            onClick={() => props.setShowWallet(false)}
          >
            <motion.div
              variants={animationModal}
              initial="hidden"
              animate="visible"
              exit="exit"
              id="popUp"
              className={styles.popupWrapper}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.popupHeader}>
                <h2>Choose Wallet</h2>
              </div>
              <div className={styles.walletsBackground}>
                <motion.div
                  variants={animationWallets}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={styles.wallets}
                >
                  <div
                    className={styles.walletWrapper}
                    onClick={injectedWallet}
                  >
                    <Image height={75} width={75} src={MetaMaskIcon} />
                    <h3>MetaMask</h3>
                  </div>
                  <div
                    className={styles.walletWrapper}
                    onClick={injectedWallet}
                  >
                    <Image height={75} width={75} src={TrustWalletIcon} />
                    <h3>Trust Wallet</h3>
                  </div>
                  <div className={styles.walletWrapper} onClick={binanceWallet}>
                    <Image height={75} width={75} src={BinanceIcon} />
                    <h3>Binance Wallet</h3>
                  </div>
                  <div className={styles.walletWrapper} onClick={walletConnect}>
                    <Image height={75} width={75} src={WalletConnectIcon} />
                    <h3>Wallet Connect</h3>
                  </div>
                </motion.div>
              </div>
              <div className={styles.popupFooter}>
                <button onClick={() => props.setShowWallet(false)}>
                  Close
                </button>
              </div>
            </motion.div>
          </main>
        </motion.div>
      )}
    </main>
  );
};

export default WalletConnect;
