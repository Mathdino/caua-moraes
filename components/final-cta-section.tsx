"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5511941117562?text=Olá! Quero preparar meu filho para jogar em alto nível!",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+5511941117562";
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-black relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 via-black to-black" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-brand-green/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 text-balance">
            Prepare Seu Filho para Jogar em{" "}
            <span className="text-brand-green">Alto Nível!</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 text-pretty leading-relaxed">
            Treinos profissionais para jovens de 7 a 15 anos. Desenvolvimento
            técnico, físico e mental com metodologia comprovada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-black font-bold text-lg px-10 py-7 h-auto transition-all hover:scale-105 shadow-xl shadow-brand-green/20 cursor-pointer"
              onClick={handleWhatsApp}
            >
              <svg
                className="w-8 h-8 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Entrar em Contato
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-10 py-7 h-auto transition-all hover:scale-105 cursor-pointer"
              onClick={handleCall}
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <p className="text-4xl font-black text-brand-green mb-2">1+</p>
              <p className="text-gray-400">Anos de experiência</p>
            </div>
            <div>
              <p className="text-4xl font-black text-brand-green mb-2">150+</p>
              <p className="text-gray-400">Alunos satisfeitos</p>
            </div>
            <div>
              <p className="text-4xl font-black text-brand-green mb-2">95%</p>
              <p className="text-gray-400">Taxa de evolução</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
