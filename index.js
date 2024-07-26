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

/* POLLING END */

bot.on('polling_error', (error) => {
  console.log(error);
});
