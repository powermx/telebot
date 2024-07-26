// commands/id.js
module.exports = (bot) => {
  bot.onText(/\/id$/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    bot.sendMessage(chatId, `Your Telegram ID is: ${userId}`);
  });
};
