import Head from "next/head";
import styles from "../styles/info.module.css";
import { motion } from "framer-motion";

const Info = () => {
  const scroll = (element) => {
    document.getElementById("ourAim").style.color = "#fff";
    document.getElementById("angelInvestors").style.color = "#fff";
    document.getElementById("angelInvestors1").style.color = "#fff";
    document.getElementById("angelInvestors2").style.color = "#fff";
    document.getElementById("autoStaking").style.color = "#fff";
    document.getElementById("autoStaking1").style.color = "#fff";
    document.getElementById("NFT").style.color = "#fff";
    document.getElementById("NFT1").style.color = "#fff";
    document.getElementById("NFT2").style.color = "#fff";

    var element = document.getElementById(element);
    element.style.transition = "all .5s";
    element.style.color = "rgb(211, 160, 3)";
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Cheetah About</title>
        <meta
          name="keyworkds"
          content="bsc, staking, blockchain, cheetah, binance"
        />
        <link rel="icon" href="/images/cheetah-logo.ico" />
      </Head>
      <div id="main" className={styles.main}>
        <div className={styles.containerFixed}>
          <div className={styles.tableOfContentsFixed}>
            <h2 className={styles.tableOfContentsTitle}>Table Of Contents</h2>
            <h3 className={styles.title} onClick={() => scroll("ourAim")}>
              Our Aim
            </h3>
            <h3
              className={styles.title}
              onClick={() => scroll("angelInvestors")}
            >
              Angel Investors
            </h3>
            <ul>
              <li
                className={styles.title}
                onClick={() => scroll("angelInvestors1")}
              >
                What are Angel Investors?
              </li>
              <li
                className={styles.title}
                onClick={() => scroll("angelInvestors2")}
              >
                How does it work?
              </li>
            </ul>
            <h3 className={styles.title} onClick={() => scroll("autoStaking")}>
              Auto-Staking
            </h3>
            <ul>
              <li
                className={styles.title}
                onClick={() => scroll("autoStaking1")}
              >
                How does it work?
              </li>
            </ul>
            <h3 className={styles.title} onClick={() => scroll("NFT")}>
              NFT
            </h3>
            <ul>
              <li className={styles.title} onClick={() => scroll("NFT1")}>
                Overview
              </li>
              <li className={styles.title} onClick={() => scroll("NFT2")}>
                Collection
              </li>
            </ul>
          </div>
          <div className={styles.aboutContentFixed}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.tableOfContents}></div>
          <div id="aboutContent" className={styles.aboutContent}>
            <h2 id="ourAim">{"Our Aim"}</h2>
            <p>
              Welcome to Cheetah Finance, the fastest cat family yield
              auto-staking protocol on the Binance Smart Chain (BSC). Our
              mission is to be the first cat revolutional finance protocol in
              the DeFi space surrounded by an ecosystem of NFT’s and a community
              to grow this project worldwide. Cheetah Finance will aim to live
              up to its name by being the fastest project to hit milestones and
              records that separates us from other projects.
            </p>
            <p>
              Cheetah finance will award investors with Cheetah tokens by
              staking and compounding features, and the highest APY in the
              market with a staggering 1,000,000,000%.
            </p>
            <p>
              Behind the Cheetah Finance are a diverse group of highly skilled
              developers, viral marketers, creative graphic designers and
              professional social media managers, having profound experience in
              defi. We have been analyzing all the successful products in the
              Defi space and are excited to bring something different from our
              past projects. Though our goals are high, we are aware of
              potential downfalls and our team has exhaustively studied what
              causes projects in the DeFi space to implode, to combat this, we
              have subsequently implemented redundancies and safety measures in
              both the contracts and the tokenomics to prevent attack vectors,
              single-source oracle exploits, possible minting and rug codes and
              other issues that could potentially stop a project in its tracks.
            </p>
            <p>
              Our competent team has the knowledge, drive, and aptitude, capable
              of scaling Cheetah Finance to the moon, and beyond.
            </p>
            <h2 id="angelInvestors">{"Angel Investors"}</h2>
            <p>
              We have dedicated 4% of our tokenomics to go to our Angel
              Investors Fund. As our hard cap for the pre-sale is 300 BNB, your
              cut of that 4% would be your contributed amount of BNB divided by
              300. If you invested 3 BNB, you get 1% of the Angel Investors
              Fund. You can see a fully detailed list of your own live metrics
              on the website dashboard or on the pre-sale page. Angel Investors
              Funds will be distributed on a daily basis. Our average 24H volume
              from previous projects on launch is 800K USD, and with just 3.1M
              total volume, you will already break even, regardless of what you
              invest. Which from just launch day us already 1/3 achieved. When
              we reach 25M total volume, your investment will be multiplied by
              8. That means if you invested 10 BNB, you will already have 80
              BNB. You will never be removed from the fund, and on top of the
              funds, you will also be invited to an exclusive Angel Investors
              Group, where we leak early news and give access to future deals,
              projects and more. We also won’t have any pre-allocated tokens,
              thanks to this unique pre-sale, so our chart will have the
              potential to be way healthier than projects with regular
              pre-sales.
            </p>
            <h3 id="angelInvestors1">{"What are Angel Investors?"}</h3>
            <p>
              Angel investors will be early on investors and instead of them
              receiving tokens they receive a % of the tokenomics. The benefit
              of no private/presale token allocations means no token dumps at
              launch.
            </p>
            <h3 id="angelInvestors2">{"How does it work?"}</h3>
            <p>
              As an Angel Investor, you’d invest into the project as usual, but
              instead of receiving tokens; you would receive a percentage of
              total volume (4% of total volume will be dedicated to all Angel
              investors combined). This percentage would be shared across all
              Angel investors, where your share of that % would be dependent on
              the amount of bnb that you invested into the Angel presale.
            </p>
            <p>
              So someone that invests 15bnb, would receive a three times bigger
              share (3/60th of 4%) of the 4% than someone that invested 5bnb
              (1/60th of 4%).
            </p>
            <h2 id="autoStaking">{"Auto-Staking"}</h2>
            <p>
              Cheetah finance will consist of an AutoStake feature; it is a
              simple yet cutting-edge function called Buy-Hold-Earn, that
              provides the ultimate ease of use for $CHEETAH holders.
              Buy-Hold-Earn - By simply buying $CHEETAH and holding the token in
              your wallet, you earn 4.05% daily rebase rewards directly into
              your wallet.
            </p>
            <h3 id="autoStaking1">{"How does it work?"}</h3>
            <p>
              Once per day, our smart contract will send out tokens to all
              holders with an APY of 1,000,000,000%. There is no need to stake,
              there are no locking periods and there are no penalties. If you
              own Cheetah Finance, you will get a daily return, with an APY of
              1,000,000,000%. Since your return will go straight to your wallet,
              it functions as a daily compounding as well! If you own a Cheetah
              NFT, you will get a much higher APY of up to 2,000,000,000%, so
              get them while they’re still available!
            </p>
            <h2 id="NFT">{"NFT"}</h2>
            <h3 id="NFT1">{"Overview"}</h3>
            <p>
              Our vision is to offer a deeply immersive metaverse in which
              players will create virtual worlds and games collaboratively and
              without central authority. We are aiming to disrupt the existing
              game makers like Minecraft and Roblox by providing creators true
              ownership of their creations as non-fungible tokens (NFTs) and
              rewarding their participation with our utility token; CHEETAH.
            </p>
            <h3 id="NFT2">{"Collection"}</h3>
            <p>
              The initial Cheetah NFT genesis set will consist of a collection
              of 1000 uniquely and randomly auto-generated Cheetahs who consist
              of different species, including Tanzanian cheetah Sudan cheetah
              South African cheetah Northwest African cheetah Asiatic cheetah.
              Each specie has different rarity level, print and sex. Each
              Cheetah will eventually down the line passively yield Cheetah
              Finance. The rarer species your Cheetah is, the more reward it
              will yield. This is a NFT utility breakthrough combining the
              benefits of both Non-fungible Token and Fungible Token to reward
              Cheetah NFT holders.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
