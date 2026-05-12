const botToken = "8773067689:AAF5gBMXjRcpEdV1f_rOrUjDvlSy_sMq1LQ";
const chatId = "-1965059688";
const text = "Test message from terminal script";

async function testTelegram() {
  console.log("Testing Telegram Bot...");
  console.log("Token:", botToken.substring(0, 5) + "...");
  console.log("Chat ID:", chatId);

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });

    const data = await response.json();
    if (data.ok) {
      console.log("✅ Success! Message sent to Telegram.");
    } else {
      console.error("❌ Failed:", data.description);
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

testTelegram();
