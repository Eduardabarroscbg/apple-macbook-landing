import { footerLinks } from "../constants/index.js";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          Mais formas de comprar: encontre uma Apple Store ou revendedor
          autorizado perto de você. Ou ligue para{" "}
          <span className="text-primary">0800 761 0880</span>.
        </p>
        <img src="/logo.svg" alt="Logo Apple" className="invert min-w-[20px]" />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2024 Apple Inc. Todos os direitos reservados.</p>
        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;