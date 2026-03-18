import "./Footer.css"
import { Button } from "../Button/Button";

const Footer = () => {
   const footer = document.querySelector("footer")

   footer.innerHTML =`
<h2> <a href="mailto:miguel-cds@hotmail.com"> Contacto 📧 </a> </h2>
<div>
<a href="https://github.com/Miguelcds" target="_blank">${Button("/githubb.png", "@Miguelcds")}</a>
<a href="https://linkedin.com/in/miguelcds" target="_blank">${Button("/linkedin.png", "Miguelcds")}</a>
<a href="https://t.me/Micosts" target="_blank">${Button("/telegram.png", "Telegram")}</a>
</div>
`
};


export default Footer;

