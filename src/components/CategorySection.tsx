import ProductCard from './ProductCard';
import type { Product } from '../types/product';

interface CategorySectionProps {
  id: string;
  title: string;
  products: Product[];
}

export default function CategorySection({ id, title, products }: CategorySectionProps) {
  return (
    <section id={id} className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
          <div className="h-1 w-20 bg-orange-500 rounded"></div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay productos disponibles en esta categoría</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
