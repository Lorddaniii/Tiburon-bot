require('../main.js') 
const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 
const path = require("path")
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
const {createHash} = require('crypto') 
const { canLevelUp, xpRange } = require('../libs/levelling.js')
let minar = `${pickRandom(['Que pro 😎 has minado',
'🌟✨ Genial!! Obtienes', 'WOW!! eres un(a) gran Minero(a) ⛏️ Obtienes', 'Has Minado!!', '😲 Lograste Minar la cantidad de', 'Tus Ingresos subiran gracias a que minaste', '⛏️⛏️⛏️⛏️⛏️ Minando', '🤩 SII!!! AHORA TIENES', 'La minaria esta de tu lado, por ello obtienes', '😻 La suerte de Minar', '♻️ Tu Mision se ha cumplido, lograste minar', '⛏️ La Mineria te ha beneficiado con', '🛣️ Has encontrado un Lugar y por minar dicho lugar Obtienes', '👾 Gracias a que has minado tus ingresos suman', 'Felicidades!! Ahora tienes','⛏️⛏️⛏️ Obtienes', '⛏️ has obtenido'])}` 
let robar = `${pickRandom(['Robaste un Banco 🏦 y Obtuviste', 'Negociarte con el jefe de la mafia y Obtuviste :', 'Casi te atrapa la policía pero lograste robar una cantidad valiosa de 💰. !Te cuidado la próxima vez! Obtuviste:', 'Los mafiosos te han pagado :', 'Le has robado al Administrador del Grupo', 'Le robarte a tu presidente una sumar de :', 'le robarte a un famoso un valor de :', 'Entraste sigilosamente en el museo y robaste una obra de arte valiosa:', 'Infiltraste una joyería y obtuviste un botín impresionante:', 'Te convertiste en el ladrón más buscado del país, obtuviste:', 'Robaste un camión lleno de productos valiosos y obtuviste', 'Asaltaste un tren y conseguiste', 'Robaste un avión cargado de mercancía y obtuviste', 'Te hiciste pasar por un millonario para robar una joya única, obtuviste', 'Entraste a la casa de un coleccionista de arte y robaste una pieza invaluable, obtuviste', 'Secuestraste a un empresario y conseguiste un rescate importante:', 'Amenazaste a un político y obtuviste una gran suma de dinero:', 'Sobornaste a un oficial de policía para obtener información valiosa, conseguiste'])}` 
let robmal = `${pickRandom(['LA POLICIA TE VIO 🙀👮‍♂️ PERDISTE', 'Fuiste a robar un banco 🏦 y tu ayudarte que vendio a la policía, perdiste', 'No pudiste escapar de la Policía 🚔🤡, perdiste :', 'Intentaste robar un casino pero te descubrieron, perdiste', 'Te atraparon tratando de robar una tienda, perdiste :', 'La alarma sonó cuando intentabas robar un almacén, perdiste', 'El dueño del lugar te atrapó in fraganti, perdiste', 'Intentaste hackear una cuenta bancaria pero te rastrearon, perdiste', 'Fuiste descubierto tratando de sobornar a un oficial, perdiste', 'Tu plan para chantajear a un empresario salió mal, perdiste'])}` 

