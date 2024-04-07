//Código desde cero y comentarios hecho por: 
// @gata_dios   
// @Skidy89  
// @elrebelde21 
                      
//--------------------[ IMPORTACIONES ]-----------------------          
const baileys = require('@whiskeysockets/baileys'); // trabajar a través de descargas por Whatsapp 
const { WaMessageStubType, WA_DEFAULT_EPHEMERAL, BufferJSON, areJidsSameUser, downloadContentFromMessage, generateWAMessageContent, generateWAMessageFromContent, generateWAMessage, prepareWAMessageMedia, getContentType,  relayMessage} = require('@whiskeysockets/baileys'); // Importa los objetos 'makeWASocket' y 'proto' desde el módulo '@whiskeysockets/baileys'   
const { default: makeWASocket, proto } = require("@whiskeysockets/baileys") 
const moment = require('moment-timezone') // Trabajar con fechas y horas en diferentes zonas horarias
const gradient = require('gradient-string') // Aplicar gradientes de color al texto     
const { exec, spawn, execSync } =  require("child_process")// Función 'execSync' del módulo 'child_process' para ejecutar comandos en el sistema operativo 
const chalk = require('chalk') // Estilizar el texto en la consola  
const os = require('os') // Proporciona información del sistema operativo 
const fs = require('fs') // Trabajar con el sistema de archivos    
const fetch = require('node-fetch')
const axios = require('axios') 
const {fileURLToPath} = require('url') 
const cheerio = require('cheerio')
const yts = require('yt-search') 
const gpt = require('api-dylux')
const util = require('util')
const createHash = require('crypto') 
const mimetype = require("mime-types")  
const ws = require('ws')
const JavaScriptObfuscator = require('javascript-obfuscator')
const webp = require("node-webpmux")
const Jimp = require('jimp')
const { File } = require("megajs")
const speed = require("performance-now")
const ffmpeg = require("fluent-ffmpeg")
const similarity = require('similarity')   
const translate = require('@vitalets/google-translate-api') 
const { canLevelUp, xpRange } = require('./libs/levelling.js')
const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, msToTime, downloadMediaMessage, convertirMsADiasHorasMinutosSegundos, pickRandom, getUserBio, asyncgetUserProfilePic} = require('./libs/fuctions') 
const {jadibot, listJadibot, killJadibot} = require('./plugins/serbot.js')    
const {menu} = require('./plugins/menu.js') 
const {info} = require('./plugins/info.js')
const {reg, rpg} = require('./plugins/rpg.js') 
const {game, game2, game3} = require('./plugins/juegos.js')   
const {buscadores} = require('./plugins/buscadores.js')
const {efec, efect2, convertidores} = require('./plugins/convertidores.js')  
const {grupo} = require('./plugins/grupos.js')
const {nsfw} = require('./plugins/nsfw.js')  
const {randow, randow2} = require('./plugins/randow.js') 
const {descarga, descarga2} = require('./plugins/descargas.js')   
const {stickers} = require('./plugins/stickers.js') 
const {owner} = require('./plugins/propietario.js')  
const {enable} = require('./plugins/enable.js')
//global.db.data.sticker = global.db.data.sticker || {} 
let user = global.db.data.users[m.sender]
let tebaklagu = global.db.data.game.tebaklagu = []
let kuismath = global.db.data.game.math = []
let tekateki = global.db.data.game.tekateki = []

const msgs = (message) => {  
if (message.length >= 10) { 
return `${message.substr(0, 500)}` 
} else {  
return `${message}`}}
const getFileBuffer = async (mediakey, MediaType) => {  
const stream = await downloadContentFromMessage(mediakey, MediaType)  
let buffer = Buffer.from([])  
for await(const chunk of stream) {  
buffer = Buffer.concat([buffer, chunk]) }  
return buffer 
}   
  
