const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const products = [
        {
            name: 'Classic Engine Oil',
            description: 'High performance engine oil for modern vehicles.',
            price: 29.99,
            imageUrl: 'https://images.unsplash.com/photo-1635773065961-4ed4876b50e3?q=80&w=1000&auto=format&fit=crop',
        },
        {
            name: 'Brake Pad Set',
            description: 'Durable and quiet brake pads for maximum safety.',
            price: 45.50,
            imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop',
        },
        {
            name: 'Air Filter',
            description: 'High-flow air filter for better engine breathing.',
            price: 15.00,
            imageUrl: 'https://images.unsplash.com/photo-1590675127025-2ff3ce993952?q=80&w=1000&auto=format&fit=crop',
        },
        {
            name: 'Spark Plug Pack',
            description: 'Set of 4 iridium spark plugs for efficient ignition.',
            price: 32.00,
            imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop',
        },
        {
            name: 'Radiator Coolant',
            description: 'Long-life coolant for optimal engine temperature.',
            price: 18.75,
            imageUrl: 'https://images.unsplash.com/photo-1589131608674-6819446d6a54?q=80&w=1000&auto=format&fit=crop',
        },
        {
            name: 'Oil Filter',
            description: 'Premium oil filter with high filtration capacity.',
            price: 12.00,
            imageUrl: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf048?q=80&w=1000&auto=format&fit=crop',
        },
    ];

    for (const product of products) {
        await prisma.product.create({
            data: product,
        });
    }

    console.log('Seed data created successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
