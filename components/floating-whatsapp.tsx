"use client";

export function FloatingWhatsApp() {
  const handleClick = () => {
    window.open(
      "https://wa.me/5511941117562?text=Olá! Gostaria de saber mais sobre as aulas.",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 animate-bounce cursor-pointer"
      aria-label="Contato via WhatsApp"
    >
      <img
        src="/whats.webp"
        alt="WhatsApp"
        className="w-10 h-10 md:w-13 md:h-13"
      />
    </button>
  );
}
