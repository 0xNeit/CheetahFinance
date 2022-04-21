import Layout from "../components/Layout";
import "../styles/globals.css";
import Web3 from "web3";
import { BscConnector } from "@binance-chain/bsc-connector";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { switchToBscMainnet } from "../components/web3/wallets/metamaskfunctions/metamask.js";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import WalletConnect from "../components/WalletConnect";

const MyApp = ({ Component, pageProps, router }) => {
  const [showWallet, setShowWallet] = useState(false);
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(()=>{
    setWeb3(new Web3("https://bsc-dataseed1.binance.org"))
  }, [])

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

  const handleDisconnectWallet = async () => {
    setAccount(null);
    setWeb3(null);
    if (provider) {
      await provider.disconnect();
      setProvider(null);
    }
  };
  //Injected web3 wallet connector
  const handleConnectInjectedWallet = async () => {
    //Check if metamask is available
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        if (window.ethereum) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          web3 = new Web3(window.ethereum);

          //Get account address
          let addresses = await web3.eth.getAccounts();
          account = addresses[0];
          setShowWallet(false);

          // Check if chain is bsc
          if (web3.eth.net.getId() !== 56) {
            switchToBscMainnet();
          }

          //Check for accounts
          window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
              setAccount(accounts[0]);
            } else {
              setAccount(null);
            }
          });

          window.ethereum.on("chainChanged", (networkId) => {
            if (networkId !== 0x38) {
              switchToBscMainnet();
            }
          });
        } else if (web3) {
          setWeb3(new Web3(web3.currentProvider));
        } else {
          console.log("No wallet installed");
        }
      } catch (err) {
        console.log(err + "Error");
      }
      //If not then return "error"
    } else {
      console.log("Injected wallet provider not found");
    }
    setWeb3(web3);
    setAccount(account);
    return { account, web3 };
  };

  //Binance wallet connector
  const handleConnectBinanceWallet = async () => {
    if (typeof window !== "undefined" && typeof BinanceChain !== "undefined") {
      try {
        const binanceWallet = new BscConnector({
          supportedChainIds: [56, 97],
        });
        await binanceWallet.activate();

        //Set web3 provider
        web3 = new Web3(BinanceChain);

        //Get eth account address
        let addresses = await BinanceChain.requestAccounts();
        account = addresses[0].addresses[2].address;
        setShowWallet(false);

        //Check for accounts
        BinanceChain.on("accountsChanged", (accounts) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          } else {
            setAccount(null);
          }
        });
      } catch (err) {
        console.log(err + "Error");
      }
    } else {
      console.log("Binance wallet not installed");
    }
    setWeb3(web3);
    setAccount(account);
    return { web3, account };
  };

  //WalletConnect connector
  const handleConnectWalletConnect = async () => {
    const provider = new WalletConnectProvider({
      rpc: {
        56: "https://bsc-dataseed.binance.org/",
        qrcodeModalOptions: {
          mobileLinks: [
            "rainbow",
            "metamask",
            "argent",
            "trust",
            "imtoken",
            "pillar",
          ],
        },
      },
    });
    await provider.enable();
    setProvider(provider);

    provider.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        setAccount(null);
      }
    });

    const web3 = new Web3(provider);
    const addresses = await web3.eth.getAccounts();
    account = addresses[0];

    if (web3 && addresses) {
      setShowWallet(false);
      setAccount(account);
      setWeb3(web3);
      return { account, web3 };
    }
  };

  return (
    <Layout
      setShowWallet={setShowWallet}
      account={account}
      disconnectWallet={handleDisconnectWallet}
    >
      <AnimatePresence exitBeforeEnter={true}>
        {showWallet && (
          <WalletConnect
            connectWalletConnect={handleConnectWalletConnect}
            connectBinanceWallet={handleConnectBinanceWallet}
            connectInjectedWallet={handleConnectInjectedWallet}
            showWallet={showWallet}
            setShowWallet={setShowWallet}
            setWeb3={setWeb3}
            setAccount={setAccount}
          />
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter={true}>
        <Component key={router.route} {...pageProps} web3={web3} importAccount={account} />
      </AnimatePresence>
    </Layout>
  );
};
export default MyApp;
