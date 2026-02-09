import 'dotenv/config';
import fetch from 'node-fetch';

const token = process.env.VITE_TELEGRAM_BOT_TOKEN;
const chatId = process.env.VITE_TELEGRAM_CHAT_ID;

console.log('--- Debugging Telegram Config ---');
console.log('Token exists:', !!token);
console.log('Chat ID:', chatId);

async function run() {
    // 1. Check Bot
    console.log('\n1. Checking Bot Status...');
    try {
        const meRes = await fetch(`https://api.telegram.org/bot${token}/getMe`);
        const meData = await meRes.json();
        console.log('getMe Result:', JSON.stringify(meData, null, 2));
    } catch (err) {
        console.error('getMe Failed:', err.message);
    }

    // 1.5 Check Updates (to find Chat ID)
    console.log('\n1.5 Checking for recent messages (getUpdates)...');
    try {
        const updatesRes = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
        const updatesData = await updatesRes.json();
        console.log('getUpdates Result:', JSON.stringify(updatesData, null, 2));

        if (updatesData.result && updatesData.result.length > 0) {
            console.log('\n--- FOUND POTENTIAL CHAT IDs ---');
            updatesData.result.forEach(u => {
                if (u.message && u.message.chat) {
                    console.log(`User: ${u.message.chat.username || u.message.chat.first_name} | ID: ${u.message.chat.id} | Type: ${u.message.chat.type}`);
                }
            });
            console.log('--------------------------------\n');
        } else {
            console.log('\nNo recent messages found. Please send "Hello" to your bot in Telegram and run this script again.\n');
        }
    } catch (err) {
        console.error('getUpdates Failed:', err.message);
    }

    // 2. Try Send Message
    console.log('\n2. Trying to send test message...');
    const text = `
📩 *New Contact Message*

👤 *Name:* Test Name
📱 *Phone:* 1234567890
📧 *Email:* test@example.com
📝 *Message:*
This is a test debug message.
    `;

    try {
        const sendRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                // parse_mode: 'Markdown' // Intentionally commented out like in the app
            })
        });

        const sendData = await sendRes.json();
        console.log('sendMessage Result:', JSON.stringify(sendData, null, 2));

        if (!sendRes.ok) {
            console.log('\n!!! ERROR DETAILS !!!');
            console.log(sendData);
        }

    } catch (err) {
        console.error('sendMessage Failed:', err.message);
    }
}

run();
