import { useState, useEffect } from "react";
import styles from "../styles/dapp.module.css";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAlert } from "react-alert";

const CheetahDapp = ({ initialWeb3, vm, importAccount }) => {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const alert = useAlert();

  const [amountSent, setAmountSent] = useState(0);
  const [amountCollected, setAmountCollected] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [percentTransactions, setPercentTransactions] = useState(0);
  const [returns, setReturns] = useState(0);
  const [vmContract, setVmContract] = useState(initialWeb3);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (vmContract && account) handleAmountSent();
  }, [vmContract, account]);

  useEffect(() => {
    if (vmContract) handleAmountCollected();
  }, [vmContract]);

  useEffect(() => {
    const progress = amountCollected / 3;

    document.getElementById("loader").style.width = `${progress}%`;

    if (importAccount != null) {
      setAccount(importAccount);
      setVmContract(vm);
    }
  });

  const handleDepositBNB = async () => {
    if (account !== null) {
      if (depositAmount >= .1 && depositAmount <= 300) {
        if (depositAmount + amountCollected <= 300)
          try {
            console.log(depositAmount * 1 + amountCollected);
            await vmContract.methods.depositBNB().send({
              from: account,
              value: depositAmount * 1000000000000000000,
            });
            await delay(5000);
            handleAmountCollected();
            handleAmountSent();
          } catch (err) {
            console.log(err);
          }
        else {
          alert.show("Your atempted deposit exceeds total hardcap!");
        }
      } else {
        alert.show("The mininum deposit is .1 BNB and the maximum is 300 BNB");
      }
    } else {
      alert.show("Please connect your wallet to the site!");
    }
  };

  const handleAmountSent = async () => {
    try {
      const amountSent =
        (await vmContract.methods.howMuchSent(account).call()) /
        1000000000000000000;
      setAmountSent(amountSent);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAmountCollected = async () => {
    try {
      const amountCollected =
        (await vmContract.methods.amountCollected().call()) /
        1000000000000000000;
      setAmountCollected(amountCollected);
    } catch (err) {
      console.log(err);
    }
  };

  const updateAmount = (event) => {
    setDepositAmount(Number(event.target.value));
    let amount = Number(event.target.value);
    console.log(amount);
    if (!isNaN(amount) === true) {
      setPercentTransactions((((amount + amountSent) / 300) * 4).toFixed(3));
      setReturns(((amount + amountSent) * 8).toFixed(3));
    } else {
      setPercentTransactions((amountSent / 300) * 4);
      setReturns(amountSent * 8);
    }
  };

  //JSX Starts here
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Cheetah Dapp</title>
        <meta
          name="keyworkds"
          content="bsc, staking, blockchain, cheetah, binance"
        />
        <link rel="icon" href="/images/cheetah-logo.ico" />
      </Head>
      <div className={styles.main}>
        <div className="container">
          <div className={styles.angelWrapper}>
            <div className={styles.angelAbout}>
              <h2>Angel Investors Fund</h2>
              <p>
                As an Angel Investor, you’d invest into the project as usual,
                but instead of receiving tokens; you would receive a percentage
                of total volume (4% of total volume will be dedicated to all
                Angel investors combined). This percentage would be shared
                across all Angel investors, where your share of that % would be
                dependent on the amount of bnb that you invested into the Angel
                presale.
              </p>
              <Link href="/info" passHref>
                <button>Read More</button>
              </Link>
            </div>

            <div className={styles.dappWrapper}>
              <div className={styles.statsBarTop}>
                <div className={styles.progressBarOuter}>
                  <span id="loader" className={styles.progressBarInner}></span>
                </div>
              </div>
              <div className={styles.statsBar}>
                <p>Total Contributed: {amountCollected}/300 BNB</p>
              </div>
              <div className={styles.stats}>
                <p>Your Deposits:</p> <p>{amountSent} BNB</p>
              </div>
              <div className={styles.stats}>
                <p>Est. Daily Volume On Launch:</p> <p>1.1M USD</p>
              </div>
              <div className={styles.stats}>
                <p>Volume To Break Even:</p>
                <p>3.1M USD</p>
              </div>
              <div className={styles.stats}>
                <p>Your Returns At 25m Volume:</p> <p>{returns} BNB</p>
              </div>
              <div className={styles.stats}>
                <p>Return % Of All Transactions:</p>
                <p>{percentTransactions} %</p>
              </div>
              <div>
                <p className={styles.label}>.1 BNB Min - 300BNB Max:</p>
                <input
                  id="inputAmount"
                  className={styles.inputAmount}
                  onChange={updateAmount}
                  type="text"
                  placeholder="Enter Amount"
                />
              </div>

              <button
                className={styles.connectButton}
                onClick={handleDepositBNB}
              >
                Deposit
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheetahDapp;
