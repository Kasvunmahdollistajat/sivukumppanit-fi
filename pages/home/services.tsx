import { Element } from "react-scroll";
import styles from "./services.module.scss";

const serviceList: { title: string; items: string[] }[] = [
  {
    title: "Omistajat ja hallitus",
    items: [
      "Omistajatahdon kirkastaminen ja omistajastrategian muotoilu",
      "OHJ-ketjun roolit, vastuut ja tehtävät",
      "Tulevaisuustyö ja strategian kehittäminen",
      "Hyvä hallintotapa (Corporate Governance)",
      "Hallitustyön organisointi, tavoitteet, seuranta",
      "Hallitus tiiminä, ryhmädynamiikka, puheenjohtajan rooli",
      "Hallituksen ja toimitusjohtajan yhteistyö",
      "Neuvonantajien käyttö omistajien, hallituksen ja johdon sparraajana",
      "Neuvonantajaryhmän (Advisory Board) rakentaminen ja työn organisointi",
    ],
  },
  {
    title: "Johtoryhmä",
    items: [
      "Hallituksen ja johtoryhmän yhteistyö, toimitusjohtajan rooli ja tehtävät",
      "Strateginen ennakointi ja tulevaisuustyön johtaminen",
      "Johtamisjärjestelmän rakentaminen ja kehittäminen",
      "Johtoryhmätyön organisointi ja tiimidynamiikka",
      "Johtamislupaus, tavoitteellinen johtaminen, suunnitteluprosessit",
      "Yksilösparraus: Toimitusjohtaja, johtoryhmän jäsenet",
    ],
  },
  {
    title: "Esihenkilöt",
    items: [
      "Valmentava johtamisote",
      "Ihmisten erilaiset toimintatyylit ja niiden vaikutus ryhmädynamiikkaan",
      "Organisaatiokulttuurin vaikutus ja kehittäminen",
      "Muutostilanteet ja yrityskulttuuri, muutoksen johtaminen (esim. yrityskaupat)",
      "Työnantajan ja esihenkilön lakisääteiset velvoitteet",
      "Esihenkilötyö haastavissa tilanteissa",
    ],
  },
];

const Services = () => (
  <Element name="palveluitamme" className={styles.services}>
    <h2>Palveluitamme</h2>
    <div className={styles.row}>
      {serviceList.map((service) => (
        <div key={service.title}>
          <h3>{service.title}:</h3>
          <ul>
            {service.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Element>
);

export default Services;
