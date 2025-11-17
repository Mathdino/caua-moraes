'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Zap, Users, Shield, TrendingUp, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  {
    icon: Target,
    title: 'Treinamento Técnico Personalizado',
    description: 'Desenvolvimento de fundamentos como passe, chute, domínio e condução de bola adaptados ao nível de cada aluno.'
  },
  {
    icon: Zap,
    title: 'Desenvolvimento Motor',
    description: 'Exercícios específicos para coordenação, agilidade, velocidade e equilíbrio, essenciais para a formação atlética.'
  },
  {
    icon: Users,
    title: 'Acompanhamento Individual',
    description: 'Atenção exclusiva com análise de evolução, correção de movimentos e feedbacks constantes.'
  },
  {
    icon: TrendingUp,
    title: 'Preparação Física Evolutiva',
    description: 'Fortalecimento muscular, resistência e condicionamento físico respeitando cada fase de desenvolvimento.'
  },
  {
    icon: Shield,
    title: 'Segurança e Metodologia Científica',
    description: 'Treinos baseados em evidências científicas com foco na prevenção de lesões e desenvolvimento saudável.'
  },
  {
    icon: Award,
    title: 'Formação de Atletas Completos',
    description: 'Trabalhamos não só o físico e técnico, mas também disciplina, concentração e mentalidade vencedora.'
  }
]

export function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: any
    try {
      ctx = gsap.context(() => {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          immediateRender: false,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            invalidateOnRefresh: true,
            once: true
          }
        })

        gsap.from(cardsRef.current?.children || [], {
          opacity: 0,
          y: 50,
          duration: 0.6,
          stagger: 0.1,
          immediateRender: false,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
            invalidateOnRefresh: true,
            once: true
          }
        })
      }, sectionRef)
    } catch {}

    return () => ctx?.revert()
  }, [])

  return (
    <section id="beneficios" ref={sectionRef} className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 text-balance"
          >
            Diferenciais do <span className="text-brand-green">Treinamento</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty">
            Uma metodologia completa para formar atletas de alto nível
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card 
                key={index}
                className="bg-gray-950 border-gray-800 hover:border-brand-green transition-all duration-300 group hover:shadow-xl hover:shadow-brand-green/10"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-green/20 transition-colors">
                    <Icon className="w-7 h-7 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-pretty">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
