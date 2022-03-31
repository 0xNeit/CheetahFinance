import Layout from "../components/Layout";
import "../styles/globals.css";
import Web3 from "web3";
import cheetahContract from "../blockhain/cheetah";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { switchToBscMainnet } from "../scripts/metamask";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const rpcURL = "https://bsc-dataseed.binance.org/";
const blockExplorerUrls = "https://bscscan.com";

export { rpcURL, blockExplorerUrls };

const options = {
  position: "top right",
  timeout: 5000,
  offset: "20px",
  transition: "fade",
};

const MyApp = ({ Component, pageProps, router }) => {

  // CSS TRANSITION FIX!!!!!!
  useEffect(() => {
    Array.from(
      document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')
    ).forEach((node) => {
      node.removeAttribute("data-n-p");
    });
    const mutationHandler = (mutations) => {
      mutations.forEach(({ target }) => {
        if (target.nodeName === "STYLE") {
          if (target.getAttribute("media") === "x") {
            target.removeAttribute("media");
          }
        }
      });
    };
    const observer = new MutationObserver(mutationHandler);
    observer.observe(document.head, {
      subtree: true,
      attributeFilter: ["media"],
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  const [account, setAccount] = useState(null);
  const [vmContract, setVmContract] = useState(null);

  function handleProvider() {
    let web3 = new Web3(rpcURL);
    const initialWeb3 = cheetahContract(web3);
    return { initialWeb3 };
  }

  const handleprovider = handleProvider();
  const initialWeb3 = handleprovider.initialWeb3;
  async function handlerConnectWallet() {
    //Check if metamask is available
    let web3 = null;
    let label = null;
    let account = null;
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        //Request wallet connect
        await window.ethereum.request({ method: "eth_requestAccounts" });
        //Set web3 instance
        web3 = new Web3(window.ethereum);
        setVmContract(cheetahContract(web3));
        //Check if on correct network
        if ((await web3.eth.net.getId()) === 56) {
          //Get list of accounts
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          label = "Connected";
        } else {
          await switchToBscMainnet();
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          label = "Connect";
        }
      } catch (err) {
        console.log(err + "Error");
        label = "Connect";
      }
      //If not then return "error"
    } else {
      alert("Error: MetaMask Not Installed");
      console.log("metamask not installed");
      label = "Connect";
    }
    return { label, account, web3 };
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Layout handlerConnectWallet={handlerConnectWallet}>
        <AnimatePresence exitBeforeEnter>
          <Component
            key={router.route}
            handlerConnectWallet={handlerConnectWallet}
            vm={vmContract}
            initialWeb3={initialWeb3}
            importAccount={account}
            {...pageProps}
          />
        </AnimatePresence>
      </Layout>
    </AlertProvider>
  );
};
export default MyApp;
