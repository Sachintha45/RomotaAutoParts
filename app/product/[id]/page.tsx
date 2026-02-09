import prisma from '@/lib/prisma';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, ShoppingCart, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';

interface PageProps {
    params: { id: string };
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params;
    const product = await prisma.product.findUnique({
        where: { id: parseInt(id) },
    });

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors mb-8 group">
                    <ChevronLeft size={20} className="mr-1 group-hover:-translate-x-1 transition-transform" />
                    Back to browsing
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="relative aspect-square rounded-3xl overflow-hidden border border-gray-100 shadow-lg">
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                            {product.name}
                        </h1>
                        <div className="mt-4 flex items-center space-x-4">
                            <span className="text-3xl font-bold text-blue-600 italic">
                                ${product.price.toFixed(2)}
                            </span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">
                                In Stock
                            </span>
                        </div>

                        <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-lg">
                            {product.description}
                        </p>

                        <div className="mt-12 space-y-6">
                            <button className="w-full md:w-auto px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl flex items-center justify-center transition-all hover:scale-[1.02] shadow-blue-200 shadow-lg">
                                <ShoppingCart className="mr-3" size={24} />
                                Add to Cart
                            </button>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                                <div className="flex items-center text-sm text-gray-500">
                                    <Truck className="mr-3 text-blue-500" size={20} />
                                    Fast delivery
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <ShieldCheck className="mr-3 text-blue-500" size={20} />
                                    1 Year Warranty
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <RefreshCcw className="mr-3 text-blue-500" size={20} />
                                    30 Day Returns
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
