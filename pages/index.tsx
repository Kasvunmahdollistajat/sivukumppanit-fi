import Contact from "./home/contact";
import Experts from "./home/experts";
import Intro from "./home/intro";
import Jumbo from "./home/jumbo";
import CustomerPromise from "./home/customerPromise";
import Services from "./home/services";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <>
      <Jumbo />
      <div className={styles.content}>
        <Intro />
        <CustomerPromise />
        <Services />
        <Experts />
        <Contact />
      </div>
    </>
  );
};

export default Home;
