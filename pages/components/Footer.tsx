import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.footer}>
    <span>&copy; {new Date().getFullYear()}</span>
    <div>
      <p>Kasvun mahdollistajat Oy</p>
      <p>2745834-5</p>
    </div>
    <div>
      <p>Katri Sipilä Consulting Oy</p>
      <p>3105526-6</p>
    </div>
  </div>
);

export default Footer;
