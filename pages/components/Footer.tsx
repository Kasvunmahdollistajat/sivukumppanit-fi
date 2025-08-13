import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.footer}>
    <span>&copy; {new Date().getFullYear()} Kasvun mahdollistajat Oy</span>
    <span>2745834-5</span>
  </div>
);

export default Footer;
