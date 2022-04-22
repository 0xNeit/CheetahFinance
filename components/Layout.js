import Nav from "../components/Nav";
import SidebarNav from "../components/SidebarNav";
import { useState, useEffect } from "react";
import styles from "../styles/layout.module.css";
import pawStyles from "../styles/pawprints.module.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Layout = ({ children, setShowWallet, account, disconnectWallet }) => {
  const [windowDimensions, setWindowDimensions] = useState(null);

  useEffect(() => {
    setWindowDimensions(getWindowDimensions().width);
    function handleResize() {
      setWindowDimensions(getWindowDimensions().width);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.main}>
      {windowDimensions <= 750 && (
        <SidebarNav
          setShowWallet={setShowWallet}
          account={account}
          disconnectWallet={disconnectWallet}
        />
      )}
      {windowDimensions > 750 && (
        <Nav
          setShowWallet={setShowWallet}
          account={account}
          disconnectWallet={disconnectWallet}
        />
      )}

      <div className={pawStyles.pawPrints}>
        <img src="/images/pawprint1.png" alt="Logo" />
        <img src="/images/pawprint1.png" alt="Logo" />
        <img src="/images/pawprint1.png" alt="Logo" />
        <img src="/images/pawprint1.png" alt="Logo" />
        <img src="/images/pawprint1.png" alt="Logo" />
        <img src="/images/pawprint1.png" alt="Logo" />
        <img src="/images/pawprint1.png" alt="Logo" />
        <img src="/images/pawprint1.png" alt="Logo" />
        <img src="/images/pawprint1.png" alt="Logo" />
        <img src="/images/pawprint1.png" alt="Logo" />
        <img src="/images/pawprint1.png" alt="Logo" />
      </div>
      {children}
      <div className={`${styles.bg} ${styles.anim}`}>
        <div className={styles.inner}></div>
      </div>
    </div>
  );
};

export default Layout;
