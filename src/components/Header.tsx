import { ShoppingBag } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold tracking-tight">Freedom Projet PM</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('sneakers')}
              className="hover:text-orange-500 transition-colors font-medium"
            >
              Zapatillas
            </button>
            <button
              onClick={() => scrollToSection('men')}
              className="hover:text-orange-500 transition-colors font-medium"
            >
              Hombre
            </button>
            <button
              onClick={() => scrollToSection('women')}
              className="hover:text-orange-500 transition-colors font-medium"
            >
              Mujer
            </button>
            <button
              onClick={() => scrollToSection('social')}
              className="hover:text-orange-500 transition-colors font-medium"
            >
              Redes
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
