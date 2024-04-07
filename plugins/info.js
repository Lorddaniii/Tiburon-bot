const baileys = require('@whiskeysockets/baileys')
 const moment = require('moment-timezone') 
 const gradient = require('gradient-string') 
 const fetch = require('node-fetch') 
 const axios = require('axios')
 const cheerio = require('cheerio')
 const Jimp = require('jimp')
 const os = require('os')
 const chalk = require('chalk')
 const fs = require("fs")
 const ws = require('ws')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js')
let usuario = global.db.data.users[m.sender]
let panel = "https://www.cafirexos.com"
let panel2 = "https://host.panel-infinitywa.store"
let cafi = "https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q"
let cafi2 = "https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ"

async function info(command, conn, m, speed, sender, fkontak, pickRandom, pushname, from, msg, text) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return
if (command == 'estado' || command == 'infobot') {
const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024))
const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024))
const usedMemory = totalMemory - freeMemory
const cpuUsage = os.loadavg()[0]
let me = m.sender
var timestamp = speed();  
var latensi = speed() - timestamp  
const user = [...new Set([...global.listJadibot.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let stateRun = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *${lenguaje.info.text}*
┊┃━━━━━━━━━━━━━━•
┊┃ ✨ ${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 
┊┃
┊┃ ${lenguaje.info.text2} ${usedMemory} GB / ${totalMemory} GB
┊┃ ${lenguaje.info.text3} ${os.platform()}
┊┃ ${lenguaje.info.text4} ${os.hostname()}
┊┃ ${lenguaje.info.text5} ${cpuUsage.toFixed(2)}%
┊┃ ${lenguaje.info.text6} ${totalMemory} GB
┊┃━━━━━━━━━━━━━━•
┊┃ ${lenguaje.info.text7} ${Object.keys(global.db.data.users).length}
┊┃➢ ${usuario.Language === 'es' ? '𝙶𝚁𝚄𝙿𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ' : usuario.Language === 'en' ? '𝙱𝙰𝙽𝙽𝙴𝙳 𝙶𝚁𝙾𝚄𝙿𝚂:' : usuario.Language === 'ar' ? ' المجموعات المحظورة:' : usuario.Language === 'pt' ? '𝙶𝚁𝚄𝙿𝙾𝚂 𝙿𝚁𝙾𝙸𝙱𝙸𝙳𝙾𝚂:' : usuario.Language === 'id' ? 'KELOMPOK YANG DILARANG:' : usuario.Language === 'rs' ? 'ЗАПРЕЩЕННЫЕ ГРУППЫ:' : usuario.Language} ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
┊┃➢ ${usuario.Language === 'es' ? '𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ' : usuario.Language === 'en' ? '𝙱𝙰𝙽𝙽𝙴𝙳 𝚄𝚂𝙴𝚁𝚂:' :  usuario.Language === 'ar' ? ' المستخدمون المحظورون:' : usuario.Language === 'pt' ? '𝚄𝚂𝚄𝙰́𝚁𝙸𝙾𝚂 𝙱𝙰𝙽𝙸𝙳𝙾𝚂:' : usuario.Language === 'id' ? 'PENGGUNA YANG DILARANG:' : usuario.Language === 'rs' ? 'ЗАПРЕЩЕННЫЕ ПОЛЬЗОВАТЕЛИ:' : usuario.Language} ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
┊┃ ${lenguaje.info.text8} ${runtime(process.uptime())} 
┊┃ ${lenguaje.info.text9} ${conn.public ? 'Público' : `Privado`}
┊┃ ${lenguaje.info.text10} ${user.length}
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩ ${conn.user.id == global.numBot2 ? '' : `\n\n${lenguaje.info.text11} wa.me/${global.numBot.split`@`[0]}`}`.trim() //`
let ments = [me]      
conn.sendMessage(m.chat, {image: imagen1, caption: stateRun, contextInfo:{ mentionedJid:[sender]}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'owner' || command == 'creador' || command == 'contacto') {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;PROPIETARIO/OWNER DEL BOT 👑;;;\nFN:OWNER\nORG:PROPIETARIO/OWNER DEL BOT 👑\nTITLE:\nitem1.TEL;waid=5492266466080:+54 9 2266 46-6080\nitem1.X-ABLabel:PROPIETARIO/OWNER DEL BOT👑\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:PROPIETARIO/OWNER DEL BOT 👑\nEND:VCARD`
let a = await conn.sendMessage(m.chat, { contacts: { displayName: 'ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ 👑', contacts: [{ vcard }] }}, {quoted: m})
await conn.sendMessage(m.chat, { text : `${lenguaje['smsWel']()} @${sender.split("@")[0]}, ${lenguaje.info.text12}\n\n${fb}`, mentions: [sender]}, { quoted: a, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'grupos' || command == 'grupoficiales') {
//const grupp = Math.floor(Math.random() * 70);
let a = `${pickRandom([nn, nn3, nn4, nn5, nn6, nna, nn7, nn8, multi])}`
let imagen = `${pickRandom([imagen1, imagen2, imagen3])}`
conn.sendMessage(m.chat, { text: `${lenguaje.info.text13}\n1) ${nn}\n\n${lenguaje.info.text14}\n• ${nn3}\n\n• ${nn4}\n\n• ${nn5}\n\n• ${multi}\n\n${lenguaje.info.text15}\n• ${nn6}\n\n${lenguaje.info.text16}\n• ${nna}\n\n${lenguaje.info.text17}\n• ${nn7}\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n${lenguaje.info.text18}\n\n*⇶⃤꙰𝑬𝒏𝒍𝒂𝒄𝒆 𝒍𝒐𝒍𝒊𝒃𝒐𝒕ꦿ⃟⃢*\n${nn8}\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n${lenguaje.info.text19}`, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: 'INFINITY-WA 💫' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: a}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'instalarbot' || command == 'crearbot') {
conn.sendMessage(m.chat, { text: lenguaje.info.text20(fb, md),
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' },
mentions: [sender], 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": wm,
"body": pushname,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": imagen1, 
"sourceUrl": md}}},
{ quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'ping') {
var timestamp = speed();  
var latensi = speed() - timestamp
conn.sendMessage(from, { text: `*Pong 🏓  ${latensi.toFixed(4)}*` }, { quoted: msg, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'report') {
if (!text) return m.reply(`${lenguaje.info.text21}\n${prefix + command} sticker no funciona`)
conn.sendMessage(`573026191480@s.whatsapp.net`, {text: `╭━━〔 ${usuario.Language === 'es' ? '*𝚁𝙴𝙿𝙾𝚁𝚃𝙴 | 𝚁𝙴𝙿𝙾𝚁𝚃*' : usuario.Language === 'en' ? '*𝚁𝙴𝙿𝙾𝚁𝚃𝙴 | 𝚁𝙴𝙿𝙾𝚁𝚃*' : usuario.Language === 'ar' ? 'تقرير | تقرير' : usuario.Language === 'pt' ? 'RELATÓRIO' : usuario.Language === 'id' ? 'LAPORAN' : usuario.Language === 'rs' ? 'Они сообщают' : usuario.Language} 〕━━⬣\n┃\n┃✿ ${usuario.Language === 'es' ? '*𝙽𝚞𝚖𝚎𝚛𝚘 | 𝚗𝚞𝚖𝚋𝚎𝚛*' : usuario.Language === 'en' ? '*𝙽𝚞𝚖𝚎𝚛𝚘 | 𝚗𝚞𝚖𝚋𝚎𝚛*' : usuario.Language === 'ar' ? '*رقم:*' :  usuario.Language === 'pt' ? '*Número:*' : usuario.Language === 'id' ? '*Nomor:*' : usuario.Language === 'rs' ? '*Число:*' : usuario.Language}\n┃⇢ wa.me/${m.sender.split("@")[0]}\n┃\n┃✿ ${usuario.Language === 'es' ? '*𝙼𝚎𝚗𝚜𝚊𝚓𝚎 | 𝚝𝚎𝚡𝚝*' : usuario.Language === 'en' ? '*𝙼𝚎𝚗𝚜𝚊𝚓𝚎 | 𝚝𝚎𝚡𝚝*' : usuario.Language === 'ar' ? '*رسالة:*' : usuario.Language === 'pt' ? '*Mensagem:*' : usuario.Language === 'id' ? '*Pesan:*' : usuario.Language === 'rs' ? '*Сообщение:*' : usuario.Language}\n┃: ${text}┃\n╰━━━〔 *${vs}* 〕━━━⬣` })
m.reply(`${lenguaje.info.text22}`)
}

if (command == 'donar') {
conn.sendMessage(m.chat, { text: lenguaje.info.text23(paypal) + `\n\n${lenguaje.info.text24}`, contextInfo:{ forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '',  newsletterName: 'INFINITY-WA 💫' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "body": `Ayuda a mantener el bot activo`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: md}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'solicitud') {
conn.sendMessage(m.chat, { text: lenguaje.grupos.text8(md, yt, nn7, fb), contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '',  newsletterName: 'INFINITY-WA 💫' }, forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": wm, "body": vs, "previewType": "VIDEO", thumbnail: imagen1, sourceUrl: pickRandom([nna, nn, md, yt])}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'cuenta' || command == 'cuentaofc' || command == 'cuentaoficiales' || command == 'cuentas') {
conn.sendMessage(m.chat, { text: `*🔰 ${lenguaje['smsWel']()}* @${sender.split("@")[0]} ${lenguaje['cuenta'](nna, md, yt, tiktok, fb)}`, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '',  newsletterName: 'INFINITY-WA 💫' }, mentionedJid:[sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'infohost' || command == 'host') {
conn.sendMessage(m.chat, { text: lenguaje.info.text27(nna, host, paypal, fb),
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' },
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘𝐖𝐀-𝐇𝐎𝐒𝐓 🤖`,
body: `✅ Hosting de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/EQTd.jpg', 
"sourceUrl": pickRandom([nna, panel2, host, md])}}},
{ quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'cafirexos' || command == 'Cafirexos') {
conn.sendMessage(m.chat, { text: lenguaje.info.text26,
contextInfo:{
forwardedNewsletterMessageInfo: {
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '',  
newsletterName: 'INFINITY-WA 💫' },
mentions: [sender], 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🔵 C A F I R E X O S 🔵`, 
body: `✅ Hosting de Calidad`, 
"previewType": "PHOTO",
thumbnailUrl: 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo_2.png', 
"sourceUrl": pickRandom([nna, panel, cafi, cafi2, md, yt])}}},
{ quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == '5492266613038' || command == '593980586516' || command == '595975740803') {
if (!args.join(" ")) return m.reply(lenguaje.info.text25)
teks = `*|  |*`
teks1 = `\n\n`
teks2 = `\n\n`
for (let i of owner) {
conn.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}
conn.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}

if (command == 'sc') {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
let res = await fetch('https://api.github.com/repos/elrebelde21/NovaBot-MD')
let json = await res.json()
let txt = `			 *乂 B O T  -  S C R I P T 乂*\n\n`
txt += `◦ *${usuario.Language === 'es' ? 'Nombre' : usuario.Language === 'en' ? 'Name' : usuario.Language === 'ar' ? ' اسم' : usuario.Language === 'pt' ? 'Nome' : usuario.Language === 'id' ? 'Nama' : usuario.Language === 'rs' ? 'Имя' : usuario.Language} :* ${json.name}\n`
txt += `◦ *${usuario.Language === 'es' ? 'Visitantes' : usuario.Language === 'en' ? 'Visitors' : usuario.Language === 'ar' ? ' الزائرين' : usuario.Language === 'pt' ? 'Visitantes' : usuario.Language === 'id' ? 'Pengunjung' : usuario.Language === 'rs' ? 'Посетители' : usuario.Language} :* ${json.watchers_count}\n`
txt += `◦ *${usuario.Language === 'es' ? 'Tamaños' : usuario.Language === 'en' ? 'Sizes' : usuario.Language === 'ar' ? ' الأحجام' :  usuario.Language === 'pt' ? 'Tamanhos' : usuario.Language === 'id' ? 'Ukuran' : usuario.Language === 'rs' ? 'Размеры' : usuario.Language} :* ${(json.size / 1024).toFixed(2)} MB\n`
txt += `◦  *${usuario.Language === 'es' ? 'Actulizacion' : usuario.Language === 'en' ? 'Update' :  usuario.Language === 'ar' ? ' تحديث' : usuario.Language === 'pt' ? 'Atualizar' : usuario.Language === 'id' ? 'Memperbarui' : usuario.Language === 'rs' ? 'Обновлять' : usuario.Language} :* ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
txt += `◦  *Url* : ${json.html_url}\n\n`
txt += `${json.forks_count} Forks · ${json.stargazers_count} Stars · ${json.open_issues_count} Issues\n\n`
txt += res
await conn.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'INR', amount1000: '1000000000000', requestFrom: '0@s.whatsapp.net', noteMessage: {extendedTextMessage: {text: txt, contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true }}}}}}, {})}

if (command == 'status' || command == 'velocidad') {
const { performance } = require('perf_hooks') 
const osu = require('node-os-utils') 
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024))
const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024))
const usedMemory = totalMemory - freeMemory
const cpuUsage = os.loadavg()[0]                
let respon = `      \`⧼⧼⧼ 🚀 ${usuario.Language === 'es' ? 'ＶＥＬＯＣＩＤＡＤ' : usuario.Language === 'en' ? 'ＳＰＥＥＤ' :  usuario.Language === 'ar' ? ' سرعة' : usuario.Language === 'pt' ? 'ＶＥＬＯＣＩＤＡＤＥ' : usuario.Language === 'id' ? 'ＫＥＣＥＰＡＴＡＮ' : usuario.Language === 'rs' ? 'СКОРОСТЬ' : usuario.Language} ⧽⧽⧽\`
> ${latensi.toFixed(4)} Seg
> ${oldd - neww} _milisegundos_
                
\`✅ ${usuario.Language === 'es' ? 'INFORMACIÓN DEL BOT' :  usuario.Language === 'en' ? 'BOT INFORMATION' : usuario.Language === 'ar' ? ' معلومات الروبوت' : usuario.Language === 'pt' ? 'INFORMAÇÕES DO BOT' : usuario.Language === 'id' ? 'INFORMASI BOT' : usuario.Language === 'rs' ? 'ИНФОРМАЦИЯ О БОТЕ' : usuario.Language}\`               
➢ ${usuario.Language === 'es' ? '𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳' : usuario.Language === 'en' ? 'ACTIVITY' :  usuario.Language === 'ar' ? ' نشاط' : usuario.Language === 'pt' ? 'ATIVIDADE' : usuario.Language === 'id' ? 'AKTIVITAS' : usuario.Language === 'rs' ? 'АКТИВНОСТЬ' : usuario.Language}: ${runtime(process.uptime())}
➢ ${usuario.Language === 'es' ? '𝙶𝚁𝚄𝙿𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ' : usuario.Language === 'en' ? '𝙱𝙰𝙽𝙽𝙴𝙳 𝙶𝚁𝙾𝚄𝙿𝚂:' : usuario.Language === 'ar' ? ' المجموعات المحظورة:' : usuario.Language === 'pt' ? '𝙶𝚁𝚄𝙿𝙾𝚂 𝙿𝚁𝙾𝙸𝙱𝙸𝙳𝙾𝚂:' : usuario.Language === 'id' ? 'KELOMPOK YANG DILARANG:' : usuario.Language === 'rs' ? 'ЗАПРЕЩЕННЫЕ ГРУППЫ:' : usuario.Language} ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
➢ ${usuario.Language === 'es' ? '𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ' : usuario.Language === 'en' ? '𝙱𝙰𝙽𝙽𝙴𝙳 𝚄𝚂𝙴𝚁𝚂:' :  usuario.Language === 'ar' ? ' المستخدمون المحظورون:' : usuario.Language === 'pt' ? '𝚄𝚂𝚄𝙰́𝚁𝙸𝙾𝚂 𝙱𝙰𝙽𝙸𝙳𝙾𝚂:' : usuario.Language === 'id' ? 'PENGGUNA YANG DILARANG:' : usuario.Language === 'rs' ? 'ЗАПРЕЩЕННЫЕ ПОЛЬЗОВАТЕЛИ:' : usuario.Language} ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
➢ ${usuario.Language === 'es' ? '𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚃𝙾𝚃𝙰𝙻𝙴𝚂' : usuario.Language === 'en' ? '𝚃𝙾𝚃𝙰𝙻 𝚄𝚂𝙴𝚁𝚂' : usuario.Language === 'ar' ? ' إجمالي المستخدمين' :  usuario.Language === 'pt' ? '𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝚄𝚂𝚄𝙰́𝚁𝙸𝙾𝚂' : usuario.Language === 'id' ? '𝙹𝚄𝙼𝙻𝙰𝙷 𝙿𝙴𝙽𝙶𝙶𝚄𝙽𝙰' : usuario.Language === 'rs' ? 'ВСЕГО ПОЛЬЗОВАТЕЛЕЙ' : usuario.Language}: ${Object.keys(global.db.data.users).length}

\`💻 ${usuario.Language === 'es' ? 'INFO DE SERVIDOR' : usuario.Language === 'en' ? 'SERVER INFO' :  usuario.Language === 'ar' ? ' معلومات الخادم' : usuario.Language === 'pt' ? 'INFORMAÇÕES DO SERVIDOR' : usuario.Language === 'id' ? 'INFORMASI SERVER' : usuario.Language === 'rs' ? 'ИНФОРМАЦИЯ О СЕРВЕРЕ' : usuario.Language}\`
➢ ${usuario.Language === 'es' ? 'RAM' : usuario.Language === 'en' ? 'RAM MEMORY' : usuario.Language === 'ar' ? ' ذاكرة وصول العشوائي' : usuario.Language === 'pt' ? 'MEMORIA RAM' : usuario.Language === 'id' ? 'MEMORI RAM' : usuario.Language === 'rs' ? 'ОЗУ ПАМЯТЬ' : usuario.Language}: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
➢ ${usuario.Language === 'es' ? '𝙿𝙻𝙰𝚃𝙰𝙵𝙾𝚁𝙼𝙰' : usuario.Language === 'en' ? 'PLATFORM' : usuario.Language === 'ar' ? ' منصة' : usuario.Language === 'pt' ? 'PLATAFORMA' : usuario.Language === 'id' ? 'PLATFORM' : usuario.Language === 'rs' ? 'ПЛАТФОРМА' : usuario.Language}: ${os.platform()}
${lenguaje.info.text4} ${os.hostname()}
${lenguaje.info.text5} ${cpuUsage.toFixed(2)}%
${lenguaje.info.text6} ${totalMemory} GB

\`❐ ${usuario.Language === 'es' ? 'Uso de memoria de NodeJS' : usuario.Language === 'en' ? 'NodeJS memory usage' :  usuario.Language === 'ar' ? ' استخدام ذاكرة NodeJS' : usuario.Language === 'pt' ? 'Uso de memória NodeJS' : usuario.Language === 'id' ? 'Penggunaan memori NodeJS' : usuario.Language === 'rs' ? 'Использование памяти NodeJS' : usuario.Language}\`
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `\`❐ ${usuario.Language === 'es' ? 'Uso total de CPU' : usuario.Language === 'en' ? 'Total CPU Usage' : usuario.Language === 'ar' ? ' إجمالي استخدام وحدة المعالجة المركزية' :  usuario.Language === 'pt' ? 'Uso total da CPU' : usuario.Language === 'id' ? 'Total Penggunaan CPU' : usuario.Language === 'rs' ? 'Общая загрузка ЦП' : usuario.Language}\`
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_Uso de núcleo(s) de CPU (${cpus.length} CPU central)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
conn.sendFile(m.chat, imagen1, 'lp.jpg', respon, m, false, { contextInfo: { externalAdReply: {title: "𝘐𝘔𝘍𝘖𝘙𝘔𝘈𝘊𝘐𝘖𝘕 𝘈𝘊𝘌𝘙𝘊𝘈 𝘋𝘌𝘓 𝘉𝘖𝘛", body: "Click para entrar", sourceUrl: md, thumbnail: imagen3 }}})}//`

if (command == 'speedtest' || command == 'speed') {
const cp = require('child_process') 
const {promisify} = require('util') 
const exec = promisify(cp.exec).bind(cp);
let o;
conn.fakeReply(m.chat, `🚀 ${usuario.Language === 'es' ? 'Prueba de velocidad' : usuario.Language === 'en' ? 'Speed ​​Test' : usuario.Language === 'ar' ? ' اختبار السرعة' : usuario.Language === 'pt' ? 'Teste de velocidade' : usuario.Language === 'id' ? 'Tes Kecepatan' : usuario.Language === 'rs' ? 'Тест скорости' : usuario.Language}`, '0@s.whatsapp.net', 'test')
try {
o = await exec('python3 speed.py --secure --share');
} catch (e) {
o = e;
} finally {
const {stdout, stderr} = o;
if (stdout.trim()) m.reply(stdout);
if (stderr.trim()) m.reply(stderr)
console.log(stderr) 
}}}

module.exports = { info }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
