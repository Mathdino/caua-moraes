"use client";

import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function Footer() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511941117562", "_blank");
  };

  const handleScrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      gsap.to(window, { duration: 1, scrollTo: el, ease: "power2.out" });
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-brand-green mb-4">
              Cauã Moraes
            </h3>
            <p className="text-gray-400 mb-6 text-pretty">
              Treinamento especializado para jovens atletas que desejam evoluir
              técnica, condicionamento e disciplina dentro do futebol.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/caua_hm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-brand-green hover:text-black rounded-full flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-brand-green hover:text-black rounded-full flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
              {/* <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-brand-green hover:text-black rounded-full flex items-center justify-center transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("#sobre");
                  }}
                  className="text-gray-400 hover:text-brand-green transition-colors"
                >
                  Sobre o Treinador
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("#beneficios");
                  }}
                  className="text-gray-400 hover:text-brand-green transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("#como-funciona");
                  }}
                  className="text-gray-400 hover:text-brand-green transition-colors"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#planos"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("#planos");
                  }}
                  className="text-gray-400 hover:text-brand-green transition-colors"
                >
                  Planos
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 hover:text-brand-green transition-colors">
                <MapPin className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-sm">Guarulhos, SP</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 hover:text-brand-green transition-colors">
                <Clock className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-sm">Seg a Sáb: 7h às 20h</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 hover:text-brand-green transition-colors">
                <Mail className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:cauahenrique.m21@gmail.com"
                  className="text-sm hover:underline underline-offset-4"
                >
                  cauahenrique.m21@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-bold mb-4">Agende Sua Aula</h4>
            <p className="text-gray-400 text-sm mb-4">
              Entre em contato agora e garanta sua primeira aula experimental
              gratuita!
            </p>
            <Button
              className="w-full bg-brand-green hover:bg-brand-green/90 text-black font-bold cursor-pointer"
              onClick={handleWhatsApp}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Cauã Moraes. Todos os direitos
            reservados. | CREF 000000-G/SP
          </p>
        </div>
      </div>
    </footer>
  );
}
