'use client';

import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
    {
        title: 'Precision Engineered Parts',
        subtitle: 'High-quality components for every vehicle type.',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop',
    },
    {
        title: 'Performance Maintenance',
        subtitle: 'Keep your engine running at its peak potential.',
        image: 'https://images.unsplash.com/photo-1635773065961-4ed4876b50e3?q=80&w=2000&auto=format&fit=crop',
    },
    {
        title: 'Reliable Safety Systems',
        subtitle: 'Premium brakes and tires for ultimate control.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop',
    },
];

export default function HeroSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);

        const intervalId = setInterval(() => {
            emblaApi.scrollNext();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative overflow-hidden group">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slides.map((slide, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[400px] md:h-[600px]">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                priority={index === 0}
                                className="object-cover brightness-[0.7]"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
                                    {slide.subtitle}
                                </p>
                                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-transform hover:scale-105">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block"
            >
                <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${index === selectedIndex ? 'bg-blue-600' : 'bg-white/50'
                            }`}
                        onClick={() => emblaApi?.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}
