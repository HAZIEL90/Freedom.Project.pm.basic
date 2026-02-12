import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function SocialMedia() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: 'hover:text-pink-600',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'hover:text-blue-400',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com',
      color: 'hover:text-red-600',
    },
  ];

  return (
    <section id="social" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Síguenos en Redes Sociales</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Mantente al día con nuestros últimos lanzamientos, ofertas exclusivas y contenido de estilo urbano
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform transition-all duration-300 hover:scale-110 ${social.color}`}
                aria-label={social.name}
              >
                <Icon className="w-12 h-12" />
              </a>
            );
          })}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500">
            © 2024 Streetwear Store. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
