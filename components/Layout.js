import Nav from "../components/Nav";
import styles from "../styles/layout.module.css";
import pawStyles from "../styles/pawprints.module.css";

const Layout = ({ children, handlerConnectWallet }) => {
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
      <Nav handlerConnectWallet={handlerConnectWallet} />
      {children}
      <div className={`${styles.bg} ${styles.anim}`}>
        <div className={styles.inner}></div>
      </div>
    </div>
  );
};

export default Layout;
