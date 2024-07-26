// commands/menu.js
const fs = require('fs');
module.exports = (bot) => {
  bot.onText(/\/menu|start$/, (msg) => {

    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const username = msg.from.username;

const menuText = `Hello : [${username}](tg://user?id=${userId})
This is a Menu you can add options:

/option1
/option2
/option3
`;

    const imagePath = 'https://raw.githubusercontent.com/powermx/dl/master/vpnmx.jpg';
    const groupLink = 'https://t.me/vpnmx/';

    const keyboard = {
      inline_keyboard: [
        [
          {
            text: '⚡ @VPNMX ⚡',
            url: groupLink
          }
        ]
      ]
    };

    const options = {
      parse_mode: 'Markdown',
      reply_markup: JSON.stringify(keyboard)
    };

    bot.sendPhoto(chatId, imagePath, { caption: menuText, parse_mode: 'Markdown', reply_markup: keyboard });
  });
};
