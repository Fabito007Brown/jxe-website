import "./ContactFormatStyles.css";
import placeholder from "../assets/contactimg.jpg";

function ContactFormatStyles() {
  return (
    <section id="contact-head" class="section-p1">
      <div class="details">
        <p>¡Habla con nosotros!</p>
        <h2>¡Aquí te puedes contactar con nosotros!</h2>
        <h3>Nuestros contactos</h3>
        <p>Aprieta abajo</p>
        <div>
          <li>
            <i class="fab fa-whatsapp"></i>
            <a
              href="https://wa.me/50372103629?text=Hola%20JovenesXElEspino!%20Queria%20hablar%20con%20ustedes..."
              class="no-underline"
            >
              Envía un mensaje
            </a>
          </li>

          <li>
            <i class="far fa-envelope"></i>
            <a href="mailto:jovenesxelespino@gmail.com" class="no-underline">
              jovenesxelespino
            </a>
          </li>

          <li>
            <i class="fab fa-instagram"></i>
            <a
              href="https://www.instagram.com/jovenesxelespino/"
              class="no-underline"
            >
              @jovenesxelespino
            </a>
          </li>
        </div>
        <img alt="imgc" src={placeholder} />
      </div>
    </section>
  );
}

export default ContactFormatStyles;
