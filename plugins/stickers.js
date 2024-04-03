/*require('../main.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const cheerio = require('cheerio')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function stickers(m, command, conn, mime, quoted, args, text, lolkeysapi, fkontak) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (global.db.data.users[m.sender].banned) return m.reply(`_🚫ESTA BANEADO POR MI PROPIETARIO_`) 
if (command == 's' || command == 'sticker') {
if (/image/.test(mime)) {  
conn.fakeReply(m.chat, `${lenguaje.sticker.text}`, '0@s.whatsapp.net', 'No haga spam')
media = await quoted.download()  
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
await fs.unlinkSync(encmedia)  
} else if (/video/.test(mime)) {  
if ((quoted.msg || quoted).seconds > 20) return m. reply(lenguaje.sticker.text1)  
media = await quoted.download()  
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
await new Promise((resolve) => setTimeout(resolve, 2000));
await fs.unlinkSync(encmedia)  
} else {  
m.reply(lenguaje.sticker.text2)}}

if (command == 'wm' || command == 'take') {
if (!args.join(" ")) return m.reply(lenguaje.sticker.text3)
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam') 
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
conn.downloadAndSaveMediaMessage(quoted, "gifee")
conn.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{ quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m. reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
} else {
m.reply(lenguaje.sticker.text2)}}

if (command == 'attp') {
if (!text) return m.reply(lenguaje.sticker.text4)
m.reply(lenguaje.sticker.text5)
let link = `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${text}`
await conn.sendMessage(m.chat, { sticker: { url: link } }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1 }

if (command == 'dado') {
let dir = `https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkeysapi}`
conn.sendMessage(m.chat, { sticker: { url: dir } }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)}

if (command == 'qc') {
let text
if (args.length >= 1) {
text = args.slice(0).join(" ");
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text;
} else return m.reply(`*⚠️ Y el texto?, Agregue un texto!*`) 
if (!text) return m.reply(`*⚠️ Y el texto?, agregue un texto!*`)
const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender; 
const mentionRegex = new RegExp(`@${who.split('@')[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`, 'g');
const mishi = text.replace(mentionRegex, '');
if (mishi.length > 35) return m.reply('*⚠️ El texto no puede tener mas de 35 caracteres*');
const pp = await conn.profilePictureUrl(who).catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
const nombre = m.pushName || "Sin nombre" 
const obj = {"type": "quote", "format": "png", "backgroundColor": "#000000", "width": 512, "height": 768, "scale": 2, "messages": [{"entities": [], "avatar": true, "from": {"id": 1, "name": `${who?.name || nombre}`, "photo": {url: `${pp}`}}, "text": mishi, "replyMessage": {}}]};
const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {headers: {'Content-Type': 'application/json'}});
const buffer = Buffer.from(json.data.result.image, 'base64');
let stiker = await conn.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, author: global.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})}}

module.exports = { stickers }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})*/

// codigo adaptado por: https://github.com/GataNina-Li & https://github.com/elrebelde21

import {randomBytes} from 'crypto';

const handler = async (m, {conn, command, participants, usedPrefix, text}) => {
  if (!text) return '*😻 Que Texto?*';
  const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${conn.user.jid.split('@')[0]}:${conn.user.jid.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
  const cc4 = text ? m : m.quoted ? await m.getQuotedObj() : false || m;
  const teks4 = text ? text : cc4.text;
  const groups2 = Object.keys(await conn.groupFetchAllParticipating());
  const chats2 = Object.keys(global.db.data.users).filter((user) => user.endsWith('@s.whatsapp.net'));
  await conn.reply(m.chat, '*🥀 Enviando A Todos Los Chats 🧸*', m);
  const start2 = new Date().getTime();
  const usersTag2 = participants.map((u) => conn.decodeJid(u.id));
  let totalPri2 = 0;
  for (let i = 0; i < groups2.length; i++) {
    const group = groups2[i];
    const delay = i * 4000; // 4 seg
    setTimeout(async () => {
      await conn.reply(group, `*✨ 𝖢𝗈𝗆𝗎𝗇𝗂𝖼𝖺𝖽𝗈 😻*\n\n` + teks4, {mentions: usersTag2}, {quoted: fkontak});
    }, delay);
  }
  for (const user of chats2) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 segundos
    await conn.reply(user, `*✨ 𝖢𝗈𝗆𝗎𝗇𝗂𝖼𝖺𝖽𝗈 😻*\n\n` + teks4, fkontak, null);
    totalPri2++;
    if (totalPri2 >= 500000) {
      break;
    }
  }
  const end2 = new Date().getTime();
  const totalPrivate2 = chats2.length;
  const totalGroups2 = groups2.length;
  const total2 = totalPrivate2 + totalGroups2;
  let time2 = Math.floor((end2 - start2) / 1000);
  if (time2 >= 60) {
    const minutes = Math.floor(time2 / 60);
    const seconds = time2 % 60;
    time2 = `${minutes} minutos y ${seconds} segundos`;
  } else {
    time2 = `${time2} segundos`;
  }
  await m.reply(`𝖬𝖾𝗇𝗌𝖺𝗃𝖾 𝖤𝗇𝗏𝗂𝖺𝖽𝗈 𝖠:
\`\`\`𝗖𝗵𝗮𝘁 𝗣𝗿𝗶𝘃𝗮𝗱𝗼𝘀 >> ${totalPrivate2}\`\`\`
\`\`\`𝗖𝗵𝗮𝘁 𝗚𝗿𝘂𝗽𝗼𝘀  >>   ${totalGroups2}\`\`\`
\`\`\`𝙲𝙷𝙰𝚃𝚂 𝚃𝙾𝚃𝙰𝙻𝙴𝚂  >>   ${total2}\`\`\`\n\n*𝖳𝗂𝖾𝗆𝗉𝗈 𝖳𝗈𝗍𝖺𝗅 𝖣𝖾 𝖤𝗇𝗏𝗂𝗈 ${time2}*\n${totalPri2 >= 500000 ? `\n*😻 𝘉𝘰𝘵 - 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦-𝘔𝘋*` : ''}`);
};
handler.help = ['broadcast', 'bc'].map((v) => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^(comunicar)$/i;

handler.owner = true;

export default handler;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

const randomID = (length) => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length);