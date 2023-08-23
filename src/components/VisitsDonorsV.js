import service1 from "../assets/serv1.jpg";
import service2 from "../assets/serv2.jpg";
import service3 from "../assets/serv3.jpg";
import service4 from "../assets/serv4.jpg";
import andrescola from "../assets/andres-cola.jpg";
import carloscola from "../assets/carlos-colab.jpg";

import "./VisitsStyles.css";
import VisitsData from "./VisitsData";

const Visits = () => {
  return (
    <div className="visits">
      <h3>Donaciones, Agradecimientos y Experiencias</h3>
      <p>Un detrás de escenas de nuestro proyecto:</p>

      <VisitsData
        className="first-visit"
        heading="Donaciones Recaudadas"
        text="Cada més llevamos al Espino un promedio de 150 bolsas llenas de viveres. Hemos calculado que cada una de estas bolsas equivale a $20 en comida. Dado que hemos visitado El Espino un total de 37 veces, hemos donado más de $110,000 en comidas y recursos esenciales para una familia. Esto, sin contar que en la mayoría de visitas también llevamos golosinas Bocadeli y a veces llevamos donativos de ropa y otros accesorios. Nada de esto sería posible sin el apoyo que recibimos de nuestros voluntarios y donantes."
        img1={service3}
        img2={service4}
      />

      <VisitsData
        className="first-visit-reverse"
        heading="Colaboradores especiales - Andrés y Carlitos"
        text="Andrés Villatoro (izquierda) es el actual Presidente de Operaciones de JóvenesXElEspino en el Colegio Lamatepec. Él ha coordinado múltiples grupos de voluntarios que han ayudado a preparar cientos de bolsas para la gente de El Espino. Carlitos Flores (derecha) ha sido un voluntario fiel desde que el proyecto comenzó. Nos ha acompañado en muchas visitas y se encarga de repartir las donaciones, tomar fotos y animar al equipo de voluntarios."
        img1={andrescola}
        img2={carloscola}
      />

      <VisitsData
        className="first-visit"
        heading="Agradecimientos"
        text="¡Gracias a Fundación Una Mano Amiga, Asociación Manos Amigas, Bocadeli, Alimentos Étnicos, La Chula, y más! Hemos sido muy bendecidos con un gran grupo de voluntarios y donantes que nos permiten continuar esta labor. Nuestros donantes son una parte indispensable para poder ayudar a la comunidad de Arcos del Espino, ellos nos dan las herramientas para continuar y han sido una puerta para más ayuda, para no detenernos y para continuar brindando esperanza a los necesitados en El Espino y otras comunidades que se benefician de nuestra ayuda."
        img1={service1}
        img2={service2}
      />
    </div>
  );
};

export default Visits;
