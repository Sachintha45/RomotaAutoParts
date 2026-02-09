import Link from 'next/link';
import { ShoppingCart, User, Menu } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
                            Romota<span className="text-gray-900">Auto</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
                        <Link href="#products" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Products</Link>
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">About</Link>
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                            <User size={20} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors relative">
                            <ShoppingCart size={20} />
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">3</span>
                        </button>
                        <button className="md:hidden p-2 text-gray-400">
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