module.exports = conn = async (conn, m, chatUpdate, mek, store) => {  
var budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
  
//----------------------[ ATRIBUTOS ]-------------------------
if (m.key.id.startsWith("BAE5")) return  
var body = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[./*#]/gi.test(body) ? body.match(/^[/.*#]/gi)[0] : ""
//var prefix = body.match(/^[/.*#]/)   
const isCmd = body.startsWith(prefix) 
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const args = body.trim().split(/ +/).slice(1) 
const from = m.chat 
const msg = JSON.parse(JSON.stringify(m, undefined, 2)) 
const content = JSON.stringify(m.message) 
const type = m.mtype 
let t = m.messageTimestamp 
const pushname = m.pushName || "Sin nombre" 
const botnm = conn.user.id.split(":")[0] + "@s.whatsapp.net"  
const _isBot = conn.user.jid
const userSender = m.key.fromMe ? botnm : m.isGroup && m.key.participant.includes(":") ? m.key.participant.split(":")[0] + "@s.whatsapp.net" : m.key.remoteJid.includes(":") ? m.key.remoteJid.split(":")[0] + "@s.whatsapp.net" : m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid  
const isCreator = [conn.decodeJid(conn.user.id), ...global.owner.map(([numero]) => numero)].map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const isOwner = isCreator || m.fromMe;
const isMods = isOwner || global.mods.map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
//const isCreator = global.owner.map(([numero]) => numero.replace(/[^\d\s().+:]/g, '').replace(/\s/g, '') + '@s.whatsapp.net').includes(userSender) 
const itsMe = m.sender == conn.user.id ? true : false 
const text = args.join(" ") 
const q = args.join(" ") 
const quoted = m.quoted ? m.quoted : m 
const sender = m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid 
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const mime = (quoted.msg || quoted).mimetype || ''  
const isMedia = /image|video|sticker|audio/.test(mime)
const mentions = []  
if (m.message[type].contextInfo) {   
if (m.message[type].contextInfo.mentionedJid) {  
const msd = m.message[type].contextInfo.mentionedJid  
for (let i = 0; i < msd.length; i++) {  
mentions.push(msd[i])}}}
  
//----------------------[ FUNCION/GRUPO ]-------------------------
const groupMetadata = m.isGroup ? await conn.groupMetadata(from) : ''
const groupName = m.isGroup ? groupMetadata.subject : '' 
const participants = m.isGroup ? await groupMetadata.participants : '' 
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : '' 
const isBotAdmins = m.isGroup ? groupAdmins.includes(botnm) : false  
const isGroupAdmins = m.isGroup ? groupAdmins.includes(userSender) : false 
const isBaneed = m.isGroup ? blockList.includes(userSender) : false 
const isPremium = m.isGroup ? premium.includes(userSender) : false   
const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
const thumb = fs.readFileSync("./media/menu2.jpg")
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${userSender.split('@')[0]}:${userSender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: "ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ", orderTitle: "sᴜᴘᴇʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ", sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname, jpegThumbnail: null}}}
const kick = function (from, orangnya) {   
for (let i of orangnya) {   
conn.groupParticipantsUpdate(m.chat, [i], "remove")}}  
const time = moment(Number(msg.messageTimestamp + "000")).locale("es-mx").tz("America/Asuncion").format('MMMM Do YYYY, h:mm:ss a')   
  
const reply = (text) => {  
m.reply(text)} 
const sendAdMessage = (text, title, body, image, url) => { conn.sendMessage(m.chat, {text: text, contextInfo: { externalAdReply: { title: title, body: body, mediaUrl: url, sourceUrl: url, previewType: 'PHOTO', showAdAttribution: true, thumbnail: image, sourceUrl: url }}}, {})}  
const sendImage = ( image, caption ) => { conn.sendMessage(m.chat, { image: image, caption: caption }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}  
const sendImageAsUrl = ( url, caption ) => { conn.sendMessage(m.chat, { image:  {url: url }, caption: caption }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}  

//-------------[ TIPOS DE MENSAJES Y CITADOS ]----------------
const isAudio = type == 'audioMessage' // Mensaje de Audio  
const isSticker = type == 'stickerMessage' // Mensaje de Sticker  
const isContact = type == 'contactMessage' // Mensaje de Contacto  
const isLocation = type == 'locationMessage' // Mensaje de Localización   
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')  
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')  
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')  
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')  
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')  
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message') // Mensaje citado de cualquier tipo  
const isViewOnce = (type === 'viewOnceMessage') // Verifica si el tipo de mensaje es (mensaje de vista única)  
   
// Responder cmd con medios
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {userJid: conn.user.id, quoted: m.quoted && m.quoted.fakeObj })
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id 
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {...chatUpdate, messages: [proto.WebMessageInfo.fromObject(messages)], type: 'append' }
conn.ev.emit('messages.upsert', msg)}
   
//--------------------[ INFO CONSOLE ]-----------------------
if (m.message) {
console.log(chalk.bold.cyanBright(`▣────────────···\n│+${conn.user.jid.split`@`[0]} ➢ ${botname} ${conn.user.id == global.numBot2 ? '' : '(SubBot)'} ${vs}`), 
chalk.bold.magenta(`\n│────────────\n│⏰${lenguaje.consola.text} `) + chalk.magentaBright(new Date().toLocaleString('es-ES', { timeZone: 'America/Argentina/Buenos_Aires' }),
chalk.bold.red(`\n️│🏷️ ${lenguaje.consola.text1} `) + chalk.bold.white(`[${conn.public ? 'Publico' : 'Privado'}]`), 
chalk.bold.yellow(`\n│📑${lenguaje.consola.text2} `) + chalk.yellowBright(`${type}`),  
m.isGroup ? chalk.bold.greenBright(`\n│📤${lenguaje.consola.text4} `) + chalk.greenBright(groupName) + ' ➜ ' + gradient.rainbow(from) : chalk.bold.greenBright(`\n│📥${lenguaje.consola.text5}`, userSender), 
chalk.bold.cyan(`\n│📊${lenguaje.consola.text3} `) + chalk.cyanBright(pushname) + ' ➜', gradient.rainbow(userSender), 
chalk.bold.white(`\n│💬${lenguaje.consola.text6}`) + chalk.whiteBright(`\n▣────────────···\n${msgs(m.text)}\n`))
)}          

//--------------------[ AUTOBIO ]----------------------- 
/*if (global.db.data.settings[numBot].autobio) {
let setting = global.db.data.settings[numBot]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
var timestamp = speed();   
var latensi = speed() - timestamp 
let text = [`${lenguaje.Bio.text} ${Object.keys(global.db.data.users).length} ${lenguaje.Bio.text2} ${latensi.toFixed(4)} 🚀`, `${lenguaje.Bio.text3} ${runtime(process.uptime())}\n\n${lenguaje.Bio.text4}`, `${lenguaje.Bio.text5}`, `👑 NovaBot uso: ${conn.public ? 'Publico' : 'Privado'} | ${lenguaje.Bio.text6} ${runtime(process.uptime())} | ${lenguaje.Bio.text7} ${Object.keys(global.db.data.users).length}`]
let bio = text[Math.floor(Math.random() * text.length)]
try {
await conn.updateProfileStatus(bio)
//await delay(3 * 3000) 
//await conn.updateProfilePicture(numBot, { url: "https://telegra.ph/file/84b0bad9adbbd5ed2b95e.jpg" })
setting.status = new Date() * 1 
} catch {
console.log(`[𝚄𝙿𝙳𝙰𝚃𝙴]\n𝙿𝚒𝚗𝚐: ${latensi.toFixed(4)}`) 
}}} */
  
//--------------------[ AUTOREAD ]-----------------------
if (!conn.autoread && m.message && prefix) {
//await delay(1 * 1000) 
await conn.sendPresenceUpdate('composing', m.chat)
conn.readMessages([m.key])}
          
//--------------------[ ANTIFAKES ]-----------------------
if (global.db.data.chats[m.chat].antifake && !isGroupAdmins) {	
let forbidPrefixes = ["1", "994", "48", "43", "40", "41", "49"];
for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
m.reply(`${lenguaje['smsAntiFake']()}`, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}}
if (global.db.data.chats[m.chat].antiarabe && !isGroupAdmins) {
let forbidPrefixes = ["212", "265", "234", "258", "263", "967", "20", "92", "91"];
for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
m.reply(`${lenguaje['smsAntiArabe']()}`, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}} 

//--------------------[ ANTILINK ]-----------------------
if (global.db.data.chats[m.chat].AntiYoutube && !isCreator) {
if (budy.includes("https://youtu.be/") || budy.includes("https://youtube.com/")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`${user.Language === 'es' ? '*LINK DE YOUTUBE DETECTADO 📢*' : user.Language === 'en' ? '*YOUTUBE LINK DETECTED 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط اليوتيوب 📢*' : user.Language === 'pt' ? '*LINK DE YOUTUBE DETECTADO 📢' : user.Language === 'id' ? '*LINK YOUTUBE TERDETEKSI 📢' : user.Language === 'rs' ? '*ОБНАРУЖЕНА ССЫЛКА НА ЮТУБ 📢' : user.Language}\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntInstagram && !isCreator) {
if (budy.includes("https://www.instagram.com/")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`${user.Language === 'es' ? '*LINK DE INSTAGRAM DETECTADO 📢*' : user.Language === 'en' ? '*INSTAGRAM LINK DETECTED 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط الانستغرام 📢*' : user.Language === 'pt' ? '*LINK DE INSTAGRAM DETECTADO 📢*' : user.Language === 'id' ? '*LINK INSTAGRAM TERDETEKSI 📢*' : user.Language === 'rs' ? '*ОБНАРУЖЕНА ССЫЛКА НА INSTAGRAM 📢*' : user.Language}\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntiFacebook && !isCreator) {
if (budy.includes("https://facebook.com/")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`${user.Language === 'es' ? '*LINK DE FACEBOOK DETECTADO 📢*' : user.Language === 'en' ? '*LINK DE FACEBOOK DETECTADO 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط الفيسبوك 📢*' : user.Language === 'pt' ? '*LINK DO FACEBOOK DETECTADO 📢*' : user.Language === 'id' ? '*LINKFACEBOOK TERDETEKSI 📢*' : user.Language === 'rs' ? '*ОБНАРУЖЕНА ССЫЛКА НА FACEBOOK 📢*' : user.Language}\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntiTelegram && !isCreator) {
if (budy.includes("https://t.me/")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text: `${user.Language === 'es' ? '*LINK DE TELEGRAM DETECTADO 📢*' : user.Language === 'en' ? '*TELEGRAM LINK DETECTED 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط التليجرام 📢*' : user.Language === 'pt' ? '*LINK DE TELEGRAM DETECTADO 📢*' : user.Language === 'id' ? '*LINK TELEGRAM TERDETEKSI 📢*' : user.Language === 'rs' ? '*ОБНАРУЖЕНА ССЫЛКА НА ТЕЛЕГРАММУ 📢*' : user.Language}\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntiTiktok && !isCreator) {
if (budy.match("https://www.tiktok.com/") || budy.match("https://vm.tiktok.com/")) {
//f (!isCreator) return m.reply(`Es mi creador Salvador`) 
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
conn.sendMessage(m.chat, {text:`${user.Language === 'es' ? '*LINK DE TIKTOK DETECTADO 📢*' : user.Language === 'en' ? '*TIKTOK LINK DETECTED 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط التيك توك 📢*' : user.Language === 'pt' ? '*LINK DO TIKTOK DETECTADO 📢*' : user.Language === 'id' ? '*LINK TIKTOK TERDETEKSI 📢*' : user.Language === 'rs' ? '*ОБНАРУЖЕНА ССЫЛКА НА TIKTOK 📢*' : user.Language}\n\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntiTwitter) {
if (budy.includes("https://twitter.com/")){
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return m.reply(lenguaje['smsAntiLink5']())
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`${user.Language === 'es' ? '*LINK DE TWITER (X) DETECTADO 📢*' : user.Language === 'en' ? '*TWITER LINK (X) DETECTED 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط تويتر (X) 📢*' : user.Language === 'pt' ? '*LINK DO TWITER (X) DETECTADO 📢*' : user.Language === 'id' ? '*LINK TWITER (X) TERDETEKSI 📢*' : user.Language === 'rs' ? '*ССЫЛКА НА ТВИТЕР (X) ОБНАРУЖЕНА 📢*' : user.Language}\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].antiLink2 && !isCreator) {
if (budy.includes("https://")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']()) 
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`${user.Language === 'es' ? '*LINK DE HTTPS DETECTADO 📢*' : user.Language === 'en' ? '*HTTPS LINK DETECTED 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط HTTPS 📢*' : user.Language === 'pt' ? '*LINK HTTPS DETECTADO 📢*' : user.Language === 'id' ? '*LINK HTTPS TERDETEKSI 📢*' : user.Language === 'rs' ? '*ОБНАРУЖЕНА HTTPS-ССЫЛКА 📢*' : user.Language}\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
const groupAdmins = participants.filter((p) => p.admin);
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n➥ ');
let delet = m.key.participant
let bang = m.key.id
conn.sendMessage(m.chat, {text: `${lenguaje['smsAntiLink']()} @${sender.split("@")[0]} ${lenguaje['smsAntiLink2']()}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (!isBotAdmins) return conn.sendMessage(m.chat, { text: `${lenguaje['smsAntiLink3']()}\n${listAdmin}\n\n${lenguaje['smsAntiLink4']()}`, mentions: groupAdmins.map(v => v.id) }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})  
let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
if (isGroupAdmins) return reply(`${lenguaje['smsAntiLink5']()}`) 
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}

//--------------------[ ANTITOXIC ]-----------------------
if (global.db.data.chats[m.chat].antitoxic && !isCreator) {   
if (budy.match(`g0re|g0r3|g.o.r.e|sap0|sap4|malparido|malparida|malparidos|malparidas|m4lp4rid0|m4lp4rido|m4lparido|malp4rido|m4lparid0|malp4rid0|chocha|chup4la|chup4l4|chupalo|chup4lo|chup4l0|chupal0|chupon|chupameesta|sabandija|hijodelagranputa|hijodeputa|hijadeputa|hijadelagranputa|kbron|kbrona|cajetuda|laconchadedios|putita|putito|put1t4|putit4|putit0|put1to|put1ta|pr0stitut4s|pr0stitutas|pr05titutas|pr0stitut45|prostitut45|prostituta5|pr0stitut45|fanax|f4nax|drogas|droga|dr0g4|nepe|p3ne|p3n3|pen3|p.e.n.e|pvt0|puto|pvto|put0|hijodelagransetentamilparesdeputa|Chingadamadre|coño|c0ño|coñ0|c0ñ0|afeminado|drog4|cocaína|marihuana|chocho|chocha|cagon|pedorro|agrandado|agrandada|pedorra|sape|nmms|mamar|chigadamadre|hijueputa|chupa|kaka|caca|bobo|boba|loco|loca|chupapolla|estupido|estupida|estupidos|polla|pollas|idiota|maricon|chucha|verga|vrga|naco|zorra|zorro|zorras|zorros|pito|huevon|huevona|huevones|rctmre|mrd|ctm|csm|cp|cepe|sepe|sepesito|cepecito|cepesito|hldv|ptm|baboso|babosa|babosos|babosas|feo|fea|feos|feas|webo|webos|mamawebos|chupame|bolas|qliao|imbecil|embeciles|kbrones|cabron|capullo|carajo|gore|gorre|gorreo|sapo|sapa|mierda|cerdo|cerda|puerco|puerca|perra|perro|joden|jodemos|dumb|fuck|shit|bullshit|cunt|cum|semen|bitch|motherfucker|foker|fucking`)) { 
if (m.isBaileys && m.fromMe) { 
return !0 }   
if (!m.isGroup) { 
return !1 }
if (isGroupAdmins) return
const user = global.db.data.users[m.sender];
const chat = global.db.data.chats[m.chat];
const bot = global.db.data.settings[conn.user.jid] || {};
const isToxic = budy.match; 
user.warn += 1;
if (!(user.warn >= 4)) await conn.sendMessage(m.chat, {text: `Hey @${m.sender.split('@')[0]} ${user.Language === 'es' ? 'decir la palabra ' : user.Language === 'en' ? ' say the word' : user.Language === 'ar' ? ' قل الكلمة قل الكلمة' : user.Language === 'pt' ? ' diga a palavra' : user.Language === 'id' ? ' ucapkan kata itu' : user.Language === 'rs' ? ' скажи слово' : user.Language} *(${isToxic})* ${user.Language === 'es' ? 'Esta prohibida En este grupo, No seas Toxico(a)\n\nADVERTENCIA' : user.Language === 'en' ? 'It is prohibited in this group, do not be toxic\n\nWARNING' : user.Language === 'ar' ? ' ممنوع في هذه المجموعة، لا تكن ساماً\n\nتحذير' : user.Language === 'pt' ? 'É proibido neste grupo, não seja tóxico\n\nAVISO' : user.Language === 'id' ? 'Dilarang di grup ini, jangan beracun\n\nPERINGATAN' : user.Language === 'rs' ? 'Запрещено в этой группе, не токсично.\n\nВНИМАНИЕ.' : user.Language}\n⚠️ *${user.warn}/4*\n\n${botname}`, mentions: [m.sender]}, {quoted: m})
if (user.warn >= 4) {
user.warn = 0;
await conn.sendMessage(m.chat, {text: `*@${m.sender.split('@')[0]} ${user.Language === 'es' ? 'superaste las 4 advertencias serás eliminado de este grupo 😐....*' : user.Language === 'en' ? 'you passed the 4 warnings you will be removed from this group 😐....*' : user.Language === 'ar' ? ' لقد تجاوزت الـ 4 تحذيرات سيتم إزالتك من هذه المجموعة 😐....*' : user.Language === 'pt' ? 'você passou nos 4 avisos você será removido deste grupo 😐....*' : user.Language === 'id' ? 'kamu melewati 4 peringatan kamu akan dikeluarkan dari grup ini 😐....*' : user.Language === 'rs' ? 'вы прошли 4 предупреждения, вы будете удалены из этой группы 😐....*' : user.Language}`, mentions: [m.sender]}, {quoted: m})
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
return !1;
}} 

//-------[ MODO PUBLIC/PRIVADO ]-----------
if (!conn.public && !isCreator) {
if (!m.key.fromMe) return 
}          	 
 
//--------------------[ BANCHAT ]---------------------
if (global.db.data.chats[m.chat].isBanned && !isCreator) {
return }

//----------------[ MODOADMINS ]------------------
if (global.db.data.chats[m.chat].modeadmin && !isGroupAdmins) {
return }   
 
//----------------[ AUTOSTICKERS]--------------------
if (global.db.data.chats[m.chat].autosticker) {  
await conn.sendPresenceUpdate('composing', m.chat)
if (/image/.test(mime) && !/webp/.test(mime)) {
//m.reply(`_Calma crack estoy haciendo tu sticker 👏_\n\n_*Autosticker esta activado*_`)   
let media = await quoted.download()
await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}}, { quoted: m }) 
console.log(`Auto sticker detected`)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 25) return reply(lenguaje['smsAutoSicker']())  
let media = await quoted.download()
await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: goblal.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}}, { quoted: m })
}}

