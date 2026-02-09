import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error('Error: TELEGRAM_BOT_TOKEN is not defined in .env file');
    console.error('Please create a .env file based on .env.example');
    process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

console.log('Telegram Bot is running...');

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (!text) return;

    console.log(`Received message: ${text}`);

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Welcome to RomotaAutoParts Bot! 🚗\n\nCommands:\n/status - Check app status\n/deploy - Trigger deployment\n/logs - View logs\n/update <message> - Request changes');
    } else if (text === '/status') {
        const url = process.env.APP_URL || 'Not deployed yet';
        await bot.sendMessage(chatId, `✅ App is running.\nURL: ${url}`);
    } else if (text === '/deploy') {
        await bot.sendMessage(chatId, '🚀 Deployment triggered (Mock). Check Vercel dashboard.');
        // TODO: Implement actual Vercel deploy hook
    } else if (text.startsWith('/update')) {
        const request = text.replace('/update', '').trim();
        if (!request) {
            await bot.sendMessage(chatId, 'Please provide a request. Example: /update Add login page');
            return;
        }
        await bot.sendMessage(chatId, `🛠 Processing update: "${request}"\n\n(AI Developer agent integration pending...)`);
        // TODO: specific AI agent logic here
    } else if (text === '/logs') {
        await bot.sendMessage(chatId, '📋 Logs feature pending...');
    } else {
        // Echo for now or ignore, or guide user
        // await bot.sendMessage(chatId, `Unknown command. Try /start`);
    }
});

// Handle polling errors
bot.on('polling_error', (error) => {
    console.error(`Polling error: ${error.code} - ${error.message}`);
});
