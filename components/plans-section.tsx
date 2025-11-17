"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Básico",
    price: "R$ 80",
    period: "/mês",
    description: "Ideal para começar",
    features: [
      "1 aula por semana",
      "Duração de 40 minutos p/aula",
      "Treino técnico individual",
      "Acompanhamento de evolução",
      "Material didático incluído",
    ],
    highlighted: false,
  },
  {
    name: "Intermediário",
    price: "R$ 120",
    period: "/mês",
    description: "Mais popular",
    features: [
      "2 aulas por semana",
      "Duração de 40 minutos p/aula",
      "Treino técnico + físico",
      "Acompanhamento personalizado",
      "Plano de evolução mensal",
      "Suporte via WhatsApp",
    ],
    highlighted: true,
  },
  {
    name: "Performance",
    price: "R$ 150",
    period: "/mês",
    description: "Máxima evolução",
    features: [
      "3 aulas por semana",
      "Duração de 40 minutos p/aula",
      "Treino completo (técnico + físico + tático)",
      "Acompanhamento intensivo",
      "Plano de evolução semanal",
      "Suporte prioritário via WhatsApp",
    ],
    highlighted: false,
  },
];

export function PlansSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

        gsap.from(cardsRef.current?.children || [], {
          opacity: 0,
          y: 50,
          duration: 0.6,
          stagger: 0.15,
          immediateRender: false,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
            once: true,
          },
        });
      }, sectionRef);
    } catch {}

    return () => ctx?.revert();
  }, []);

  const handleWhatsApp = (planName: string) => {
    const message = `Olá! Tenho interesse no plano ${planName}. Gostaria de mais informações.`;
    window.open(
      `https://wa.me/5511941117562?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="planos"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 text-balance"
          >
            Escolha Seu <span className="text-brand-green">Plano</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty">
            Planos flexíveis que se adaptam às necessidades e objetivos do seu
            filho
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`${
                plan.highlighted
                  ? "bg-brand-green/5 border-brand-green scale-105"
                  : "bg-black border-gray-800"
              } hover:border-brand-green transition-all duration-300 relative h-full`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-green text-black px-4 py-1 rounded-full text-sm font-bold">
                    Mais Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <p className="text-gray-400 text-sm mb-2">{plan.description}</p>
                <CardTitle className="text-2xl font-bold text-white mb-4">
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black text-brand-green">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 flex flex-col flex-1">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mt-auto ${
                    plan.highlighted
                      ? "bg-brand-green hover:bg-brand-green/90 text-black"
                      : "bg-gray-800 hover:bg-gray-700 text-white"
                  } font-bold transition-all hover:scale-105`}
                  size="lg"
                  onClick={() => handleWhatsApp(plan.name)}
                >
                  Quero este plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            🎁{" "}
            <span className="text-brand-green font-semibold">
              Primeira aula experimental gratuita
            </span>{" "}
            para novos alunos!
          </p>
          <p className="text-sm text-gray-500">
            * Valores podem variar conforme localização e disponibilidade de
            horários
          </p>
        </div>
      </div>
    </section>
  );
}
