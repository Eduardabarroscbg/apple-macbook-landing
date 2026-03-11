import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section id="highlights">
      <h2>Nunca houve momento melhor para fazer o upgrade.</h2>
      <h3>Veja o que você ganha com o novo MacBook Pro.</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop" />
            <p>Realize tarefas exigentes até 9,8x mais rápido.</p>
          </div>
          <div>
            <img src="/sun.png" alt="Sol" />
            <p>
              Um deslumbrante <br />
              display Liquid Retina XDR <br />
              que impressiona.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="IA" />
            <p>
              Feito para o <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Bateria" />
            <p>
              Até
              <span className="green-gradient"> 14 horas a mais </span>
              de bateria.
              <span className="text-dark-100"> (Até 24 horas no total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Highlights;
