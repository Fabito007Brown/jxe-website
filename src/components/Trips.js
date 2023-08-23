import TripsData from "./TripsData";
import "./TripsStyles.css";
import trip1 from "../assets/JULI16.jpg";
import trip2 from "../assets/JUNIO18.jpg";
import trip3 from "../assets/AGO20.JPG";

function Trips() {
  return (
    <div className="trip">
      <h1>Visitas Recientes</h1>
      <p>Toma un vistazo a nuestras visitas</p>

      <div className="tripcard">
        <TripsData
          image={trip3}
          heading="Agosto 20 2023"
          text="El pasado 20 de Agosto donamos 140 bolsas de comida y 10 cajas de 150 unidades de churros Bocadeli. Además un jugamos un clásico Mar y Tierra con los niños"
        />
        <TripsData
          image={trip1}
          heading="Julio 15 2023"
          text="El pasado 15 de julio donamos 150 bolsas llenas de alimentos y también mucha ropa para varones. Además, pasamos un buen rato con la gente del Espino!"
        />

        <TripsData
          image={trip2}
          heading="Junio 18 2023"
          text="El pasado 18 de junio donamos alimentos varios: pure de papa, arroz, frijoles, y congelados (pupusas y tamales)."
        />
      </div>
    </div>
  );
}

export default Trips;