//----------------[ AUTOLEVELUP/AUTONIVEL ]-------------------
if (global.db.data.chats[m.chat].autolevelup) {	
let user = global.db.data.users[m.sender]
if (!user.autolevelup)
return !0
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier))
user.level++
//user.role = global.rpg.role(user.level).name
if (before !== user.level) { 
let text = [`${lenguaje['smsAutonivel']()} @${sender.split`@`[0]} ${lenguaje['smsAutonivel2']()}\n${lenguaje['smsAutonivel3']()} ${before} ⟿ ${user.level}\n${lenguaje['smsAutonivel6']()} ${user.role}\n${lenguaje['smsAutonivel7']()} ${new Date().toLocaleString('id-ID')}\n\n${lenguaje['smsAutonivel8']()}`, `${lenguaje['smsAutonivel9']()} ${lenguaje['smsAutonivel4']()} ${before}\n${lenguaje['smsAutonivel5']()} ${user.level}\n${lenguaje['smsAutonivel6']()} ${user.role}\n${lenguaje['smsAutonivel7']()} ${new Date().toLocaleString('id-ID')}`] 
let str = text[Math.floor(Math.random() * text.length)]
return conn.sendMessage(m.chat, { text: str, contextInfo:{mentionedJid:[sender]}},{quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}} 
 
//----------------[ CHATBOT/AUTOMATICO ]-------------------
if (global.db.data.chats[m.chat].simi) {
let textodem = budy
try {
await conn.sendPresenceUpdate('composing', m.chat)
const ressimi = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(textodem)}&lc=es`)
const data = await ressimi.json()
if (data.success == 'No s\u00e9 lo qu\u00e9 est\u00e1s diciendo. Por favor ense\u00f1ame.') return m.reply(`${lol}`); /* EL TEXTO "lol" NO ESTA DEFINIDO PARA DAR ERROR Y USAR LA OTRA API */
await delay(1 * 1000) 
await m.reply(data.success)
} catch {
//🟢 [ES] SI DA ERROR USARA ESTA OTRA OPCION DE API DE IA QUE RECUERDA EL NOMBRE DE LA PERSONA
//🟢 [EN] IF IT ERROR, IT WILL USE THIS OTHER AI API OPTION THAT REMEMBER THE NAME OF THE PERSON 
if (textodem.includes('Hola')) textodem = textodem.replace('Hola', 'Hello')
if (textodem.includes('hola')) textodem = textodem.replace('hola', 'hello')
if (textodem.includes('HOLA')) textodem = textodem.replace('HOLA', 'HELLO')
const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + textodem)
const resu = await reis.json()
const nama = m.pushName || '1'
const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0])
const res = await api.json()
const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt)
const resu2 = await reis2.json()
await delay(3 * 3000) 
await m.reply(resu2[0][0][0])}} 
    
//---------------------[ ANTIPRIVADO ]------------------------
if (!m.isGroup && !isCreator) {  
//const bot = global.db.data.users[m.sender] || {};
if (global.db.data.settings[numBot].antiprivado) {
conn.sendMessage(m.chat, {text: `*${lenguaje['smsWel']()}* @${sender.split`@`[0]}, ${lenguaje['smsAntiPv']()}\n${nn2}`, mentions: [m.sender], }, {quoted: m}) 
await delay(2 * 2000) 
await conn.updateBlockStatus(m.chat, 'block')   
return 
}}

//---------------------[ MULTILENGUAJE ]------------------------
const { en, es, ar, id, pt, rs} = require('./libs/idiomas/total-idiomas.js')      
let user = global.db.data.users[m.sender]    
if (user.Language == 'es') {     
global.lenguaje = es       
} else if (user.Language == 'en') {    
global.lenguaje = en
} else if (user.Language == 'ar') {
global.lenguaje = ar 
} else if (user.Language == 'id') { 
global.lenguaje = id
} else if (user.Language == 'pt') { 
global.lenguaje = pt
} else if (user.Language == 'rs') {   
global.lenguaje = rs
} else {   
global.lenguaje = es  
}             
 
//---------------------[ ANTISPAM ]------------------------
if (global.db.data.chats[m.chat].antispam && prefix) {
let user = global.db.data.users[m.sender]
let str = [nna, md, yt, tiktok, fb] 
let info = str[Math.floor(Math.random() * str.length)]
const date = global.db.data.users[m.sender].spam + 3000; //600000 
if (new Date - global.db.data.users[m.sender].spam < 3000) return console.log(`[ SPAM ] ➢ ${command} [${args.length}]`)  
global.db.data.users[m.sender].spam = new Date * 1;
}

//---------------------[ TicTacToe ]------------------------
let winScore = 4999
let playScore = 99
this.game = this.game ? this.game : {}
let room13 = Object.values(this.game).find(room13 => room13.id && room13.game && room13.state && room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender) && room13.state == 'PLAYING')
if (room13) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
//reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room13.game.currentTurn) { 
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room13.game.turn(m.sender === room13.game.playerO, parseInt(m.text) - 1))) {
m.reply({'-3': 'El juego ha terminado',
'-2': 'Inválido',
'-1': 'Posición inválida',
0: 'Posición inválida', }[ok])
return !0
}
if (m.sender === room13.game.winner) isWin = true
else if (room13.game.board === 511) isTie = true
let arr = room13.game.render().map(v => {
return {X: '❎',
O: '❌',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
if (isSurrender) {
room13.game._currentTurn = m.sender === room13.game.playerX
isWin = true
}
let winner = isSurrender ? room13.game.currentTurn : room13.game.winner
let str = `*\`🎮 ${user.Language === 'es' ? 'ＴＲＥＳ ＥＮ ＲＡＹＡ' : 
user.Language === 'en' ? 'THREE IN A TAIL' : 
user.Language === 'ar' ? ' ثلاثة في الذيل' : 
user.Language === 'pt' ? 'JOGO DO GALO' : 
user.Language === 'id' ? 'TIGA DALAM EKOR' : 
user.Language === 'rs' ? 'ТРИ В ХВОСТЕ' : user.Language} 🎮\`*

       ${arr.slice(0, 3).join('')}
       ${arr.slice(3, 6).join('')} 
       ${arr.slice(6).join('')}
	    
❎ = @${room13.game.playerX.split('@')[0]}
❌ = @${room13.game.playerO.split('@')[0]}

${isWin ? `@${winner.split('@')[0]} ${user.Language === 'es' ? '*HAS GANADOS 🎉*' : user.Language === 'en' ? '*YOU HAVE WON 🎉*' : user.Language === 'ar' ? '*لقد فزت 🎉*' : user.Language === 'pt' ? '*VOCÊ GANHOU 🎉*' : user.Language === 'id' ? '*KAMU TELAH MENANG 🎉*' : user.Language === 'rs' ? '*ТЫ ВЫИГРАЛА 🎉*' : user.Language}\n*🎁 ${user.Language === 'es' ? 'OBTIENE :' : user.Language === 'en' ? 'YOU GET:' : user.Language === 'ar' ? ' لقد حصلت:' : user.Language === 'pt' ? 'VOCÊ OBTEM:' : user.Language === 'id' ? 'ANDA MENDAPATKAN:' : user.Language === 'rs' ? 'ВЫ ПОЛУЧАЕТЕ:' : user.Language}* ${winScore} XP` : isTie ? `*${user.Language === 'es' ? 'EMPATE' : user.Language === 'en' ? 'A TIE' : user.Language === 'ar' ? ' التعادل' : user.Language === 'pt' ? 'EMPATE' : user.Language === 'id' ? 'DASI' : user.Language === 'rs' ? 'ГАЛСТУК' : user.Language} 😹*` : `${user.Language === 'es' ? '𝐓𝐮𝐫𝐧𝐨 𝐝𝐞 :' : user.Language === 'en' ? ' Turn of:' : user.Language === 'ar' ? ' اطفئ:' : user.Language === 'pt' ? ' Desligar:' : user.Language === 'id' ? ' Matikan:' : user.Language === 'rs' ? ' Выключение:' : user.Language}

 ${['❎', '❌'][1 * room13.game._currentTurn]} (@${room13.game.currentTurn.split('@')[0]})`}` //`
let users = global.db.data.users
if ((room13.game._currentTurn ^ isSurrender ? room13.x : room13.o) !== m.chat)
room13[room13.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room13.x !== room13.o) await conn.sendText(room13.x, str, m, { mentions: parseMention(str) } )
await conn.sendText(room13.o, str, m, { mentions: parseMention(str) } ) 
         
if (isTie || isWin) {
users[room13.game.playerX].exp += playScore
users[room13.game.playerO].exp += playScore
delete this.game[room13.id]
if (isWin)
users[winner].exp += winScore - playScore
}}
	    
//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) { 
const exp = Math.floor(Math.random() * 600)
global.db.data.users[m.sender].exp += exp;
await m.reply(`${user.Language === 'es' ? '*Respuesta correcta 🎉*\n\n*Ganarte :*' : user.Language === 'en' ? '*Correct answer 🎉*\n\n*Earn you :*' : user.Language === 'ar' ? '*الإجابة الصحيحة 🎉*\n\n*تكسبك:*' : user.Language === 'pt' ? '*Resposta correta 🎉*\n\n*Você ganha:*' : user.Language === 'id' ? '*Jawaban yang benar 🎉*\n\n*Dapatkan penghasilan :*' : user.Language === 'rs' ? '*Правильный ответ 🎉*\n\n*Заработайте :*' : user.Language} ${exp} Exp`) 
m.react(`✅`) 
delete kuismath[m.sender.split('@')[0]]
} else m.react(`❌`)} 
                          
