import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleWhatsAppOrder = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla');
      return;
    }

    const message = `Hola! Me interesa este producto:\n\n*${product.name}*\nTalla: ${selectedSize}\nPrecio: $${product.price}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.stock <= 5 && product.stock > 0 && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            ¡Últimas unidades!
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            Agotado
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-orange-600">${product.price}</span>
          <span className="text-sm text-gray-500">Stock: {product.stock}</span>
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Selecciona tu talla:
          </label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border-2 rounded transition-all ${
                  selectedSize === size
                    ? 'border-orange-500 bg-orange-500 text-white'
                    : 'border-gray-300 hover:border-orange-500'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleWhatsAppOrder}
          disabled={product.stock === 0}
          className={`w-full py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors ${
            product.stock === 0
              ? 'bg-gray-300 cursor-not-allowed text-gray-500'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          <MessageCircle className="w-5 h-5" />
          <span>{product.stock === 0 ? 'Agotado' : 'Pedir por WhatsApp'}</span>
        </button>
      </div>
    </div>
  );
}
