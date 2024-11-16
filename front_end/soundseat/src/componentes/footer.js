import React from 'react';
import '../stylesheets/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-sections">
        {/* Información de la compañía */}
        <div className="footer-section">
          <h3>Más Información de la compañía</h3>
          <p>
            SOUNDSEAT se dedica a la venta de boletos para eventos de música, teatro, y más. Esta plataforma está diseñada para que encuentres todo en un solo lugar.
          </p>
        </div>

        {/* Redes sociales */}
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Síguenos en Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Síguenos en Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Síguenos en Instagram</a></li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div className="footer-section">
          <h3>Información de Contacto</h3>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> Ciudad de México, México</li>
            <li><i className="fas fa-phone-alt"></i> +52-123-456-7890</li>
            <li><i className="fas fa-envelope"></i> contacto@soundseat.com</li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="footer-bottom">
        <p>© 2024 SOUNDSEAT | <a href="#terms">Política de Privacidad</a> | <a href="#terms">Términos y Condiciones</a></p>
      </div>
    </footer>
  );
}

export default Footer;