this.confirm = this.confirm ? this.confirm : {}
if (this.confirm[m.sender.split('@')[0]]) {
let { timeout, sender, message, to, type, count } = this.confirm[m.sender.split('@')[0]]
let user = global.db.data.users[sender]
let _user = global.db.data.users[to]
if (/^No|no$/i.test(body)) {
clearTimeout(timeout)
delete this.confirm[m.sender.split('@')[0]]
return this.sendTextWithMentions(m.chat, `⚠️ ${user.Language === 'es' ? 'Cancelado, la transferencia no se realizará' : user.Language === 'en' ? 'Canceled, the transfer will not take place' : user.Language === 'ar' ? ' تم الإلغاء، ولن يتم النقل' : user.Language === 'pt' ? 'Cancelado, a transferência não ocorrerá' : user.Language === 'id' ? 'Dibatalkan, transfer tidak akan dilakukan' : user.Language === 'rs' ? 'Отменено, перенос не состоится' : user.Language}.`, m)}

if (/^Si|si$/i.test(body)) { 
let previous = user[type] * 1
let _previous = _user[type] * 1
user[type] -= count * 1
_user[type] += count * 1
if (previous > user[type] * 1 && _previous < _user[type] * 1) {
conn.sendMessage(m.chat, {text: `*✅ ${user.Language === 'es' ? 'Se transfirierón correctamente' : user.Language === 'en' ? 'They were transferred successfully' : user.Language === 'ar' ? ' لقد تم نقلهم بنجاح' : user.Language === 'pt' ? 'Eles foram transferidos com sucesso' : user.Language === 'id' ? 'Mereka berhasil ditransfer' : user.Language === 'rs' ? 'Их успешно перевели' : user.Language} ${count} ${type} a @${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, mentions: [to]}, {quoted: m}); 
} else { 
user[type] = previous; 
_user[type] = _previous; 
conn.sendMessage(m.chat, {text: `*[ ⚠️ ] ${user.Language === 'es' ? 'Error al transferir' : user.Language === 'en' ? 'Error transferring' : user.Language === 'ar' ? ' حدث خطأ أثناء النقل' : user.Language === 'pt' ? 'Erro ao transferir' : user.Language === 'id' ? 'Kesalahan saat mentransfer' : user.Language === 'rs' ? 'Ошибка переноса' : user.Language} ${count} ${type} a @${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, mentions: [to]}, {quoted: m})} 
clearTimeout(timeout); 
delete this.confirm[sender]; 
}}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime 
if (!afkTime || afkTime < 0) continue 
let reason = user.afkReason || ''
m.reply(`${lenguaje.rpg.text}\n\n${reason ? `🔸️${user.Language === 'es' ? ' *𝚁𝙰𝚉𝙾𝙽*' : user.Language === 'en' ? '*REASON:*' : user.Language === 'ar' ? '*سبب:*' : user.Language === 'pt' ? '*RAZÃO:*' : user.Language === 'id' ? '*ALASAN:*' : user.Language === 'rs' ? '*ПРИЧИНА:*' : user.Language} : ` + reason : `🔸️ ${user.Language === 'es' ? ' *𝚁𝙰𝚉𝙾𝙽*: 𝚂𝚒𝚗 𝚛𝚊𝚣𝚘𝚗' : user.Language === 'en' ? '*REASON:* No reason' : user.Language === 'ar' ? '*السبب:* لا يوجد سبب' : user.Language === 'pt' ? '*MOTIVO:* Sem motivo' : user.Language === 'id' ? '*ALASAN:* Tidak ada alasan' : user.Language === 'rs' ? '*ПРИЧИНА:* Нет причин' : user.Language}`}\n🔸️ ${lenguaje.rpg.text1} ${clockString(new Date - afkTime)}`.trim())}//`
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`${lenguaje.rpg.text2}\n${user.afkReason ? '\n*𝚁𝙰𝚉𝙾𝙽 :* ' + user.afkReason : ''}\n${lenguaje.rpg.text1} ${clockString(new Date - user.afkTime)}`.trim())
user.afkTime = -1
user.afkReason = ''  
}

