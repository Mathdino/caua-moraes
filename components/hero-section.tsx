"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          immediateRender: false,
          ease: "power3.out",
          clearProps: "opacity,transform",
        },
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
          once: true,
        },
      });

      tl.from(titleRef.current, { opacity: 0, y: 50, duration: 1 })
        .from(
          subtitleRef.current,
          { opacity: 0, y: 30, duration: 0.8 },
          "-=0.5"
        )
        .from(
          buttonsRef.current?.children || [],
          { opacity: 0, y: 20, duration: 0.6, stagger: 0.15 },
          "-=0.3"
        )
        .from(
          imageRef.current,
          { opacity: 0, scale: 0.9, duration: 1 },
          "-=0.8"
        );

      // Parallax effect
      gsap.to(imageRef.current, {
        y: 50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5511941117562?text=Olá! Gostaria de saber mais sobre as aulas particulares de futebol.",
      "_blank"
    );
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-green/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 py-20 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight text-balance"
            >
              Treinamento <span className="text-brand-green">Profissional</span>{" "}
              para Jovens Atletas
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed"
            >
              Aulas particulares de futebol para crianças e adolescentes de 7 a
              15 anos. Desenvolvimento técnico, físico e motor com metodologia
              científica.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-black font-bold text-lg px-8 py-6 h-auto group transition-all hover:scale-105 cursor-pointer"
                onClick={handleWhatsApp}
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Fale no WhatsApp
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-black font-bold text-lg px-8 py-6 h-auto transition-all hover:scale-105 cursor-pointer"
                onClick={handleWhatsApp}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Aula Experimental
              </Button>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/foto-1.webp"
                alt="Jovem jogador treinando"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-green text-black p-6 rounded-xl shadow-2xl">
              <p className="text-sm font-semibold mb-1">Alunos ativos</p>
              <p className="text-4xl font-black">150+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
