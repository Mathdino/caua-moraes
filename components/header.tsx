"use client";

import { useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

gsap.registerPlugin(ScrollToPlugin);

export function Header() {
  const [open, setOpen] = useState(false);

  const handleScrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      gsap.to(window, { duration: 1, scrollTo: el, ease: "power2.out" });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="hidden md:grid grid-cols-3 items-center py-4">
          <nav className="flex gap-6 justify-end">
            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("#sobre");
              }}
              className="text-sm text-gray-300 hover:text-brand-green transition-colors"
            >
              Sobre
            </a>
            <a
              href="#beneficios"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("#beneficios");
              }}
              className="text-sm text-gray-300 hover:text-brand-green transition-colors"
            >
              Benefícios
            </a>
          </nav>
          <div className="flex justify-center">
            <img src="/logo.png" alt="Cauã Moraes" className="h-17 w-auto" />
          </div>
          <nav className="flex gap-6 justify-left">
            <a
              href="#depoimentos"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("#depoimentos");
              }}
              className="text-sm text-gray-300 hover:text-brand-green transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#planos"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("#planos");
              }}
              className="text-sm text-gray-300 hover:text-brand-green transition-colors"
            >
              Planos
            </a>
          </nav>
        </div>

        <div className="flex md:hidden items-center justify-between py-3">
          <div className="flex items-center">
            <img src="/logo.png" alt="Cauã Moraes" className="h-7 w-auto" />
          </div>
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="text-gray-300 hover:text-brand-green transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent className="bg-black border-gray-800 justify-start">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 p-4">
              <a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("#sobre");
                }}
                className="text-base text-gray-300 hover:text-brand-green transition-colors"
              >
                Sobre
              </a>
              <a
                href="#beneficios"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("#beneficios");
                }}
                className="text-base text-gray-300 hover:text-brand-green transition-colors"
              >
                Benefícios
              </a>
              <a
                href="#como-funciona"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("#como-funciona");
                }}
                className="text-base text-gray-300 hover:text-brand-green transition-colors"
              >
                Como Funciona
              </a>
              <a
                href="#planos"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("#planos");
                }}
                className="text-base text-gray-300 hover:text-brand-green transition-colors"
              >
                Planos
              </a>
              <a
                href="#depoimentos"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("#depoimentos");
                }}
                className="text-base text-gray-300 hover:text-brand-green transition-colors"
              >
                Depoimentos
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
