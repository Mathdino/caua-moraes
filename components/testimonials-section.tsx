"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Maria Silva",
    role: "Mãe do Lucas, 9 anos",
    content:
      "Meu filho evoluiu muito em apenas 3 meses! A técnica melhorou absurdamente e ele está muito mais confiante. O Cauã é extremamente dedicado e profissional.",
    rating: 5,
    image: "/happy-mother-profile-photo.jpg",
  },
  {
    name: "Carlos Santos",
    role: "Pai do Mateus, 12 anos",
    content:
      "A metodologia é excelente! Meu filho sempre volta animado dos treinos. Já conseguiu até entrar no time da escola. Super recomendo!",
    rating: 5,
    image: "/father-profile-photo-smiling.jpg",
  },
  {
    name: "Ana Paula",
    role: "Mãe do Gabriel, 14 anos",
    content:
      "Profissional top! O Gabriel melhorou não só no futebol, mas também na disciplina e foco nos estudos. O treino personalizado faz toda diferença.",
    rating: 5,
    image: "/professional-woman-profile-photo.jpg",
  },
];

export function TestimonialsSection() {
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

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="py-20 md:py-32 bg-black relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 text-balance"
          >
            O Que os Pais <span className="text-brand-green">Dizem</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty">
            Depoimentos reais de famílias satisfeitas com os resultados
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-950 border-gray-800 hover:border-brand-green transition-all duration-300 group h-full"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-brand-green text-brand-green"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed text-pretty">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
