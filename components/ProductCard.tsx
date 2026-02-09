import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
}

export default function ProductCard({ id, name, price, imageUrl, description }: ProductCardProps) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
            <Link href={`/product/${id}`} className="block relative aspect-square overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                    New
                </div>
            </Link>

            <div className="p-5">
                <Link href={`/product/${id}`}>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                        {name}
                    </h3>
                </Link>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2 h-10">
                    {description}
                </p>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Price</span>
                        <span className="text-xl font-extrabold text-blue-600">${price.toFixed(2)}</span>
                    </div>
                    <button className="p-3 bg-gray-50 hover:bg-blue-600 text-gray-400 hover:text-white rounded-xl transition-colors duration-200">
                        <ShoppingCart size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
