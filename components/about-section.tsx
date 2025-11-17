"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Heart, Target, TrendingUp, BadgeCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const certsTweenRef = useRef<gsap.core.Tween | null>(null);
  const certs = [
    {
      label: "Treinador Escolinha de Futebol",
      url: "https://drive.google.com/file/d/1hHmcNaYkrqJOtrV8KbRThmyv9nZUmZhE/view?usp=sharing",
    },
    {
      label: "Curso - Explorando o Jogo",
      url: "https://drive.google.com/file/d/1m-IjpT7UuGyTljeIDeRYzBDYgYYbGmFw/view?usp=sharing",
    },
    {
      label: "Curso de Futebol",
      url: "https://drive.google.com/file/d/1HBDrAJ0lfZQS5RrxvpActR_aXHHWczbO/view?usp=sharing",
    },
    {
      label:
        "Participação no 2° Encontro Nacional de Treinadores de Futebol e Futsal",
      url: "https://drive.google.com/file/d/1q0fpLjTRiLxkdE6_3jS0M1s25smHQmiB/view?usp=sharing",
    },
    {
      label: "Trainer Soccer",
      url: "",
    },
    {
      label: "Introdução á análise de desempenho",
      url: "",
    },
    {
      label: "Metodologia de treinamentos",
      url: "",
    },
    {
      label: "Microciclo de treinamentos",
      url: "",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(statsRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
      const track = certsRef.current;
      if (track) {
        requestAnimationFrame(() => {
          const totalWidth = track.scrollWidth / 2;
          const speed = 60;
          gsap.killTweensOf(track);
          gsap.set(track, { x: 0 });
          certsTweenRef.current = gsap.to(track, {
            x: -totalWidth,
            duration: totalWidth / speed,
            ease: "none",
            repeat: -1,
          });

          const items = track.querySelectorAll(".cert-item");
          items.forEach((item) => {
            item.addEventListener("mouseenter", () =>
              certsTweenRef.current?.pause()
            );
            item.addEventListener("mouseleave", () =>
              certsTweenRef.current?.resume()
            );
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-20 md:py-32 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/foto-2.webp"
                alt="Professor treinador"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm p-4 rounded-xl">
                <p className="text-brand-green font-bold text-sm mb-1">
                  Certificado CREF
                </p>
                <p className="text-white text-xs">
                  Professor de Educação Física especializado
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 text-balance">
              Sobre o <span className="text-brand-green">Treinador</span>
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed text-pretty">
              Com mais de 1 ano de experiência na formação de jovens atletas,
              utilizo uma metodologia moderna e científica para desenvolver todo
              o potencial do seu filho.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed text-pretty">
              Meu foco é no desenvolvimento técnico individual, preparação
              física evolutiva e formação de atletas completos, sempre
              respeitando a faixa etária e características de cada aluno.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <Award className="w-8 h-8 text-brand-green mb-3" />
                <p className="text-2xl font-bold text-white mb-1">1+</p>
                <p className="text-sm text-gray-400">Anos de experiência</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <Target className="w-8 h-8 text-brand-green mb-3" />
                <p className="text-2xl font-bold text-white mb-1">150+</p>
                <p className="text-sm text-gray-400">Alunos treinados</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <Heart className="w-8 h-8 text-brand-green mb-3" />
                <p className="text-2xl font-bold text-white mb-1">100%</p>
                <p className="text-sm text-gray-400">Dedicação</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <TrendingUp className="w-8 h-8 text-brand-green mb-3" />
                <p className="text-2xl font-bold text-white mb-1">95%</p>
                <p className="text-sm text-gray-400">Evolução comprovada</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-white font-bold text-xl mb-6">
            Certificados e Cursos Extras
          </h3>
          <div
            className="relative overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div
              ref={certsRef}
              className="flex items-center gap-4 whitespace-nowrap"
            >
              {[...certs, ...certs].map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-item group bg-gray-900 p-4 rounded-xl border border-gray-800 flex items-center gap-3 flex-shrink-0 min-w-[280px] cursor-pointer"
                >
                  <BadgeCheck className="w-6 h-6 text-brand-green" />
                  <span className="text-gray-300 group-hover:text-brand-green text-sm">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