//ARRANCA LA DIVERSIÓN 
switch (prefix && command) { 
case 'yts': case 'ytsearch': case 'acortar': case 'google': case 'imagen': case 'traducir': case 'translate': case "tts": case 'ia': case 'chatgpt': case 'dalle': case 'ia2': case 'aimg': case 'imagine': case 'dall-e': case 'ss': case 'ssweb': case 'wallpaper': case 'hd': case 'horario': case 'bard': case 'wikipedia': case 'wiki': case 'pinterest': await buscadores(m, command, conn, text, budy, from, fkontak, prefix, args, quoted, lolkeysapi)
break  
       
//jadibot/serbot 
case 'serbot': case 'jadibot': case 'qr':
jadibot(conn, m, command, text, args, sender)
break  
case 'deljadibot': case 'stop': 
killJadibot(conn, m, prefix, command, sender)
break 
case 'bots': case 'listbots':  
const user = [...new Set([...global.listJadibot.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
const message = user.map((v, index) => `[${index + 1}] ${v.user.name || '•'}\nwa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${prefix}estado`).join('\n\n');
const replyMessage = message.length === 0 ? '' : message;
const totalUsers = user.length;
const responseMessage = `${lenguaje.jadibot.text18} ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await conn.sendMessage(m.chat, {text: responseMessage, mentions: conn.parseMention(responseMessage)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
break
              
//Info  
case 'menu': case 'help': case 'menucompleto': case 'allmenu': case 'menu2': case 'audio': case 'nuevo': case 'extreno': case 'reglas': case 'menu1': case 'menu3': case 'menu4': case 'menu5': case 'menu6': case 'menu7': case 'menu8': case 'menu9': case 'menu10': case 'menu11': case 'menu18': case 'descarga': case 'menugrupos': case 'menubuscadores': case 'menujuegos': case 'menuefecto': case 'menuconvertidores': case 'Menuhony': case 'menurandow': case 'menuRPG': case 'menuSticker': case 'menuOwner': menu(m, command, conn, prefix, pushname, sender, pickRandom, fkontak)  
break        
case 'estado': case 'infobot': case 'owner': case 'creador': case 'contacto': case 'grupos': case 'grupoficiales': case 'instalarbot': case 'crearbot': case 'ping': case '5492266613038': case '593980586516': case '595975740803': case 'report': case 'sc': case 'donar': case 'solicitud': case 'cuenta': case 'cuentas': case 'cuentaoficiales': case 'cuentaofc': case 'cafirexos': case 'Cafirexos': case 'velocidad': case 'status': case 'speedtest': case 'speed': case 'infohost': case 'host': info(command, conn, m, speed, sender, fkontak, pickRandom, pushname, from, msg, text) 
break      
     
//activar/desactivar  
case 'welcome': case 'bienvenida': case 'antilink': case 'antienlace': case 'antifake': case 'antiFake': case 'antiarabe': case 'antiArabe': case 'autodetect': case 'detect': case 'audios': case 'autosticker': case 'stickers': case 'modocaliente': case 'antinsfw': case 'modoadmin': case 'modoadmins': case 'soloadmin': case 'antiprivado': case 'antipv': case 'anticall': case 'antillamada': case 'modojadibot': case 'jadibot': case 'autoread': case 'autovisto': case 'antispam': case 'chatbot': case 'simsimi': case 'autolevelup': case 'autonivel': case 'antitoxic': case 'antilink2': case 'AntiTwiter': case 'antitwiter': case 'antitiktok': case 'AntiTikTok': case 'antitelegram': case 'AntiTelegram': case 'antifacebook': case 'AntiFb': case 'AntiFacebook': case 'antinstagram': case 'AntInstagram': case 'antiyoutube': case 'AntiYoutube': case 'AntiIg': case 'enable': case 'configuracion': case 'configurar': enable(m, command, isGroupAdmins, text, command, args, isBotAdmins, isGroupAdmins, isCreator, conn) 
break
    
//Grupos    
case 'grupo': case 'delete': case 'del': case 'join': case 'unete': case 'hidetag': case 'notificar': case 'tag': case 'setppgroup': case 'setpp': case 'setppname': case 'nuevonombre': case 'newnombre': case 'setdesc': case 'descripción': case 'anularlink': case 'resetlink': case 'revoke': case 'add': case 'agregar': case 'invitar': case 'kick': case 'echar': case 'sacar': case 'promote': case 'darpoder': case 'demote': case 'quitarpoder': case 'link': case 'linkgc': case 'banchat': case 'tagall': case 'invocar': case 'todos': case 'admins': case 'administradores': case 'infogrupo': case 'groupinfo': case 'warn': case 'advertencia': case 'unwarn': case 'quitardvertencia': case 'listwarn': case 'enline': case 'online': case 'listonine': case 'listaenlinea': case 'enlinea': case 'listonline': case 'setrules': case 'addrules': case 'addrule': case 'rules': grupo(m, command, isGroupAdmins, text, conn, participants, isBotAdmins, args, isCreator, delay, sender, quoted, mime, from, isCreator, groupMetadata, fkontak, delay) 
break    

//juegos  
case 'simi': case 'bot': case 'pregunta': case 'preg': case 'gay': case 'pareja': case 'formarpareja': case 'follar': case 'violar': case 'coger': case 'doxear': case 'doxxeo': case 'personalidad': case 'top': case 'topgays': case 'topotakus': case 'racista': case 'love': case 'ship': case 'formartrio': case 'formapareja5': game(m, budy, command, text, pickRandom, pushname, conn, participants, sender, who, body, sendImageAsUrl)  
break                   
case 'verdad': case 'reto': case 'piropo': game2(m, command, sendImageAsUrl, pickRandom)
break 
case 'slot': case 'apuesta':  case 'fake': case 'ppt': case 'suit': game3(m, command, conn, args, prefix, msToTime, text, body, from, sender, quoted, pushname)
break    

case 'prue': {
let user = global.db.data.users[m.sender]
m.reply(`${user.Language === 'es' ? 'Hola' : user.Language === 'en' ? 'Hello' : user.Language === 'ar' ? 'مرحبا' : user.Language === 'pt' ? 'Olá' : user.Language === 'id' ? 'Jam' : user.Language === 'rs' ? 'Привет' : user.Language}`)} 
break
  
case 'math': case 'matematicas': {
let user = global.db.data.users[m.sender]
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return m.reply(`⚠️ ${user.Language === 'es' ? '𝚃𝚘𝚍𝚊𝚟𝚒𝚊 𝚑𝚊𝚢 𝚙𝚛𝚎𝚐𝚞𝚗𝚝𝚊𝚜 𝚜𝚒𝚗 𝚛𝚎𝚜𝚙𝚞𝚎𝚜𝚝𝚊 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝' : user.Language === 'en' ? 'There is still no unanswered question in this chat' : user.Language === 'ar' ? ' لا يوجد حتى الآن أي سؤال دون إجابة في هذه الدردشة' : user.Language === 'pt' ? ' Ainda não há nenhuma pergunta sem resposta neste chat' : user.Language === 'id' ? ' Masih belum ada pertanyaan yang belum terjawab dalam obrolan ini' : user.Language === 'rs' ? ' В этом чате еще нет вопросов без ответа' : user.Language}`)   
let { genMath, modes } = require('./libs/math')
if (!text) return m.reply(`🧮 ${user.Language === 'es' ? '𝙳𝚒𝚏𝚒𝚌𝚞𝚕𝚝𝚊𝚍𝚎𝚜 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎𝚜 :' : user.Language === 'ar' ? 'الصعوبات المتاحة' : user.Language === 'pt' ? ' Dificuldades disponíveis' : user.Language === 'en' ? ' Difficulties available' : user.Language === 'id' ? ' Kesulitan tersedia' : user.Language === 'rs' ? ' Доступные сложности' : user.Language}\n\n${Object.keys(modes).join(' | ')}\n• ${user.Language === 'es' ? '*Ejemplo de uso:*' : user.Language === 'ar' ? ' مثال للاستخدام' : user.Language === 'pt' ? 'Exemplo de uso' : user.Language === 'en' ? ' Example of use' : user.Language === 'id' ? ' Contoh penggunaan' : user.Language === 'rs' ? ' Пример использования' : user.Language} ${prefix}math medium`)
let result = await genMath(text.toLowerCase())         
conn.sendText(m.chat, `╔═≪ \`${user.Language === 'es' ? 'MATEMÁTICAS' : user.Language === 'en' ? 'MATEMÁTICAS' : user.Language === 'ar' ? ' الرياضيات' : user.Language === 'pt' ? ' MATEMÁTICAS' : user.Language === 'id' ? ' MATEMATIKA' : user.Language === 'rs' ? ' МАТЕМАТИКА' : user.Language}\` ≫═•
║ *${user.Language === 'es' ? '¿𝙲𝚄𝙰𝙽𝚃𝙾 𝙴𝚂 :' : user.Language === 'en' ? 'How much is it :' : user.Language === 'ar' ? 'مرحبا' : user.Language === 'pt' ? 'Quanto é :' : user.Language === 'id' ? 'Berapa harganya :' : user.Language === 'rs' ? 'Сколько это стоит :' : user.Language} ${result.soal.toLowerCase()}?*
║━━━━━━━━━━━━━━━━
║🕕 ${user.Language === 'es' ? '𝚃𝙸𝙴𝙼𝙿𝙾:' : user.Language === 'en' ? 'Time :' : user.Language === 'ar' ? ' وقت:' : user.Language === 'pt' ? 'Tempo:' : user.Language === 'id' ? 'Waktu:' : user.Language === 'rs' ? 'Время:' : user.Language} ${(result.waktu / 1000).toFixed(2)} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘
║━━━━━━━━━━━━━━━━
║ ${user.Language === 'es' ? '*𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙴𝚂𝚃𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙲𝙾𝙽 𝙻𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰*' : user.Language === 'en' ? '*Reply to this message with the answer*' : user.Language === 'ar' ? '*الرد على هذه الرسالة بالإجابة*' : user.Language === 'pt' ? '*Responda a esta mensagem com a resposta*' : user.Language === 'id' ? '*Balas pesan ini dengan jawabannya*' : user.Language === 'rs' ? '*Ответить на это сообщение с ответом*' : user.Language}
╚════ ≪ •❈• ≫ ═════•`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
m.reply(`⏳ ${user.Language === 'es' ? 'sᴇ ᴀᴄᴀʙᴏ ᴇʟ ᴛɪᴇᴍᴘᴏ!, ʟᴀ ʀᴇsᴘᴜᴇsᴛᴀ ᴇs: ' : user.Language === 'en' ? 'Time is up! The answer is:' : user.Language === 'ar' ? 'نتهى الوقت! الجواب هو:' :  user.Language === 'pt' ? 'O tempo acabou! A resposta é:' : user.Language === 'id' ? 'Waktunya habis! Jawabannya adalah:' : user.Language === 'rs' ? 'Время вышло! Ответ:' : user.Language}` + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}}
break
 
case 'ttc': case 'ttt': case 'tictactoe': { 
let user = global.db.data.users[m.sender]
let TicTacToe = require("./libs/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room13 => room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender))) return m.reply(`⚠️ ${user.Language === 'es' ? 'Todavía estás en el juego' : user.Language === 'en' ? 'You"re still in the game' : user.Language === 'ar' ? ' أنت لا تزال في اللعبة' : user.Language === 'pt' ? 'Você ainda está no jogo' : user.Language === 'id' ? 'Anda masih dalam permainan' : user.Language === 'rs' ? 'Ты все еще в игре' : user.Language}`)
let room13 = Object.values(this.game).find(room13 => room13.state === 'WAITING' && (text ? room13.name === text : true))
if (room13) {
room13.o = m.chat
room13.game.playerO = m.sender
room13.state = 'PLAYING'
let arr = room13.game.render().map(v => {
return {X: '❎',
O: '❌',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣', }[v]})
let str = `*\`🕹 ${user.Language === 'es' ? 'ＴＲＥＳ ＥＮ ＲＡＹＡ' : user.Language === 'en' ? 'THREE IN A TAIL' : user.Language === 'ar' ? ' ثلاثة في الذيل' : user.Language === 'pt' ? 'JOGO DO GALO' : user.Language === 'id' ? 'TIGA DALAM EKOR' : user.Language === 'rs' ? 'ТРИ В ХВОСТЕ' : user.Language} 🎮\`*

🎮👾 ${user.Language === 'es' ? 'ᴇsᴘᴇʀᴀɴᴅᴏ ᴀ' : user.Language === 'en' ? 'Waiting for:' : user.Language === 'ar' ? ' انتظر ل:' :  user.Language === 'pt' ? 'Esperando por:' : user.Language === 'id' ? 'Menunggu:' : user.Language === 'rs' ? 'В ожидании:' : user.Language} @${room13.game.currentTurn.split('@')[0]} ${user.Language === 'es' ? 'ᴄᴏᴍᴏ ᴘʀɪᴍᴇʀ ᴊᴜɢᴀᴅᴏʀ' :  user.Language === 'en' ? 'As the first player' : user.Language === 'ar' ? ' كأول لاعب' :  user.Language === 'pt' ? 'Como o primeiro jogador' : user.Language === 'id' ? 'Sebagai pemain pertama' : user.Language === 'rs' ? 'Как первый игрок' : user.Language}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
 
▢ ${user.Language === 'es' ? '*𝐒𝐀𝐋𝐀 :*' : user.Language === 'en' ? '*LIVING ROOM :*' : user.Language === 'ar' ? '*غرفة المعيشة :*' : user.Language === 'pt' ? '*SALA :*' : user.Language === 'id' ? '*RUANG TAMU :*' : user.Language === 'rs' ? '*ГОСТИНАЯ :*' : user.Language} ${room13.id}
 
▢ ${user.Language === 'es' ? '*𝐑𝐄𝐆𝐋𝐀𝐒 :*\n\n* ʜᴀᴢ 3 ғɪʟᴀs ᴅᴇ sɪᴍʙᴏʟᴏs ᴠᴇʀᴛɪᴄᴀʟᴇs, ʜᴏʀɪᴢᴏɴᴛᴀʟᴇs ᴏ ᴅɪᴀɢᴏɴᴀʟᴇs ᴘᴀʀᴀ ɢᴀɴᴀʀ\n* ᴇsᴄʀɪʙᴇ *rendirse* para rendirte y admitir la derrota.' : user.Language === 'en' ? '*RULES :*\n\n* make 3 rows of vertical, horizontal or diagonal symbols to win\n* write *delttt* to give up and admit defeat null.' : user.Language === 'ar' ? '*قواعد :*\n\n* قم بعمل 3 صفوف من الرموز الرأسية أو الأفقية أو القطرية للفوز\n*اكتب *delttt* للاستسلام والاعتراف بالهزيمة null.' : user.Language === 'pt' ? '*REGRAS :*\n\n* faça 3 linhas de símbolos verticais, horizontais ou diagonais para ganhar\n* escreva *delttt* para desistir e admitir a derrota nula.' : user.Language === 'id' ? '*ATURAN :*\n\n* buat 3 baris simbol vertikal, horizontal atau diagonal untuk menang\n*tulis *delttt* untuk menyerah dan mengaku kalah null.' : user.Language === 'rs' ? '*ПРАВИЛА :*\n\n* составьте 3 ряда вертикальных, горизонтальных или диагональных символов, чтобы выиграть\n* напишите *delttt*, чтобы сдаться и признать поражение нулевым.' : user.Language}`
if (room13.x !== room13.o) await conn.sendText(room13.x, str, m, { mentions: parseMention(str) } )
await conn.sendText(room13.o, str, m, { mentions: parseMention(str) } )
} else {
room13 = {id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room13.name = text
m.reply(`*⏳ ${user.Language === 'es' ? 'ᴇsᴘᴇʀᴀɴᴅᴏ ᴀʟ sɪɢᴜɪᴇɴᴛᴇ ᴊᴜɢᴀᴅᴏ*' : user.Language === 'en' ? 'Waiting for the next one playing' : user.Language === 'ar' ? ' في انتظار اللعب التالي' : user.Language === 'pt' ? 'Esperando o próximo jogando' : user.Language === 'id' ? 'Menunggu yang berikutnya diputar' : user.Language === 'rs' ? 'Жду следующей игры' : user.Language}` + (text ? ` ${user.Language === 'es' ? '*ᴇsᴄʀɪʙᴀ ᴇʟ sɪɢᴜɪᴇɴᴛᴇ ᴄᴏᴍᴀɴᴅᴏ:' : user.Language === 'en' ? '*Type the following command:' : user.Language === 'ar' ? '*اكتب الأمر التالي:' : user.Language === 'pt' ? '*Digite o seguinte comando:' : user.Language === 'id' ? '*Ketikkan perintah berikut:' : user.Language === 'rs' ? '*Введите следующую команду:' : user.Language} ${prefix + command} ${text}\n\n🎁 ${user.Language === 'es' ? 'ʀᴇᴄᴏᴍᴘᴇɴsᴀ :' : user.Language === 'en' ? 'Reward:' : user.Language === 'ar' ? ' جائزة:' : user.Language === 'pt' ? 'Recompensa :' : user.Language === 'id' ? 'Hadiah:' : user.Language === 'rs' ? 'Награда:' : user.Language} *4999 XP*` : ''))
this.game[room13.id] = room13
}}
break

case 'delttc': case 'delttt': {
let user = global.db.data.users[m.sender]
this.game = this.game ? this.game : {}
try {
if (this.game) { 
delete this.game
conn.sendText(m.chat, `✅ ${user.Language === 'es' ? 'sᴇ ʀᴇɪɴɪᴄɪᴏ ʟᴀ sᴇsɪᴏɴ ᴅᴇ *ᴛɪᴄᴛᴀᴄᴛᴏᴇ 🎮*' : user.Language === 'en' ? '*Tictactoe session restarted 🎮*' : user.Language === 'ar' ? '*تم استئناف جلسة التيكتاكتو 🎮*' : user.Language === 'pt' ? '*Sessão do Tictactoe reiniciada 🎮*' : user.Language === 'id' ? '*Sesi Tikactoe dimulai kembali 🎮*' : user.Language === 'rs' ? '*Сеанс Тиктакто перезапущен 🎮*' : user.Language}`, m)
} else if (!this.game) {
m.reply(`⚠️ ${user.Language === 'es' ? 'ɴᴏ ᴇsᴛᴀs ᴇɴ ᴘᴀʀᴛɪᴅᴀ ᴅᴇ ᴛɪᴄᴛᴀᴄᴛᴏᴇ' : user.Language === 'en' ? 'You are not in any tictactoe games' : user.Language === 'ar' ? ' أنت لست في أي ألعاب tictactoe' : user.Language === 'pt' ? 'Você não está em nenhum jogo do tictactoe' : user.Language === 'id' ? 'Anda tidak sedang mengikuti permainan tictactoe mana pun' : user.Language === 'rs' ? 'Тебя нет ни в одной игре в крестики-нолики' : user.Language} 🎮`)
} else throw '?'
} catch (e) {
}}
break 
                                                          
//convertidores
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel': efec(conn, command, mime, quoted, exec, prefix, m, from)  
break   
case 'toaudio': case 'tomp3': case 'toimg': case 'toimagen': case 'tourl': case 'toanime': case 'txt': convertidores(conn, command, mime, quoted, util, m, exec, lolkeysapi, text)  
break      
   
//nsfw
case 'hentai': case 'nsfwloli': case 'lewd': case 'feed': case 'gasm': case 'anal': case 'holo': case 'tits': case 'kuni': case 'kiss': case 'erok': case 'smug': case 'solog': case 'feetg': case 'lewdk': case 'waifu': case 'pussy': case 'femdom': case 'cuddle': case 'eroyuri': case 'cum_jpg': case 'blowjob': case 'holoero': case 'erokemo': case 'fox_girl': case 'futanari': case 'wallpaper': case 'hentai2': case 'porno': case 'pack': case 'pack2': case 'pack3': case 'videoxxx': case 'vídeoxxx': case 'videoxxxlesbi': case 'videolesbixxx': case 'pornolesbivid': case 'pornolesbianavid': case 'pornolesbiv': case 'pornolesbianav': case 'tetas': case 'pechos': nsfw(m, sender, command, pickRandom, conn, sendImageAsUrl)
break   
 
//Efecto
case 'logololi': case 'neon': case 'devil': case 'transformer': case 'thunder': case 'graffiti': case 'bpink': case 'joker': case 'matrix': case 'wolf': case 'phlogo': case 'ballon': case 'dmd': case 'lightglow': case 'american': case 'halloween': case 'green': case 'glitch': case 'paper': case 'marvel': case 'ninja': case 'future': case '3dbox': case 'graffiti2': case 'logos': efect2(m, text, prefix, command, conn)
break
     
//randow  
case 'memes': case 'loli': case 'lolivid': case 'neko': case 'akira': case 'akiyama': case 'anna': case 'asuna': case 'ayuzawa': case 'boruto': case 'chiho': case 'chitoge': case 'deidara': case 'erza': case 'elaina': case 'eba': case 'emilia': case 'hestia': case 'hinata': case 'inori': case 'isuzu': case 'itachi': case 'itori': case 'kaga': case 'kagura': case 'kaori': case 'keneki': case 'kotori': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'nezuko': case 'sagiri': case 'sasuke': case 'sakura': case 'cosplay': case 'blackpink': case 'navidad': case 'china': randow(m, sender, command, sendImageAsUrl, pickRandom, conn)
break     
case 'horny': case 'simp': case 'lolice': case 'comentar': case 'comment': randow2(conn, m, command, text, sender, pushname)  
break 

//descargas
case 'play': case 'musica': case 'play2': case 'video': case 'play3': case 'playdoc': case 'playaudiodoc': case 'ytmp3doc': case 'play4': case 'playdoc2': case 'playvideodoc': case 'ytmp4doc': case "ytmp3": case "ytaudio": case 'ytmp4': case 'ytvideo': case 'music': case 'spotify': case 'gitclone': case 'tiktok': case 'tt': case 'lyrics': case 'letra': case 'mediafire': case 'tiktokimg': case 'ttimg': case 'play.1': case 'play.2': descarga(m, command, conn, text, command, args, fkontak, from, lolkeysapi)   
break
case 'facebook': case 'fb': case 'instagram': case 'ig': case 'igstalk': case 'tiktokstalk': case 'apk': case 'modoapk': case 'gdrive': case 'tw': case 'twitter': descarga2(m, command, text, args, conn, lolkeysapi, isCreator) 
break 

//rpg  
case 'reg': case 'verificar': case 'unreg': case 'myns': await reg(command, conn, m, sender, text, budy, fkontak, delay, args) 
break     
case 'lb': case 'leaderboard': case 'afk': case 'rob': case 'robar': case 'buy': case 'buyall': case 'bal': case 'balance': case 'diamond': case 'minar': case 'mine': case 'trabajar': case 'work': case 'w': case 'claim': case 'daily': case 'perfil': case 'levelup': case 'nivel': case 'cofre': case 'minar2': case 'mine2': case 'crime': case 'Crime': case 'dep': case 'depositar': case 'retirar': case 'toremove': rpg(m, command, participants, args, sender, pushname, text, conn, fkontak, who)    
break             
case 'transferir': case 'transfer': case 'regalar': {
let items = ['money', 'exp', 'limit']
this.confirm = this.confirm ? this.confirm : {}
if (this.confirm[m.sender]) return conn.sendText(m.chat, `*⚠️ ${user.Language === 'es' ? 'estas haciendo una transferencia' : user.Language === 'en' ? 'you are making a transfer' : user.Language === 'ar' ? ' أنت تقوم بالتحويل' : user.Language === 'pt' ? 'você está fazendo uma transferência' : user.Language === 'id' ? 'Anda sedang melakukan transfer' : user.Language === 'rs' ? 'вы делаете перевод' : user.Language}*`, m)
let user = global.db.data.users[m.sender]
let item = items.filter((v) => v in user && typeof user[v] == 'number')
let lol = `*⚠️ ${user.Language === 'es' ? 'Uso correcto del comando :' : user.Language === 'en' ? 'Correct use of the command:' : user.Language === 'ar' ? ' الاستخدام الصحيح للأوامر:' : user.Language === 'pt' ? 'Uso correto do comando:' : user.Language === 'id' ? 'Penggunaan perintah yang benar:' : user.Language === 'rs' ? 'Правильное использование команды:' : user.Language}*\n*${prefix + command}* [tipo] [cantidad] [@user]\n\n> ${user.Language === 'es' ? '*Ejemplo :*' : user.Language === 'en' ? '*Example :*' : user.Language === 'ar' ? '*مثال :*' : user.Language === 'pt' ? '*Exemplo :*' : user.Language === 'id' ? '*Contoh :*' : user.Language === 'rs' ? '*Пример :*' : user.Language}\n• ${prefix + command} exp 100 @0\n\n📍 ${user.Language === 'es' ? 'Artículos transferibles' : user.Language === 'en' ? 'Transferable items' : user.Language === 'ar' ? ' العناصر القابلة للتحويل' : user.Language === 'pt' ? 'itens transferíveis' : user.Language === 'id' ? 'Barang yang dapat dipindahtangankan' : user.Language === 'rs' ? 'Передаваемые предметы' : user.Language}\n╔═════ೋೋ═════╗\n● *limit* = Diamante\n● *exp* = Experiencia\n● *money* = coins\n╚════ ≪ •❈• ≫ ════╝`
let type = (args[0] || '').toLowerCase()
if (!item.includes(type)) return conn.sendTextWithMentions(m.chat, lol, m)
let count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
if (!who) return conn.sendMessage(m.chat, {text: `⚠️ ${user.Language === 'es' ? '*Etiquetas al usuario que desea hacer la transferencia.*' : user.Language === 'en' ? '*Tags the user who wants to make the transfer.*' : user.Language === 'ar' ? '*ضع علامة على المستخدم الذي يريد إجراء النقل.*' : user.Language === 'pt' ? '*Marca o usuário que deseja fazer a transferência.*' : user.Language === 'id' ? '*Menandai pengguna yang ingin melakukan transfer.*' : user.Language === 'rs' ? '*Отмечает пользователя, который хочет осуществить перевод.*' : user.Language}`,  mentions: [m.sender]}, {quoted: m});
if (!(who in global.db.data.users)) return m.reply(`❌ ${user.Language === 'es' ? '*El Usuario no está en mi base de datos*' : user.Language === 'en' ? '*User is not in my database*' : user.Language === 'ar' ? '*المستخدم ليس في قاعدة البيانات الخاصة بي*' : user.Language === 'pt' ? '*O usuário não está no meu banco de dados*' : user.Language === 'id' ? '*Pengguna tidak ada dalam database saya*' : user.Language === 'rs' ? '*Пользователя нет в моей базе данных*' : user.Language}`)
if (user[type] * 1 < count) return m.reply(`⚠️${user.Language === 'es' ? `*No tienes suficientes ${type} para transferir*` : user.Language === 'en' ? `*You don't have enough ${type} to transfer*` : user.Language === 'ar' ? `*ليس لديك ما يكفي من ${type} للتحويل*` : user.Language === 'pt' ? `*Você não tem ${type} suficiente para transferir*` : user.Language === 'id' ? `*Anda tidak mempunyai cukup ${type} untuk mentransfer*` : user.Language === 'rs' ? `*У вас недостаточно ${type} для перевода*` : user.Language}`)//`
let confirm = `${user.Language === 'es' ? '¿ESTA SEGURO QUE DESEA TRANSFERIR' : user.Language === 'en' ? 'ARE YOU SURE YOU WANT TO TRANSFER' : user.Language === 'ar' ? ' هل أنت متأكد من أنك تريد النقل' : user.Language === 'pt' ? 'VOCÊ TEM CERTEZA QUE QUER TRANSFERIR' : user.Language === 'id' ? 'APAKAH ANDA YAKIN INGIN TRANSFER' : user.Language === 'rs' ? 'ВЫ УВЕРЕНЫ, ЧТО ХОТИТЕ ПЕРЕДАТЬ?' : user.Language} ${count} ${type} a @${(who || '').replace(/@s\.whatsapp\.net/g, '')}?\n\n> 
${user.Language === 'es' ? '*Tienes 60 segundos para confirmar*\n\n*• Escriba:*\n* si = *para acertar*\n* no = *para cancelar*' : user.Language === 'en' ? '*You have 60 seconds to confirm*\n\n*• Type:*\n* yes = *to succeed*\n* no = *to cancel*' : user.Language === 'ar' ? '*أمامك 60 ثانية للتأكيد*\n\n*• النوع:*\n* Yes = *للنجاح*\n* no = *للإلغاء*' : user.Language === 'pt' ? '*Você tem 60 segundos para confirmar*\n\n*• Digite:*\n* yes = *para ter sucesso*\n* no = *para cancelar*' : user.Language === 'id' ? '*Anda memiliki waktu 60 detik untuk mengonfirmasi*\n\n*• Ketik:*\n* yes = *untuk berhasil*\n* no = *untuk membatalkan*' : user.Language === 'rs' ? '*У вас есть 60 секунд на подтверждение*\n\n*• Введите:*\n* да = *для успеха*\n* нет = *для отмены*' : user.Language}`
await conn.sendTextWithMentions(m.chat, confirm, m)
this.confirm[m.sender.split('@')[0]] = { sender: m.sender, to: who, message: m, type, count, timeout: setTimeout(() => (m.reply(`⚠️ ${user.Language === 'es' ? '*Se acabó el tiempo, no se obtuvo respuesta. Transferencia cancelada.*' : user.Language === 'en' ? '*Time ran out, no response received. Transfer cancelled.*' : user.Language === 'ar' ? '*لقد انتهى الوقت ولم يتم الرد. تم إلغاء النقل.*' : user.Language === 'pt' ? '*O tempo acabou, nenhuma resposta foi recebida. Transferência cancelada.*' : user.Language === 'id' ? '*Waktu habis, tidak ada tanggapan yang diterima. Transfer dibatalkan.*' : user.Language === 'rs' ? '*Время истекло, ответа не получено. Перенос отменен.*' : user.Language}`), delete this.confirm[m.sender.split('@')[0]]), 60 * 1000)}}
break
      
//stickers  
case 's': case 'sticker': case 'wm': case 'take': case 'attp': case 'dado': case 'qc': stickers(m, command, conn, mime, quoted, args, text, lolkeysapi, fkontak)   
break
  
//idiomas 
case 'idioma': case 'Language': case 'idiomas': { 
let user = global.db.data.users[m.sender]
if (!text) return m.reply(lenguaje.AvisoMG() + lenguaje.idioma(prefix)) 
try { 
if (budy.includes(`1`)) {  
idioma = 'es' 
idiomas = 'español'
}
if (budy.includes(`2`)) {
idioma = 'en'
idiomas = 'ingles' 
}
if (budy.includes(`3`)) {
idioma = 'ar'
idiomas = 'arabe' 
}
if (budy.includes(`4`)) { 
idioma = 'id'
idiomas = 'indonesio'
}
if (budy.includes(`5`)) {  
idioma = 'pt'
idiomas = 'portugues'
} 
if (budy.includes(`6`)) {
idioma = 'rs' 
idiomas = 'ruso' 
} 
user.Language = idioma
m.reply(lenguaje.idioma2() + idiomas)
} catch (e) {
m.reply(lenguaje.AvisoMG() + lenguaje.idioma(prefix))}}
break  

case 'prueba': { 
await conn.sendPoll(m.chat, `Hola ${pushname}\n\n> 𝐒𝐮𝐩𝐞𝐫 𝐁𝐨𝐭 𝐃𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 `, ['play3 billie eilish', 'estado', 'menu', 'fb'])}
break   

//propietario/owner
case 'bcgc': case 'bcgroup': case 'bc': case 'broadcast': case 'bcall': case 'block': case 'bloquear': case 'unblock': case 'desbloquear': case 'setcmd':  case 'addcmd': case 'delcmd': case 'listcmd': case 'añadirdiamantes': case 'dardiamantes': case 'addlimit': case 'añadirxp': case 'addexp': case 'addxp': case 'fetch': case 'get': case 'fotobot': case 'nuevafoto': case 'seppbot': case 'botname': case 'nuevonombre': case 'namebot': case 'banuser': case 'unbanuser': case 'backup': case 'respaldo': case 'copia': owner(isCreator, m, command, conn, text, delay, fkontak, store, quoted, sender, mime, args) 
break    
case 'id': {m.reply(from)} break 
case 'getcase':  
if (!isCreator) return reply(info.owner)
if (!text) return m.reply(`${user.Language === 'es' ? '*Que comando esta buscando o que?*' : user.Language === 'en' ? '*What command are you looking for?*' : user.Language === 'ar' ? '*ما هو الأمر الذي تبحث عنه؟*' : user.Language === 'pt' ? '*Que comando esta buscando o que?*' : user.Language === 'id' ? '*Perintah apa yang kamu cari?*' : user.Language === 'rs' ? '*Какую команду вы ищете?*' : user.Language}`) 
try {  
bbreak = 'break'  
reply('case ' + `'${args[0]}'` + fs.readFileSync('./main.js').toString().split(`case '${args[0]}'`)[1].split(bbreak)[0] + bbreak) 
} catch (err) { 
console.error(err) 
reply(`${user.Language === 'es' ? 'Error, tal vez no existe el comando' : user.Language === 'en' ? 'Error, maybe the command does not exist' : user.Language === 'ar' ? ' خطأ، ربما الأمر غير موجود' : user.Language === 'pt' ? 'Erro, talvez o comando não exista' : user.Language === 'id' ? 'Error, mungkin perintahnya tidak ada' : user.Language === 'rs' ? 'Ошибка, возможно команда не существует' : user.Language}`)} 
break
case 'public': case 'publico': {
if (!isCreator) return reply(info.owner)
conn.public = true
m.reply(lenguaje.owner.text24)}
break
case 'self': case 'privado': {
if (!isCreator) return reply(info.owner)
conn.public = false
m.reply(lenguaje.owner.text25)}
break	 
case 'autoadmin': case 'tenerpoder': {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isCreator) return reply(info.owner)
reply(`${pickRandom(['Ya eres admin mi jefe 😎', '*LISTO YA ERES ADMIN MI PROPIETARIO/DESARROLLADO 😎*'])}`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")}  
break 
case 'leave': {  
if (!isCreator) return reply(info.owner)
reply(lenguaje.owner.text26)
await delay(3 * 3000)
await conn.groupLeave(m.chat)}
break
case 'update':   
if (!isCreator) return reply(info.owner)
try {    
let stdout = execSync('git pull' + (m.fromMe && q ? ' ' + q : ''))
await m.reply(stdout.toString())
} catch { 
let updatee = execSync('git remote set-url origin https://github.com/elrebelde21/NovaBot-MD.git && git pull')
await m.reply(updatee.toString())}  
break
case 'reiniciar': case 'restart': { 
if (!isCreator) return reply(info.owner) 
m.reply(lenguaje.owner.text28)
await delay(3 * 3000) 
conn.ws.close()}   
break  
/////////////////////////////////   
   
//--------------------[ FUNCIONES ]-----------------------  
function pickRandom(list) {return list[Math.floor(list.length * Math.random())]}       

function isNumber(x) {return !isNaN(x)}

//-------------------[ AUDIO/TEXTOS ]----------------------
default:   
if (budy.includes(`Todo bien`)) {
conn.sendPresenceUpdate('composing', m.chat)
await m.reply(`${pickRandom(['Si amigo todo bien, vite', 'Todo bien capo y tu 😎'])}`)} 
if (/^Buenos Dias|buenos dias|Bueno dias|Buenos dias$/i.test(budy)) {
conn.sendPresenceUpdate('composing', m.chat)
const vn = 'https://qu.ax/VrnK.mp3';
let or = ['texto', 'audio']; 
let media = or[Math.floor(Math.random() * 2)]
if (media === 'texto')       
m.reply(`${pickRandom(['Buenos Dias trolos de mierda', '*Buen dias mi amor 😘*', '*Buenos Dias hermosa mañana verdad 🥰*'])}`)
if (media === 'audio')      
conn.sendAudio(m.chat, vn, m)}  
if (budy.includes(`Autodestruction`)) { 
//let e = fs.readFileSync('./src/autodestruction.webp')
let e = 'https://qu.ax/gCQo.webp'
let or = ['texto', 'sticker']; 
let media = or[Math.floor(Math.random() * 2)]  
if (media === 'texto')
m.reply('*Mi jefe no me quiere 😢*')        
if (media === 'sticker')         
conn.sendFile(m.chat, e, 'sticker.webp', '',m, true, { contextInfo: { forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: 'INFINITY-WA 💫' }, forwardingScore: 9999999, isForwarded: true, 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: 'ᶜ ᴬᵘᵗᵒᵈᵉˢᶜʳᵘʸᵉ', mediaType: 2, sourceUrl: nna, thumbnail: imagen1}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (budy.includes(`NovaBot`) || budy.includes(`novabot`)) {
m.react(`${pickRandom(['🌟', '👀', '🤑'])}`)}
if (budy.includes(`Avisos`) || budy.includes(`Atencion`)) {
m.react(`${pickRandom(['📢', '👀', '⚠️'])}`)}
if (budy.includes(`Bot`) || budy.includes(`simi`)) {   
game(m, budy, command, text, pickRandom, pushname, conn, participants, sender, who, body, sendImageAsUrl)}
if (m.mentionedJid.includes(conn.user.jid)) {
let noetiqueta = 'https://qu.ax/lqFC.webp'
let or = ['texto', 'sticker']; 
let media = or[Math.floor(Math.random() * 2)]
if (media === 'sticker')     
conn.sendFile(m.chat, noetiqueta, 'sticker.webp', '',m, true, { contextInfo: { forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: 'INFINITY-WA 💫' }, forwardingScore: 9999999, isForwarded: true, 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: 'Yo que?', mediaType: 2, sourceUrl: nna, thumbnail: imagen1}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'texto')
await conn.sendMessage(m.chat, {text: `${pickRandom(['*QUE YO QUE?*', 'Que?'])}`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (budy.includes(`Yaoi`)) {
m.react(`${pickRandom(['😐', '👀', '😹'])}`)
m.reply(`${pickRandom(['Que mamada? vete a estudiar mejor', 'Soy un bot hetero, no pida mamada (︶｡︶)zzZ '])}`)}
if (budy.startsWith(`a`)) {
if (!global.db.data.chats[m.chat].audios) return
let vn = './media/a.mp3'
await conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (budy.startsWith(`hola`) || budy.startsWith(`hello`)) {
let vn = 'https://qu.ax/eGdW.mp3'
let stic = 'https://qu.ax/LTVf.webp' 
let stic2 = 'https://qu.ax/QftU.webp'      
let or = ['sticker', 'audio'];  
let media = or[Math.floor(Math.random() * 2)]
if (media === 'sticker') conn.sendFile(m.chat, pickRandom([stic, stic2]), 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `Hola ${pushname}`, mediaType: 2, sourceUrl: nna, thumbnail: imagen1}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})   
if (media === 'audio') conn.sendAudio(m.chat, vn, m)}
if (/^Fino señores|fino señores|Fino senores|fino senores|Fino🧐|🧐🍷|🧐🍷$/i.test(budy)) {
let s = 'https://qu.ax/DbMX.webp'
let s2 = 'https://qu.ax/zXa.webp'
let vn = 'https://qu.ax/hapR.mp3'
let or = ['sticker', 'audio'];  
let media = or[Math.floor(Math.random() * 2)]
if (media === 'sticker') conn.sendFile(m.chat, pickRandom([s, s2]), 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, mediaType: 2, sourceUrl: nna, thumbnail: imagen1}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})   
if (media === 'audio') conn.sendAudio(m.chat, vn, m)}
if (/^anadieleimporta|a nadie le importa|y que|no importa|literal$/i.test(budy)) {
let s = 'https://qu.ax/SHgM.webp'
let s2 = 'https://qu.ax/glpp.webp'
let vn = 'https://qu.ax/JocM.mp3'
let or = ['sticker', 'audio'];  
let media = or[Math.floor(Math.random() * 2)]
if (media === 'sticker') conn.sendFile(m.chat, pickRandom([s, s2]), 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, mediaType: 2, sourceUrl: nna, thumbnail: imagen1}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})   
if (media === 'audio') conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Feliz cumpleaños`)) {
const vn = 'https://qu.ax/UtmZ.mp3'
conn.sendAudio(m.chat, vn, m)
m.react(`${pickRandom(['🥳', '💫', '🎊'])}`)} 
if (budy.startsWith(`Feliz navidad`) || budy.startsWith(`Merry Christmas`) || budy.startsWith(`feliz navidad`)) {
const vn = 'https://qu.ax/XYyY.m4a'
conn.sendAudio(m.chat, vn, m)} 
if (budy.startsWith(`Vete a la verga`)) {
const vn = 'https://qu.ax/pXts.mp3';
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Uwu`)) {
const vn = 'https://qu.ax/lOCR.mp3';
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Siuuu`)) {
const vn = 'https://qu.ax/bfC.mp3';
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Pasa pack`)) {
const vn = 'https://qu.ax/KjHR.mp3';
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Audio hentai`)) {
const vn = 'https://qu.ax/GSUY.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Pasen porno`)) {
const vn = 'https://qu.ax/JDZB.mp3'
conn.sendAudio(m.chat, vn, m)}			
if (budy.startsWith(`VAMOOO`)) {
const vn = 'https://qu.ax/XGAp.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Hora del sexito`)) {
const vn = 'https://qu.ax/Jpjm.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Cuentate un chiste`)) {
const vn = 'https://qu.ax/MSiQ.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Admin party`)) {
const vn = 'https://qu.ax/MpnG.mp3' 
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Fiesta del admin`)) {
const vn = 'https://qu.ax/jDVi.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Viernes`)) {
const vn = 'https://qu.ax/wqXs.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`:v`)) {
const vn = 'https://qu.ax/cxDg.mp3'
const stic = 'https://qu.ax/ahLV.webp'
let or = ['sticker', 'audio'];   
let media = or[Math.floor(Math.random() * 2)] 
if (media === 'sticker') conn.sendFile(m.chat, stic, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `${pushname}`, mediaType: 2, sourceUrl: md, thumbnail: imagen1}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})   
if (media === 'audio') conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`La toca 7w7`)) {
const vn = 'https://qu.ax/Payh.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Quien es tu sempai botsito`)) {
const vn = 'https://qu.ax/likr.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Me gimes 7u7`)) {
const vn = 'https://qu.ax/kebK.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Te amo botsito uwu`)) {
const vn = 'https://qu.ax/tEpE.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Onichan`)) {
const vn = 'https://qu.ax/oZj.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Pasen sexo`)) {
const vn = 'https://qu.ax/xJMQ.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Paraguayo`)) {
const vn = 'https://qu.ax/wTxz.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Venezolano`)) {
const vn = 'https://qu.ax/hXh.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi corte`)) {
const vn = 'https://qu.ax/vYSf.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi buenos dias`)) {
const vn = 'https://qu.ax/kEsc.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Enano`)) {
const vn = 'https://qu.ax/XRgo.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Buenas noches`)) {
const vn = 'https://qu.ax/GSuP.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Peruano`)) {
const vn = 'https://qu.ax/avLe.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Alto temazo`)) {
const vn = 'https://qu.ax/SWYV.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`GOOOOD`)) {
const vn = 'https://qu.ax/wlJD.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Ya me voy a dormir`)) {
const vn = 'https://qu.ax/jeKb.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Calefon`)) {
const vn = 'https://qu.ax/UeXx.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Bot de mierda`)) {
const vn = 'https://qu.ax/oZfD.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Apurate bot`)) {
const vn = 'https://qu.ax/slhL.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Un chino`)) {
const vn = 'https://qu.ax/zfBR.mp3'
conn.sendAudio(m.chat, vn, m)}				
if (budy.startsWith(`No funciona`)) {
const vn = 'https://qu.ax/BEnA.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Boliviano`)) {
const vn = 'https://qu.ax/KsCp.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Corte`)) {
const vn = 'https://qu.ax/glrC.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi me saludas`)) {
const vn = 'https://qu.ax/xZRW.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi y las minitas`)) {
const vn = 'https://qu.ax/wYil.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi todo bien`)) {
const vn = 'https://qu.ax/MSpr.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Me quiero suicidar`)) {
const vn = 'https://qu.ax/ksFd.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi ya no aguanto`)) {
const vn = 'https://qu.ax/gNwU.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Contate algo bot`)) {
const vn = 'https://qu.ax/cFnb.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Sexo`)) { 
const vn = 'https://qu.ax/VZYF.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Pongan cuties`)) { 
const vn = 'https://qu.ax/cDFj.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Momento epico`)) {
const vn = 'https://qu.ax/pDNC.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`El bot del orto no funciona`)) {
const vn = 'https://qu.ax/STib.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Epicardo`)) {
const vn = 'https://qu.ax/FTaB.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Insta de la minita`)) {
const vn = 'https://qu.ax/JYh.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Una mierda de bot`)) {
const vn = 'https://qu.ax/keKg.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Ultimo momento`)) {
const vn = 'https://qu.ax/tleA.mp3'
conn.sendAudio(m.chat, vn, m)}			
if (budy.startsWith(`Nefasto`)) {
const vn = 'https://qu.ax/MaJu.mp3'
conn.sendAudio(m.chat, vn, m)}
                  
//--------------------[ OWNER ]-----------------------     
if (budy.startsWith('>')) {
if (!isCreator) return reply(info.owner)
try {
return reply(JSON.stringify(eval(budy.slice(2)), null, '\t'))
} catch (e) {
e = String(e)
reply(e)
}}
if (budy.startsWith('=>')) {
if (!isCreator) return
try {
return reply(JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'))  
} catch (e) {
e = String(e)
reply(e)
}}
if (budy.startsWith('$')) {
if (!isCreator) return reply(info.owner) 
try {
return reply(String(execSync(budy.slice(2), { encoding: 'utf-8' })))
} catch (err) { 
console.log(util.format(err))  
 
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
 
//--------------------[ REPORTE/ERRORS ]-----------------------     
let e = String(err) 
conn.sendMessage("5492266466080@s.whatsapp.net", { text: "Hola Creador/desarrollador, parece haber un error, por favor arreglarlo 🥲\n\n" + util.format(e), 
contextInfo:{forwardingScore: 9999999, isForwarded: false }})
process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)})}}}}

//--------------------[ UPDATE/CONSOLA ]-----------------------     

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})


