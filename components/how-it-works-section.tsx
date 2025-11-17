"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar, Users, Dumbbell } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: MapPin,
    title: "Local dos Treinos",
    description:
      "Treinos realizados em campos de grama sintética ou natural em locais seguros e bem estruturados em Guarulhos.",
  },
  {
    icon: Calendar,
    title: "Frequência Flexível",
    description:
      "Escolha entre 1, 2 ou 3 vezes por semana, com horários flexíveis que se adaptam à rotina da sua família.",
  },
  {
    icon: Users,
    title: "Personalização por Idade",
    description:
      "Metodologia adaptada para cada faixa etária: 7-10 anos (fundamentos), 11-13 anos (técnica avançada), 14-15 anos (performance).",
  },
  {
    icon: Dumbbell,
    title: "Tipos de Treino",
    description:
      "Fundamentos técnicos, condução de bola, passes, chutes, velocidade, coordenação motora, jogadas táticas e muito mais.",
  },
];

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    try {
      ctx = gsap.context(() => {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          immediateRender: false,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
            once: true,
          },
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
            once: true,
          },
        });

        stepsRef.current
          ?.querySelectorAll(".step-item")
          .forEach((step, index) => {
            tl.from(
              step,
              {
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                duration: 0.6,
                ease: "power2.out",
                immediateRender: false,
              },
              index * 0.15
            );
          });
      }, sectionRef);
    } catch {}

    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 text-balance"
          >
            Como Funcionam as <span className="text-brand-green">Aulas</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty">
            Um método estruturado para garantir a evolução constante do seu
            filho
          </p>
        </div>

        <div ref={stepsRef} className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="step-item flex flex-col md:flex-row gap-6 bg-black border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-brand-green transition-all group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                    <Icon className="w-8 h-8 text-brand-green" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-pretty">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
