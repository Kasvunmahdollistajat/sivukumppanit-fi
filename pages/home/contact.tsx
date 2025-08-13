import { Element } from "react-scroll";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <Element name="yhteystiedot" className={styles.contact}>
      <h2>Yhteystiedot:</h2>
      <div>
        <h3>SiVu -kumppanit</h3>
        <h4>Sipilä & Vuorimaa</h4>

        <div className={styles.row}>
          <div>
            <p>Katri Sipilä</p>
            <a href="mailto:ks@katrisipila.com">ks@katrisipila.com</a>
            <p>puh. 040 580 3430</p>
          </div>

          <div>
            <p>Päivi Vuorimaa</p>
            <a href="mailto:paivi.vuorimaa@gmail.com">
              paivi.vuorimaa@gmail.com
            </a>
            <p>puh. 040 725 5562</p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
