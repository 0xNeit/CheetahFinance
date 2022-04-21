import Nav from "../components/Nav";
import SidebarNav from "./SidebarNav";
import styles from "../styles/layout.module.css";
import pawStyles from "../styles/pawprints.module.css";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children, setShowWallet, account, disconnectWallet }) => {
  return (
    <div className={styles.main}>
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
      <div className={styles.mobileNav}>
        <AnimatePresence exitBeforeEnter>
          <SidebarNav
            className={styles.mobileNav}
            setShowWallet={setShowWallet}
            account={account}
            disconnectWallet={disconnectWallet}
          />
        </AnimatePresence>
      </div>
      <div className={styles.nav}>
        <Nav
          className={styles.nav}
          setShowWallet={setShowWallet}
          account={account}
          disconnectWallet={disconnectWallet}
        />
      </div>

      {children}
      <div className={`${styles.bg} ${styles.anim}`}>
        <div className={styles.inner}></div>
      </div>
    </div>
  );
};

export default Layout;
