import Nav from "../components/Nav";
import styles from "../styles/layout.module.css";
import pawStyles from "../styles/pawprints.module.css";


const Layout = ({ children, setShowWallet, account, disconnectWallet }) => {


  return (
    <div className={styles.main}>
      <Nav
        setShowWallet={setShowWallet}
        account={account}
        disconnectWallet={disconnectWallet}
      />
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
