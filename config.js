const fs = require("fs");
const chalk = require("chalk");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

// Owner
global.owner = [
  ['212625457341', 'kabani dev', 'aligueahmed6@gmail.com', true]
]

global.APIs = { 
  tixo: 'https://api-nightmares.my.id'
}

global.APIKeys = {
  'https://api-nightmares.my.id': 'Tio'
}

global.setting = {
  clear: false,
  addReply: true
}

global.info = {
  version: 'beta.version_1',
  nameBot: 'kabani bot',
  nameOwn : 'kabani bot',
  nomerOwn : '212625457341',
  pairingNumber: '6282228545461',
  packname : 'sticker by ',
  author : 'kabani bot',
  namebot : '乂 kabani  - MD',
  wm : 'gabani bot  -  M D',
  stickpack : 'Whatsapp',
  stickauth : 'Bot kabani'
}

global.url = {
 sig: 'https://instagram.com',
 sgh:  'https://github.com',
 sgc: 'https://chat.whatsapp.com/',
 thumb: ' ',
 thumbnail: 'https://qu.ax/siNcs.jpg',
 urlError: 'https://qu.ax/siNcs.jpg',
}
// Donasi
global.payment = {
 psaweria: 'https://saweria.co/tiooxy',
 ptrakterr: '-',
 pdana: '082285357346'
}
// Info Wait
global.msg = {
 wait: '⏱️ انتظر او اعلمك الانتظار *User*!',
 eror: '🤖 *Information Bot*\n\> للاسف هناك خطأ.',
 danied: 'Kamu tidak memiliki akses'
}


global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    };
    let results = Object.keys(emot).filter(v => new RegExp(v, 'gi').test(string));
    if (!results.length) return '';
    else return emot[results[0]];
  }
}

/**
Context info
**/

global.adReply = {
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    "newsletterJid": "120363183258593542@newsletter",
                    "serverMessageId": 103,
                    "newsletterName": info.nameBot

                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: info.nameBot,
                    body: '',
                    previewType: "PHOTO",
                    thumbnailUrl: url.thumbnail,
                    sourceUrl: url.sgc,

                }
            }
        }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
