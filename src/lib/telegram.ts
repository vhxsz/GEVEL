const TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export async function sendToTelegram(data: { name: string; email: string; message: string }) {
  const text = `📩 *Novo contato via site GEVEL*\n\n👤 *Nome:* ${data.name}\n📧 *E-mail:* ${data.email}\n💬 *Mensagem:* ${data.message}`;

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'Markdown' }),
  });
}
