import styles from "./jumbo.module.scss";

const Jumbo = () => (
  <div className={styles.jumbo}>
    <div className={styles.jumboWrapper}>
      <div>
        <h1>SiVu -kumppanit</h1>
        <h2>Sipilä & Vuorimaa</h2>
        <p>Hallituksen ja johdon strateginen kumppani.</p>
        <p>Vaikuttavaa johtamista, kestävää kehitystä.</p>
      </div>
    </div>
  </div>
);

export default Jumbo;
