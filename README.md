  ![](https://raw.githubusercontent.com/powermx/telebot/main/telebot.jpg)

## Bot para Telegram basado en NodeJS 

> Este bot funciona perfectamente en termux o un vps para trabajar 24/7

## Instalación

## NodeJS Latest:

```
wget https://raw.githubusercontent.com/powermx/NodeJS/master/nodejs21 && bash nodejs21
```

## Instalar Repositorio:
```
git clone https://github.com/powermx/telebot.git
```

## Instalar paquetes:
```
cd telebot
npm install
```

## Edición 
Necesitas editar tu TOKEN generado con BotFather en Telegram en el archivo index.js
- BotFather: [`Crear Token`](https://t.me/BotFather)
```
const token = 'TUTOKEN'
```

## Iniciando el Bot:
```
npm start
```

### Iniciado Permanente
Instala la dependencia: pm2
```
npm i pm2 -g
```

### Inicio permanente 

`pm2 start index.js`

### Detener el bot 

`pm2 stop 0`


Este es un bot base para ser utilizado en grupos o privado, se pueden seguir añadiendo funciones al bot, creando archivos dentro de la carpeta "commands".

En el grupo de telegram, seguiremos compartiendo funciones para tu bot, si tienes funciones para compartir, lo puedes realizar en el grupo.



> Telebot by PowerMX | [![Telegram Group](https://patrolavia.github.io/telegram-badge/chat.png)](https://t.me/vpnmx)
                
----
Made with NodeJS ♥

Agradecimientos:

Yagop - https://www.npmjs.com/package/node-telegram-bot-api
