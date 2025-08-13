import { Element } from "react-scroll";
import styles from "./customerPromise.module.scss";

const promiseList = [
  "Vaikuttavaa ja tuloksellista johtamisen kehittymistä",
  "Sujuvampaa ja tehokkaampaa omistajat-hallitus-johto -ketjun yhteistyötä",
  "Tuloksellista johtoryhmätyötä hyvässä tiimihengessä",
  "Henkilökohtaisen johtajuuden nostamista uudelle tasolle",
  "Kehittymistä yhdessä asiakkaiden ja kumppaneiden kanssa",
  "Konkreettisia keinoja muutoksen johtamiseen ja yrityskulttuurin kehittämiseen",
  "Vaikuttavaa uudistumista ja tulevaisuuskestävyyttä",
];

const CustomerPromise = () => (
  <Element name="asiakaslupaus" className={styles.customerPromise}>
    <h2>Asiakaslupaus</h2>
    <ul>
      {promiseList.map((srv, i) => (
        <li key={i}>{srv}</li>
      ))}
    </ul>
    <div>
      <p>
        Meiltä saatte monipuolista ja näkemyksellistä johtamisosaamista eri
        toimialoilta ja erilaisista organisaatioista perhe- ja pk-yrityksistä
        järjestöihin ja säätiöihin.
      </p>
      <p>
        Keskiössämme on aina asiakasorientaatio ja tulevaisuusnäkökulma:
        johtamista ei kehitetä tyhjiössä, vaan yhdessä sidosryhmien kanssa
        (omistajat, hallitus, johto, henkilöstö, asiakkaat, kumppanit, media,
        yhteiskunta).
      </p>
    </div>
  </Element>
);

export default CustomerPromise;
