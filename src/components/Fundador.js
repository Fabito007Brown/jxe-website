import fundaFabio from "../assets/fundador-fabio.jpg";
import fundaChema from "../assets/funda-chema.jpeg";
import fundaMonti from "../assets/funda-monti.jpg";
import fundaTito from "../assets/funda-tito.jpeg";
import fundaZelaya from "../assets/funda-zelaya.jpeg";

import "./FundadorStyles.css";
import FundadorData from "./FundadorData.js";

const Fundador = () => {
  return (
    <div className="fundador">
      <h1>Nuestros Fundadores</h1>
      <p>¡Conócenos!</p>

      <FundadorData
        className="first-funda"
        heading="Fabio Villatoro"
        text="Hola mi nombre es Fabio Villatoro, soy estudiante de Computer Science en Brown University y mi trabajo es ayudar a los demás. JóvenesXElEspino nació con la misión de ayudar y sacar adelante a la comunidad del Espino pero su impacto fue más allá de eso. Esta experiencia me ha enseñado el poder de entregarse a los demás en servicio y la importancia de comunicar estas ideas en nuestra sociedad. La felicidad se encuentra en las personas."
        img1={fundaFabio}
      />

      <FundadorData
        className="first-funda-reverse"
        heading="Alejandro Montoya"
        text="Joven católico, hijo de una gran familia que me enseñó a cuidar de otros. Actualmente estudio Economía en la ESEN, El Salvador, y sueño con crear y ofrecer empleos dignos para mis compatriotas."
        img1={fundaMonti}
      />

      <FundadorData
        heading="Josemaría Montalvo"
        text="Hola! Bienvenido a JovenesXElEspino, mi nombre es Josemaria Montalvo y estoy estudiando Economia y Matematicas en University of Notre Dame. Hace mas de 4 anos ayude a fundar JXE al ver la necesidades basicas y espirituales de esta bella comunidad; me di cuenta de que tenia los medios para hacer un cambio positivo en Arcos del Espino. Te invito a que tu tambien nos ayudes en esta gran labor."
        img1={fundaChema}
        className="first-funda"
      />

      <FundadorData
        className="first-funda-reverse"
        heading="Gerardo Simán"
        text="Hola, soy Tito; estudio Administración de Empresas en la Universidad de Deusto San Sebastián y soy uno de los 5 fundadores del proyecto Jóvenes por el Espino. El proyecto nació con la intención de hacer el bien y cambiar el mundo como pudiéramos. A lo largo de estos años, este proyecto, a pesar de regirse por su misión inicial, que es que nosotros los jóvenes tratemos de cambiar el mundo a través de cambiar el Espino, todo se ha sentido al revés; el Espino está cambiando el mundo a través de nosotros. Los invito a que se sumen a ser agentes de cambio con nosotros."
        img1={fundaTito}
      />

      <FundadorData
        className="first-funda"
        heading="Rodrigo Zelaya"
        text="Hola, mi nombre es Rodrigo Zelaya y estudio en la IE University en Madrid, España. Ayudé a fundar Jóvenes por El Espino con la visión de impulsar el cambio en la comunidad Arcos del Espino, con el propósito de apoyar a las personas y fomentar metas y valores. Y lo más importante, dar esperanza a las personas que, sin importar las adversidades que la vida les presente, cada uno puede salir adelante. Esencialmente, eso fue lo que me motivó a apoyar este proyecto, al observar la vida cotidiana de la mayoría de las personas salvadoreñas que no tienen muchas oportunidades para progresar."
        img1={fundaZelaya}
      />
    </div>
  );
};

export default Fundador;
