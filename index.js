// Index
// Telebot - NodeJS
// Telegram - PowerMX 

const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const { promisify } = require('util');
const { exec } = require('child_process');
const axios = require('axios');
const { setMessageReaction } = TelegramBot;
const token = 'YOURTOKEN';
const DB = '/root/telebot/usuariosdb.json';
const bot = new TelegramBot(token, { polling: true });

// CARGAR MODULOS //

const commandsPath = path.join(__dirname, 'commands');
fs.readdirSync(commandsPath).forEach(file => {
  const command = require(path.join(commandsPath, file));
  command(bot, token, fs, DB, axios, fetch, fetchJson, path, https, exec);
});
/* UPTIME */ 

bot.onText(/\/uptime/, (msg) => {
  const chatId = msg.chat.id;
  const uptimeInSeconds = process.uptime();
  const uptimeFormatted = formatUptime(uptimeInSeconds);
  bot.sendMessage(chatId, `Uptime: ${uptimeFormatted}`);
});

function formatUptime(uptimeInSeconds) {
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);
  return `${hours} hours, ${minutes} minutes y ${seconds} seconds`;
}

/* POLLING END */

bot.on('polling_error', (error) => {
  console.log(error);
});
