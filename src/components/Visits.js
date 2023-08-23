import soccerVisits from "../assets/soccerVisits.jpg";
import kidsVisits from "../assets/kidsVisits.jpg";
import paraiso1 from "../assets/paraiso1.jpg";
import paraiso2 from "../assets/paraiso2.jpg";

import "./VisitsStyles.css";
import VisitsData from "./VisitsData";

const Visits = () => {
  return (
    <div className="visits">
      <h1>Nuestras Visitas</h1>
      <p>¡Dale un vistazo a nuestras aventuras!</p>

      <VisitsData
        className="first-visit"
        heading="El Espino"
        text="¡Bienvenidos a El Espino! Cada mes, disfrutamos de esta comunidad paradisíaca y compartimos momentos especiales con las familias locales. Nuestro objetivo inmediato es colaborar con donaciones. Por medio de visitas mensuales a la comunidad, brindamos apoyo a más de 1,000 personas con comida, ropa, medicina y un rato de alegria. Sin embargo, nuestras visitas en este lugar van más alla. Nos encanta inspirar a los niños y adolescentes, hablando sobre metas familiares y personales. Conversamos con los muchachos, los educamos en valores, y los tratamos de guiar en el mejor camino para ellos."
        img1={soccerVisits}
        img2={kidsVisits}
      />

      <VisitsData
        className="first-visit-reverse"
        heading="Paraíso Salvadoreño"
        text="El Espino es hogar a incontables familias de escasos recursos. La economía de esta playa depende primordialmente de la pesca y agricultura. La pandemia COVID-19 afectó mucho estos sectores y al día de hoy la comunidad todavía sigue recuperandose. Sin embargo, la bella playa y los increibles atardaceres han hecho que el turismo de este lugar creciera. Este crecimietno en turismo y nuestra constante ayuda de donaciones y formación educativa y cristiana han hecho que El Espino siga adelante y siga creciendo."
        img1={paraiso1}
        img2={paraiso2}
      />
    </div>
  );
};

export default Visits;
