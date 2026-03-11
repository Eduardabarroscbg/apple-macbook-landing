import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", { transform: "scale(1.1)" })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Chip Foguete</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Apresentando o{" "}
                <span className="text-white">
                  M4, a nova geração do Apple silicon
                </span>
                . O M4 impulsiona
              </p>
              <p>
                Ele potencializa o Apple Intelligence no iPad Pro, para que você
                possa escrever, criar e realizar mais com facilidade. Tudo em um
                design incrivelmente fino, leve e poderoso.
              </p>
              <p>
                Um novo motor de display entrega precisão, fidelidade de cores e
                brilho impressionantes. E uma GPU de nova geração com ray tracing
                acelerado por hardware traz gráficos de console para as suas mãos.
              </p>
              <p className="text-primary">
                Saiba mais sobre o Apple Intelligence
              </p>
            </div>

            <div className="max-w-3xs space-y-14">
              <div className="space-y-2">
                <p>Até</p>
                <h3>4x mais rápido</h3>
                <p>em renderização pro do que o M2</p>
              </div>
              <div className="space-y-2">
                <p>Até</p>
                <h3>1,5x mais rápido</h3>
                <p>no desempenho de CPU do que o M2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
