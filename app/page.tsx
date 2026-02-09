import prisma from '@/lib/prisma';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import ProductCard from '@/components/ProductCard';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="min-h-screen bg-gray-50/50">
      <Navbar />
      <HeroSlider />

      <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Featured <span className="text-blue-600">Products</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl">
              Discover our top-tier automotive components designed for reliability and performance.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="text-blue-600 font-bold hover:underline">View All &rarr;</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              description={product.description}
            />
          ))}
        </div>
      </div>

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} RomotaAutoParts. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