async function reg(command, conn, m, sender, text, budy, fkontak, delay, args) {
if (global.db.data.users[m.sender].banned) return
if (command == 'reg' || command == 'verificar') {
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let user = global.db.data.users[m.sender]
let codigosIdiomas = ['es', 'en']
let nombresIdiomas = {'es': 'Español', 'en': 'English' }
if (user.registered === true) return m.reply(lenguaje.smsReg()) 
if (!Reg.test(text)) return m.reply(lenguaje.smsReg1(prefix)) 
let [_, name, splitter, age] = text.match(Reg)
if (!name) return m.reply(lenguaje.smsReg2()) 
if (!age) return m.reply(lenguaje.smsReg3()) 
age = parseInt(age)
if (age > 100) return m.reply(lenguaje.smsReg4()) 
if (age < 6) return m.reply(lenguaje.smsReg5()) 
if (name.length >= 45) return m.reply(lenguaje.smsReg6()) 
user.name = name + 'ͧͧͧͦꙶͣͤ✓'.trim()
user.age = age
user.regTime = + new Date
user.registered = true
const sn = createHash('md5').update(m.sender).digest('hex');
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
global.db.data.users[m.sender].limit += 2
global.db.data.users[m.sender].exp += 200
conn.sendMessage(m.chat, { text: lenguaje.smsReg7(name, user, age, time, date, sender, sn, prefix, rtotalreg),
contextInfo:{
mentionedJid:[name],
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${botname}`,
"body": `${name}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": imagen1, 
"sourceUrl": md}}},
{ quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await delay(2 * 2000)
conn.sendMessage(m.chat, { text: sn, contextInfo:{forwardingScore: 9999999, isForwarded: false, }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await delay(2 * 2000)
conn.sendMessage(m.chat, { text: lenguaje.smsReg8(), contextInfo:{forwardingScore: 9999999, isForwarded: false, }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'unreg') {
const {createHash} = require('crypto') 
if (!args[0]) return m.reply(lenguaje.rpg.unreg) 
const user = global.db.data.users[m.sender];
const sn = createHash('md5').update(m.sender).digest('hex');
if (args[0] !== sn) return m.reply(lenguaje.rpg.myns) 
user.registered = false; 
global.db.data.users[m.sender].limit -= 2
global.db.data.users[m.sender].exp -= 200
m.reply(lenguaje.rpg.delreg)}

if (command == 'myns') {
const {createHash} = require('crypto') 
let sn = createHash('md5').update(m.sender).digest('hex')
conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', `${lenguaje.rpg.myns2}`, 'status@broadcast')}}

async function rpg(m, command, participants, args, sender, pushname, text, conn, fkontak, replace, who) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return
let usuario = global.db.data.users[m.sender]
if (command == 'lb' || command == 'leaderboard') {
if (!m.isGroup) return m.reply(info.group) 
let member = participants.map(u => u.id)
let me = m.split
const users = Object.entries(global.db.data.users).map(([key, value]) => {
return {...value, jid: key}});
const sortedExp = users.map(toNumber('exp')).sort(sort('exp'));
const sortedLim = users.map(toNumber('limit')).sort(sort('limit'));
const sortedLevel = users.map(toNumber('level')).sort(sort('level'));
const sortedRole = users.map(toNumber('role')).sort(sort('role'))
const usersExp = sortedExp.map(enumGetKey);
const usersLim = sortedLim.map(enumGetKey);
const usersLevel = sortedLevel.map(enumGetKey);
const usersRole = sortedRole.map(enumGetKey)
const len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length);
const texto = `${lenguaje.rpg.text3}

╔═❖ *𝚃𝙾𝙿 ${len} 𝚇𝙿* 🧬 
║𝚃𝚞 : ${usersExp.indexOf(m.sender) + 1} 𝚍𝚎 ${usersExp.length}
${sortedExp.slice(0, len).map(({jid, exp}, i) => `║${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ *${exp} exp*`).join`\n`}
╚═══════════════  

╔═❖ *𝚃𝙾𝙿 ${len} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 💎*
║𝚃𝚞 : ${usersLim.indexOf(m.sender) + 1} 𝚍𝚎 ${usersLim.length}
${sortedLim.slice(0, len).map(({jid, limit}, i) => `║${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ *${limit} diamantes*`).join`\n`}
╚═══════════════  

╔═❖ *𝚃𝙾𝙿 ${len} 𝙽𝙸𝚅𝙴𝙻* ⬆️
║𝚃𝚞 : ${usersLevel.indexOf(m.sender) + 1} 𝚍𝚎 ${usersLevel.length}
${sortedLevel.slice(0, len).map(({jid, level}, i) => `║${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ *nivel ${level}*`).join`\n`}
╚═══════════════ 

╔═❖ *𝚃𝙾𝙿 ${len} 𝚁𝙾𝙻 | 𝚁𝙰𝙽𝙶𝙾  💪* 
║𝚃𝚞 : ${usersLevel.indexOf(m.sender) + 1} 𝚍𝚎 ${usersLevel.length} 𝚄𝚜𝚞𝚊𝚛𝚒𝚘𝚜
 
${sortedLevel.slice(0, len).map(({jid, role, level}, i) => `║${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ *${role}*`).join`\n`}
╚═══════════════`.trim();
conn.sendMessage(m.chat, { text: texto, contextInfo:{
mentionedJid: [...texto.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'afk') {
if (!m.isGroup) return m.reply(info.group) 
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
const afk = `${lenguaje.rpg.text4} ${pushname} ${lenguaje.rpg.text5} ${text ? text : ''}\n\n\n\n\n\n\n`
conn.relayMessage(m.chat, {scheduledCallCreationMessage: {callType: 'VIDEO', scheduledTimestampMs: 0, title: afk }}, {})}

if (command == 'rob' || command == 'robar') {
if (!m.isGroup) return m.reply(info.group) 
const user = global.db.data.users[m.sender]
const date = global.db.data.users[m.sender].robs + 600000; //600000
if (new Date - global.db.data.users[m.sender].robs < 600000) return m.reply(`${lenguaje.rpg.text6} ${msToTime(date - new Date())}`) 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
else who = m.chat;
if (!who) return m.reply(lenguaje.rpg.rob)
try { 
if (!(who in global.db.data.users)) return m.reply(lenguaje.grupos.text31)
const users = global.db.data.users[who];
let exp = Math.floor(Math.random() * 15) + 10;
let limit = Math.floor(Math.random() * 5) + 3;
const rob = Math.floor(Math.random() * 500);
if (users.limit < 15) return conn.sendMessage(m.chat, {text: `${lenguaje.rpg.rob2} @${who.split`@`[0]} ${lenguaje.rpg.rob3}`, mentions: [who]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});  
if (users.exp < 10) return conn.sendMessage(m.chat, {text: `${lenguaje.rpg.rob2} @${who.split`@`[0]} ${lenguaje.rpg.rob4}`, mentions: [who]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});   
global.db.data.users[m.sender].exp += exp * 1;
global.db.data.users[m.sender].limit += limit * 1;
global.db.data.users[who].exp -= exp * 1;
global.db.data.users[who].limit -= limit * 1;
conn.sendMessage(m.chat, {text: `${lenguaje.rpg.rob5} @${who.split`@`[0]}\n◦ ᴇxᴘ ${exp}\n◦ ᴅɪᴀᴍᴀɴᴛᴇ: ${limit}\n\n${lenguaje.rpg.rob6} @${m.sender.split("@")[0]}`, mentions: [who, m.sender]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
global.db.data.users[m.sender].robs = new Date * 1;
 } catch {
m.reply(lenguaje.rpg.rob7)}}

if (command == 'crime' || command == 'Crime') {
const date = global.db.data.users[m.sender].crime + 3600000; //3600000 = 1 hs
if (new Date - global.db.data.users[m.sender].crime < 3600000) return m.reply(`${usuario.Language === 'es' ? '*《🚓︎》LA POLICIA ESTA VIGILANDO EN ESTE MOMENTO, VUELVE EN:*' : usuario.Language === 'en' ? '*《🚓︎》THE POLICE IS WATCHING AT THIS MOMENT, COME BACK IN:*' : usuario.Language === 'ar' ? '*《🚓︎》الشرطة تراقب في هذه اللحظة، عد إلى الداخل:*' : usuario.Language === 'pt' ? '*《🚓︎》A POLÍCIA ESTÁ DE OLHO NESTE MOMENTO, VOLTE:*' : usuario.Language === 'id' ? '*《🚓︎》POLISI MENONTON SAAT INI, DATANG KEMBALI:*' : usuario.Language === 'rs' ? '*《🚓︎》В ЭТОТ МОМЕНТ ПОЛИЦИЯ НАБЛЮДАЕТ, ЗАХОДИТЕ:*' : usuario.Language} ${msToTime(date - new Date())}`)
const exp = Math.floor(Math.random() * 9000)
const diamond = Math.floor(Math.random() * 90)
const money = Math.floor(Math.random() * 9000)

if (global.db.data.users[m.sender].exp < 0) return m.reply(`《💰》${robar} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp)
if (global.db.data.users[m.sender].limit < 0) return m.reply(`《💰》${robar} ${diamond} 💎 Diamante`).catch(global.db.data.users[m.sender].limit += diamond)
if (global.db.data.users[m.sender].money < 0) return m.reply(`《💰》${robar} ${money} 🪙 Coins`).catch(global.db.data.users[m.sender].money += money) 

let or = ['text', 'text2', 'text3', 'text4']; 
let media = or[Math.floor(Math.random() * 4)]
global.db.data.users[m.sender].crime = new Date * 1;
if (media === 'text') m.reply(`《💰》${robar} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (media === 'text2') m.reply(`《🚓》${robmal} ${exp} XP`).catch(global.db.data.users[m.sender].exp -= exp) 
if (media === 'text3') m.reply(`《💰》${robar}\n\n💎 ${diamond} diamante\n🪙${money} Coins`).catch(global.db.data.users[m.sender].limit += diamond).catch(global.db.data.users[m.sender].money += money) 
if (media === 'text4') m.reply(`《🚓》${robmal}\n\n💎${diamond} diamante\n🪙 ${money} coins`).catch(global.db.data.users[m.sender].limit -= diamond).catch(global.db.data.users[m.sender].money -= money)}

if (command == 'buy' || command == 'buyall') {
let count = command.replace(/^buy/i, '');
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / 450) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
count = Math.max(1, count);
if (global.db.data.users[m.sender].exp >= 450 * count) {
global.db.data.users[m.sender].exp -= 450 * count;
global.db.data.users[m.sender].limit += count;
m.reply(`╔═❖ ${lenguaje.rpg.buy}\n║‣ ${lenguaje.rpg.buy2} ${count}💎\n║‣ ${lenguaje.rpg.buy3} ${450 * count} XP\n╚═══════════════`);
} else m.reply(`${lenguaje.rpg.buy4} *${count}* ${lenguaje.rpg.buy5}`)
}

if (command == 'bal' || command == 'balance' || command == 'diamond') {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
if (!(who in global.db.data.users)) return m.reply(lenguaje.grupos.text31)
conn.sendMessage(m.chat, {text: `•───⧼⧼⧼ 𝙱𝙰𝙻𝙰𝙽𝙲𝙴 ⧽⧽⧽───•

@${who.split('@')[0]} ${user.registered === true ? '✓' : ''} ${usuario.Language === 'es' ? 'Tiene :' : 
usuario.Language === 'en' ? 'Has :' : 
usuario.Language === 'ar' ? ' لديه :' : 
usuario.Language === 'pt' ? 'Tem :' : 
usuario.Language === 'id' ? 'Memiliki :' : 
usuario.Language === 'rs' ? 'Имеет :' : usuario.Language}

*💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴 :* ${user.limit}
*⬆️ 𝙴𝚇𝙿 :* ${user.exp}
*🪙 𝙲𝙾𝙸𝙽𝚂 :* ${user.money}
> ${usuario.Language === 'es' ? 'Afuera del Banco ' : 
usuario.Language === 'en' ? 'Outside the Bank' : 
usuario.Language === 'ar' ? ' خارج البنك' : 
usuario.Language === 'pt' ? 'Fora do Banco' : 
usuario.Language === 'id' ? 'Di Luar Bank' : 
usuario.Language === 'rs' ? 'За пределами банка' : usuario.Language}

*${usuario.Language === 'es' ? '•───⧼⧼⧼ 𝙱𝙰𝙽𝙲𝙾 ⧽⧽⧽───•\n\n🏦 𝙳𝙸𝙽𝙴𝚁𝙾 :' : 
usuario.Language === 'en' ? '•───⧼⧼⧼ BANK ⧽⧽⧽───•\n\n🏦 MONEY:' : 
usuario.Language === 'ar' ? '•───⧼⧼⧼ البنك ⧽⧽⧽───•\n\n🏦 المال:' :  
usuario.Language === 'pt' ? '•───⧼⧼⧼ BANCO ⧽⧽⧽───•\n\n🏦 DINHEIRO:' : 
usuario.Language === 'id' ? '•───⧼⧼⧼ BANK ⧽⧽⧽───•\n\n🏦 UANG:' : 
usuario.Language === 'rs' ? '•───⧼⧼⧼ БАНК ⧽⧽⧽───•\n\n🏦 ДЕНЬГИ:' : usuario.Language}* ${user.banco}
${usuario.Language === 'es' ? '> Adentro del Banco 🏦 \n\n•───────────────•\n\n> 📒 𝐍𝐎𝐓𝐀 : 𝐏𝐮𝐞𝐝𝐞 𝐜𝐨𝐦𝐩𝐫𝐚𝐫 𝐦𝐚𝐬 💎 𝐝𝐢𝐚𝐦𝐚𝐧𝐭𝐞\n> 𝐮𝐬𝐚𝐧𝐝𝐨 𝐥𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐝𝐞 𝐚𝐛𝐚𝐣𝐨: ' : 
usuario.Language === 'en' ? '> Inside the Bank 🏦 \n\n•───────────────•\n\n> 📒 𝐍𝐎𝐓𝐄: 𝐘𝐨𝐮 𝐜𝐚𝐧 𝐛𝐮𝐲 𝐦𝐨𝐫𝐞 💎 𝐝𝐢𝐚𝐦𝐨𝐧𝐝\n> 𝐔𝐬𝐢𝐧𝐠 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐛𝐞𝐥𝐨𝐰:' : 
usuario.Language === 'ar' ? '> داخل البنك 🏦 \n\n•─────────────•\n\n> 📒 ملاحظة: يمكنك شراء المزيد من 💎 الماس\n> باستخدام الأوامر أدناه:' : 
usuario.Language === 'pt' ? '> Dentro do Banco 🏦 \n\n•───────────────•\n\n> 📒 𝐍𝐎𝐓𝐀: 𝐕𝐨𝐜𝐞̂ 𝐩𝐨𝐝𝐞 𝐜𝐨𝐦𝐩𝐫𝐚𝐫 𝐦𝐚𝐢𝐬 💎 𝐝𝐢𝐚𝐦𝐚𝐧𝐭𝐞\n> 𝐔𝐭𝐢𝐥𝐢𝐳𝐚𝐧𝐝𝐨 𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐚𝐛𝐚𝐢𝐱𝐨:' : 
usuario.Language === 'id' ? '> Di Dalam Bank 🏦 \n\n•────────────────•\n\n> 📒 CATATAN: Anda dapat membeli lebih banyak 💎 berlian\n> Menggunakan perintah di bawah ini:' : 
usuario.Language === 'rs' ? '> Внутри Банка 🏦 \n\n•──────────────•\n\n> 📒 ПРИМЕЧАНИЕ: Вы можете купить больше 💎 алмазов\n> Используя команды ниже:' : usuario.Language}
> • ${prefix}buy <cantidad>
> • ${prefix}buyall`, mentions: [who]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'dep' || command == 'depositar') {    
let who;
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
else who = m.sender;
let users =  global.db.data.users[m.sender];
if (!args[0]) return m.reply(`[ ⚠️ ] ${usuario.Language === 'es' ? '*Ingresa la cantidad para agregar a sus cuenta bancaria*' : 
usuario.Language === 'en' ? '*Enter the amount to add to your bank account*' : 
usuario.Language === 'ar' ? '*أدخل المبلغ المراد إضافته إلى حسابك البنكي*' : 
usuario.Language === 'pt' ? '*Insira o valor a ser adicionado à sua conta bancária*' : 
usuario.Language === 'id' ? '*Masukkan jumlah yang ingin ditambahkan ke rekening bank Anda*' : 
usuario.Language === 'rs' ? '*Введите сумму для пополнения вашего банковского счета*' : usuario.Language}`);
if (args[0] == '--all') {
let count = parseInt(users.limit);
users.limit -= count * 1
users.banco += count * 1
await m.reply(`*[ 🏦 ] ${usuario.Language === 'es' ? 'Has agregados' : usuario.Language === 'en' ? 'You have added' : usuario.Language === 'ar' ? ' لقد قمت بإضافة' : usuario.Language === 'pt' ? 'você foi adicionado' : usuario.Language === 'id' ? 'Anda telah menambahkan' : usuario.Language === 'rs' ? 'Вы добавили' : usuario.Language} (${count}) ${usuario.Language === 'es' ? 'diamante 💎 al Banco' : usuario.Language === 'en' ? 'diamond 💎 to the Bank' : usuario.Language === 'ar' ? ' الماس 💎 للبنك' : usuario.Language === 'pt' ? 'diamante 💎 para o Banco' : usuario.Language === 'id' ? 'berlian 💎 ke Bank' : usuario.Language === 'rs' ? 'алмаз 💎 в банк' : usuario.Language}.*`);
return !0;
};
if (!Number(args[0])) return m.reply(`[ ⚠️ ] ${usuario.Language === 'es' ? '*Falto en número de cantidad de diamante 💎*' : usuario.Language === 'en' ? '*Missing diamond quantity number 💎*' : usuario.Language === 'ar' ? '*رقم الكمية الماسية مفقود 💎*' : usuario.Language === 'pt' ? '*Faltando o número da quantidade de diamantes 💎*' : usuario.Language === 'id' ? '*Nomor kuantitas berlian tidak ada 💎*' : usuario.Language === 'rs' ? '*Отсутствует номер количества бриллиантов 💎*' : usuario.Language}`);
let count = parseInt(args[0]);
if (!users.limit) return m.reply(`${usuario.Language === 'es' ? '*Esta pobre no tener suficiente diamante*' : usuario.Language === 'en' ? '*It"s poor not to have enough diamond*' : usuario.Language === 'ar' ? '*من السيء ألا يكون لديك ما يكفي من الماس*' : usuario.Language === 'pt' ? '*É ruim não ter diamantes suficientes*' : usuario.Language === 'id' ? '*Sangat disayangkan jika tidak memiliki cukup berlian*' : usuario.Language === 'rs' ? '*Плохо, когда не хватает алмазов*' : usuario.Language}`);
if (users.limit < count) return m.reply(`${usuario.Language === 'es' ? '*Che no sabes cuanto dinero tiene el tu cartera? usar el comando:*' : usuario.Language === 'en' ? '*You don"t know how much money is in your wallet? use the command:*' : usuario.Language === 'ar' ? '* أنت لا تعرف كم من المال في محفظتك؟ استخدم الأمر:*' : usuario.Language === 'pt' ? '*Você não sabe quanto dinheiro tem na sua carteira? use o comando:*' : usuario.Language === 'id' ? '*Anda tidak tahu berapa banyak uang yang ada di dompet Anda? gunakan perintah:*' : usuario.Language === 'rs' ? '*Вы не знаете, сколько денег в вашем кошельке? используйте команду:*' : usuario.Language} #bal`);
users.limit -= count * 1;
users.banco += count * 1;
await m.reply(`*[ 🏦 ] ${usuario.Language === 'es' ? 'Has ingresando' : 
usuario.Language === 'en' ? 'You have entered' : 
usuario.Language === 'ar' ? ' أنت قد دخلت' : 
usuario.Language === 'pt' ? 'Você entrou' : 
usuario.Language === 'id' ? 'Anda telah masuk' : 
usuario.Language === 'rs' ? 'Вы вошли' : usuario.Language} ${count} ${usuario.Language === 'es' ? 'diamante al Banco' : 
usuario.Language === 'en' ? 'diamond to the bank' : 
usuario.Language === 'ar' ? ' الماس إلى البنك' : 
usuario.Language === 'pt' ? 'diamante para o banco' : 
usuario.Language === 'id' ? 'berlian ke bank' : 
usuario.Language === 'rs' ? 'бриллиант в банк' : usuario.Language}*`)}
  
if (command == 'retirar' || command == 'toremove') {     
let user =  global.db.data.users[m.sender]
if (!args[0]) return m.reply(`[ ⚠️ ] ${usuario.Language === 'es' ? '*ingresa la cantidad a retirar*' : 
usuario.Language === 'en' ? '*enter the amount to withdraw*' : 
usuario.Language === 'ar' ? '*أدخل المبلغ المراد سحبه*' : 
usuario.Language === 'pt' ? '*insira o valor a ser sacado*' : 
usuario.Language === 'id' ? '*masukkan jumlah yang akan ditarik*' : 
usuario.Language === 'rs' ? '*введите сумму для вывода*' : usuario.Language}`);
if (args[0] == '--all') {
let count = parseInt(user.banco);
user.banco -= count * 1
user.limit += count * 1
await m.reply(`*[ 🏦 ] ${usuario.Language === 'es' ? 'Retiraste' : usuario.Language === 'en' ? 'You took it back' : usuario.Language === 'ar' ? ' لقد استعادتها' : usuario.Language === 'pt' ? 'Retiraste' : usuario.Language === 'id' ? 'Anda mengambilnya kembali' : usuario.Language === 'rs' ? 'Ты забрал это обратно' : usuario.Language} (${count}) ${usuario.Language === 'es' ? 'diamante 💎 del Banco' : 
usuario.Language === 'en' ? 'diamond 💎 from the Bank' : 
usuario.Language === 'ar' ? ' الماس 💎 من البنك' : 
usuario.Language === 'pt' ? 'diamante 💎 do Banco' : 
usuario.Language === 'id' ? 'berlian 💎 dari Bank' : 
usuario.Language === 'rs' ? 'бриллиант 💎 из банка' : usuario.Language}.*`);
return !0 
}
if (!Number(args[0])) return m.reply(`${usuario.Language === 'es' ? 'La cantidad debe ser un mumero.' : 
usuario.Language === 'en' ? 'The amount must be a number.' : 
usuario.Language === 'ar' ? ' يجب أن يكون المبلغ رقمًا.' : 
usuario.Language === 'pt' ? 'O valor deve ser um número.' : 
usuario.Language === 'id' ? 'Jumlahnya harus berupa angka.' : 
usuario.Language === 'rs' ? 'Сумма должна быть числом.' : usuario.Language}`); 
let count = parseInt(args[0]);
if (!user.banco) return m.reply(`${usuario.Language === 'es' ? 'Hey fantasma 👻, no tener esa cantidad de dinero el banco 🥲' : 
usuario.Language === 'en' ? 'Hey ghost 👻, the bank doesn"t have that amount of money 🥲' :  
usuario.Language === 'ar' ? ' أيها الشبح 👻، البنك ليس لديه هذا المبلغ من المال 🥲' : 
usuario.Language === 'pt' ? 'Ei fantasma 👻, o banco não tem essa quantia de dinheiro 🥲' : 
usuario.Language === 'id' ? 'Hei hantu 👻, bank tidak punya uang sebanyak itu 🥲' : 
usuario.Language === 'rs' ? 'Эй, призрак 👻, в банке нет такой суммы денег 🥲' : usuario.Language}`);
if (user.banco < count) return m.reply(`${usuario.Language === 'es' ? '*Che no sabes cuanto dinero tiene el tu cartera? usar el comando:*' : usuario.Language === 'en' ? '*You don"t know how much money is in your wallet? use the command:*' : usuario.Language === 'ar' ? '* أنت لا تعرف كم من المال في محفظتك؟ استخدم الأمر:*' : usuario.Language === 'pt' ? '*Você não sabe quanto dinheiro tem na sua carteira? use o comando:*' : usuario.Language === 'id' ? '*Anda tidak tahu berapa banyak uang yang ada di dompet Anda? gunakan perintah:*' : usuario.Language === 'rs' ? '*Вы не знаете, сколько денег в вашем кошельке? используйте команду:*' : usuario.Language} #bal`);
user.banco -= count * 1
user.limit += count * 1
await m.reply(`*[ 🏦 ] ${usuario.Language === 'es' ? 'Has Retirado' : usuario.Language === 'en' ? 'You have withdrawn' : usuario.Language === 'ar' ? ' لقد انسحبت' : usuario.Language === 'pt' ? 'Você se retirou' : usuario.Language === 'id' ? 'Anda telah menarik diri' : usuario.Language === 'rs' ? 'Вы отозвали' : usuario.Language} (${count}) ${usuario.Language === 'es' ? 'dinero del Banco.' : usuario.Language === 'en' ? 'Money of the bank.' : usuario.Language === 'ar' ? ' أموال البنك.' : usuario.Language === 'pt' ? 'Dinheiro do banco.' : usuario.Language === 'id' ? 'Uang bank.' : usuario.Language === 'rs' ? 'Деньги банка.' : usuario.Language}*`)}

if (command == 'minar' || command == 'mine') {
const date = global.db.data.users[m.sender].lastmiming + 600000;
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return m.reply(`*${lenguaje.rpg.text9} ${msToTime(date - new Date())} ${lenguaje.rpg.text10}*`) 
const exp = Math.floor(Math.random() * 1500)
global.db.data.users[m.sender].exp += exp;
m.reply(`*${minar} ${exp} XP*`)
global.db.data.users[m.sender].lastmiming = new Date * 1;
}

if (command == 'minar2' || command == 'mine2') {
const date = global.db.data.users[m.sender].lastmiming2 + 3600000;
if (new Date - global.db.data.users[m.sender].lastmiming2 < 3600000) return m.reply(`*${lenguaje.rpg.text9} ${msToTime(date - new Date())} ${lenguaje.rpg.text10}*`)
//const exp = Math.floor(Math.random() * 2500)
const diamond = Math.floor(Math.random() * 60)
const money = Math.floor(Math.random() * 2500)
//global.db.data.users[m.sender].exp += exp
global.db.data.users[m.sender].limit += diamond
global.db.data.users[m.sender].money += money
m.reply(`${minar}\n${diamond} 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄 💎\n${money} 𝐂𝐎𝐈𝐍𝐒 🪙`)
m.react('💎') 
global.db.data.users[m.sender].lastmiming2 = new Date * 1;
}

if (command == 'trabajar' || command == 'work' || command == 'w') {
let hasil = Math.floor(Math.random() * 3000)
//let dono = Math.floor(Math.random() * 40)
let time = global.db.data.users[m.sender].lastwork + 3600000 //3600000
if (new Date - global.db.data.users[m.sender].lastwork < 3600000) return m.reply(`${lenguaje.rpg.text12}\n\n*${lenguaje.rpg.text9}* ${msToTime(time - new Date())} ${lenguaje.rpg.text13}`) 
let anu = (await axios.get('https://raw.githubusercontent.com/fgmods/fg-team/main/games/work.json')).data
let res = pickRandom(anu)
global.db.data.users[m.sender].exp += hasil
//global.db.data.users[m.sender].limit += dono
m.reply(`⚒️ ${res.fgwork} *${hasil} XP*`)
global.db.data.users[m.sender].lastwork = new Date * 1
}

if (command == 'claim' || command == 'daily') {
let time = global.db.data.users[m.sender].lastclaim + 7200000
if (new Date - global.db.data.users[m.sender].lastclaim < 7200000) return m.reply(`${lenguaje.rpg.text14} ${msToTime(time - new Date())}`) 
const exp = Math.floor(Math.random() * 900)
const limit = Math.floor(Math.random() * 30)
const money = Math.floor(Math.random() * 800)
global.db.data.users[m.sender].limit += limit;
global.db.data.users[m.sender].money += money
global.db.data.users[m.sender].exp += exp
m.reply(`${lenguaje.rpg.text15}\n🆙 *xᴘ* : ${exp}\n💎 *ᴅɪᴀᴍᴀɴᴛᴇ :* ${limit}\n🪙 *ᴄᴏɪɴs :* ${money}`)
global.db.data.users[m.sender].lastclaim = new Date * 1
}

if (command == 'perfil') {
avatar = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let { money, exp, role, limit, level, registered, age} = global.db.data.users[m.sender]
conn.sendMessage(m.chat, { image: { url: avatar }, caption: `${lenguaje.rpg.pp}

${lenguaje.rpg.pp2} ${pushname} ${registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''}
${lenguaje.rpg.pp3} wa.me/${sender.split("@")[0]} ${registered ? '\n*🧐 EDAD :* ' + age + ' años' : ''}
${lenguaje.rpg.pp4} ${limit}
${lenguaje.rpg.pp5} ${level}
*⬆️ EXP :* ${exp}
${lenguaje.rpg.pp6} ${role}
${lenguaje.rpg.pp7} ${registered ? 'Si': 'No'}`}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react(done)}

if (command == 'levelup' || command == 'nivel') {
//let name = conn.getName(m.sender);  
let user = global.db.data.users[m.sender]; 
if (!canLevelUp(user.level, user.exp, global.multiplier)) { 
let {min, xp, max} = xpRange(user.level, global.multiplier);
return m.reply(`╭╌「 ${lenguaje.rpg.level} 」
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
├ ${lenguaje.rpg.level2}
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
├─ ${lenguaje.rpg.level3} ${pushname}
├─ ❐ *XP 🆙:* ${user.exp - min}/${xp}
├─ ${lenguaje['smsAutonivel3']()} ${user.level}
├─ ${lenguaje['smsAutonivel6']()} ${user.role}
╰╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌

${lenguaje.rpg.level4} *${max - user.exp}* ${lenguaje.rpg.level5}`)} 
const before = user.level * 1; 
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++; 
if (before !== user.level) {
const str = `╭╌「 *LEVEL UP 🎊* 」
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
├『 🥳 ${pushname} ${lenguaje.rpg.level6}
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
├─ ${lenguaje['smsAutonivel4']()} ${before}
├─ ${lenguaje['smsAutonivel5']()} ${user.level}
├─ ${lenguaje['smsAutonivel6']()} ${user.role}
╰╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌

${lenguaje.rpg.level7}`.trim()
return m.reply(str)}}

if (command == 'cofre') {
if (global.db.data.users[m.sender].level < 9) return m.reply(`${lenguaje['nivel']()} 9 ${lenguaje['nivel2']()} ${prefix}nivel`) 
const date = global.db.data.users[m.sender].lastcofre + 86400000; //10 hs
if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) return m.reply(`${lenguaje.rpg.text16} ${msToTime(date - new Date())}`) 
exp = Math.floor(Math.random() * 9999)
limit = Math.floor(Math.random() * 70)
trash = Math.floor(Math.random() * 600)
potion = Math.floor(Math.random() * 300)
money = Math.floor(Math.random() * 8500)
global.db.data.users[m.sender].exp += exp
global.db.data.users[m.sender].limit += limit
global.db.data.users[m.sender].trash += trash
global.db.data.users[m.sender].potion += potion
global.db.data.users[m.sender].money += money
m.reply(`╔══🎉═🎉═🎉══⬣\n║${lenguaje.rpg.text17}\n║┈┈┈┈┈┈┈┈┈┈┈┈┈\n║⚡${exp} 𝙴𝚇𝙿\n║💎 ${limit} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴\n║🗑️ ${trash} 𝙱𝙰𝚂𝚄𝚁𝙰\n║🥤 ${potion} 𝙿𝙾𝙲𝙸𝙾𝙽𝙴𝚂\n║🪙 ${money} 𝙲𝙾𝙸𝙽𝚂\n╚═════════════════⬣`)
global.db.data.users[m.sender].lastcofre = new Date * 1;
}}

//función pickrandow
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) {
    return (a, i, b) => {
      return {...b[i], [property]: a[property] === undefined ? _default : a[property]};
    };
  } else return (a) => a === undefined ? _default : a;
}

function enumGetKey(a) {
  return a.jid;
}

//temporarily
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " Horas " + minutes + " Minutos " + seconds + " Segundos "
}

function isNumber(x) {
    return !isNaN(x)
}

module.exports = { reg, rpg }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})