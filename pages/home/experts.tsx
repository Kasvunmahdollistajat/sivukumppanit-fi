import { Element } from "react-scroll";
import styles from "./experts.module.scss";

type Person = {
  imageSrc: string;
  name: string;
  education: string;
  roles: string;
  linkedin: string;
};

const Person = ({ imageSrc, name, education, roles, linkedin }: Person) => (
  <div className={styles.person}>
    <div>
      <img src={imageSrc} alt={name} />
    </div>
    <div>
      <h3>{name}</h3>
      <p>
        <b>Koulutus:</b> {education}
      </p>
      <p>
        <b>Rooleja:</b> {roles}
      </p>
      <p>
        <b>LinkedIn:</b>{" "}
        <a rel="noopener noreferrer" target="_blank" href={linkedin}>
          {linkedin}
        </a>
      </p>
    </div>
  </div>
);

const Experts = () => (
  <Element name="meista" className={styles.experts}>
    <h2>Meistä</h2>
    <h3>Keitä olemme?</h3>
    <p>
      Meillä on 360 asteen kokemus johtoryhmä- ja hallitustyöstä erilaisissa
      organisaatioissa: pk- ja perheyhtiöt, järjestöt, yhdistykset, säätiöt,
      startupit. Olemme työskennelleet useissa asiakasorganisaatioissa
      strategian, tulevaisuustyön, johtamisen, yrityskulttuurin ja
      toimintatapojen kehittämisen parissa.
    </p>
    <p>
      Meillä kummallakin on laaja kokemus valmentamisesta, kouluttamisesta,
      coachingista, mentoroinnista ja fasilitoinnista erilaisissa
      organisaatioissa ja eri toimialoilla. Olemme tukeneet asiakkaitamme niin
      yksilövalmennuksilla kuin yli sadan osallistujan pitkillä
      valmennuskokonaisuuksilla.
    </p>
    <Person
      imageSrc="/katri.jpg"
      name="Katri Sipilä"
      education="OTK, varatuomari, HHJ PJ, Certified Business Coach Master"
      roles="Toimitusjohtaja, johtoryhmän jäsen, hallituksen puheenjohtaja ja jäsen,
hallituksen ja johdon neuvonantaja ja valmentaja, yrittäjä, start-up -enkelisijoittaja, HHJ-
kouluttaja, Boardman Oy:n partneri ja Hallituspartnerit Boardprofessionals Helsinki ry:n
jäsen"
      linkedin="https://www.linkedin.com/in/katrisipila/"
    />
    <Person
      imageSrc="/paivi.jpg"
      name="Päivi Vuorimaa"
      education="KTM, Certified Business Coach, RMP-motivaatiovalmentaja, NLP Practitioner,
Henkilöstöjohtajan tutkinto, Tuotekehittäjän erikoisammattitutkinto, Tiedottajan tutkinto,
Yrittäjän ammattitutkinto"
      roles="Hallituksen puheenjohtaja, varapuheenjohtaja ja jäsen, toiminnanjohtaja,
toimitusjohtaja, johtoryhmän/ johtotiimin puheenjohtaja ja jäsen, johtaja - strategia ja
kyvykkyydet, johtaja - tulevaisuuden rakentaminen, johtaja - koulutus ja kehitys,
kehityspäällikkö, yrittäjä, Hallituspartnerit Boardprofessionals Helsinki ry:n jäsen,
Boardman Oy:n jäsen, Henry ry:n jäsen"
      linkedin="https://www.linkedin.com/in/paivivuorimaa/"
    />
  </Element>
);

export default Experts;
