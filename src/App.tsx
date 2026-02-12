import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import SocialMedia from './components/SocialMedia';
import type { Product } from './types/product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }

  const sneakers = products.filter((p) => p.category === 'sneakers');
  const menProducts = products.filter((p) => p.category === 'men');
  const womenProducts = products.filter((p) => p.category === 'women');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Cargando productos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            STREETWEAR & SNEAKERS
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Las últimas tendencias en moda urbana y las mejores zapatillas del mercado
          </p>
        </div>
      </section>

      <CategorySection id="sneakers" title="Zapatillas" products={sneakers} />
      <CategorySection id="men" title="Ropa Hombre" products={menProducts} />
      <CategorySection id="women" title="Ropa Mujer" products={womenProducts} />
      <SocialMedia />
    </div>
  );
}

export default App;
