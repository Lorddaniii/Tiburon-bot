require('../main.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('../libs/uploader.js')
const { toAudio, toPTT, toVideo } = require('../libs/converter.js') 
let usuario = global.db.data.users[m.sender]

async function efec(conn, command, mime, quoted, exec, prefix, m, from) {
try {  
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return
await conn.sendPresenceUpdate('recording', m.chat)
let set  
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'  
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'   
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'  
if (/earrape/.test(command)) set = '-af volume=12'  
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'  
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'  
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'  
if (/reverse/.test(command)) set = '-filter_complex "areverse"'  
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'  
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'  
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'  
if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'   
if (/audio/.test(mime)) {  
let media = await conn. downloadAndSaveMediaMessage(quoted)  
let ran = getRandom('.mp3')  
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {  
fs.unlinkSync(media)  
if (err) return reply(err)  
let buff = fs.readFileSync(ran)  
conn.sendMessage(m.chat, { audio: buff, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, ptt: false, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
fs.unlinkSync(ran)})  
} else m.reply(`${lenguaje.sms.text} *${prefix + command}*`)  
} catch (e) {  
m.reply(`${info.error} ${e}`)
console.log(e)}}

async function efect2(m, text, prefix, command, conn) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return
if (!text) return m.reply(`\`🪄 ${usuario.Language === 'es' ? '𝐋𝐈𝐒𝐓𝐀𝐒 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒' : 
usuario.Language === 'en' ? 'LOGO LISTS' :  
usuario.Language === 'ar' ? ' قوائم الشعار' : 
usuario.Language === 'pt' ? 'LISTAS DE LOGOTIPO' : 
usuario.Language === 'id' ? 'DAFTAR LOGO' : 
usuario.Language === 'rs' ? 'СПИСКИ ЛОГОТИПОВ' : usuario.Language}\`

* ${prefix}logololi
* ${prefix}neon
* ${prefix}txt 
* ${prefix}devil
* ${prefix}transformer
* ${prefix}thunder
* ${prefix}graffiti
* ${prefix}bpink
* ${prefix}joker
* ${prefix}matrix
* ${prefix}wolf
* ${prefix}phlogo
* ${prefix}ballon
* ${prefix}dmd
* ${prefix}lightglow
* ${prefix}american
* ${prefix}halloween
* ${prefix}green
* ${prefix}glitch
* ${prefix}paper
* ${prefix}marvel
* ${prefix}ninja
* ${prefix}future
* ${prefix}3dbox
* ${prefix}graffiti2

────────────────────────

${usuario.Language === 'es' ? '𝐔𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐝𝐞 𝐥𝐚 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐦𝐚𝐧𝐞𝐫𝐚 𝐞𝐣𝐞𝐦𝐩𝐥𝐨 :' : 
usuario.Language === 'en' ? 'Use the command as follows example:' :  
usuario.Language === 'ar' ? ' استخدم الأمر على النحو التالي المثال:' : 
usuario.Language === 'pt' ? 'Use o comando conforme exemplo a seguir:' : 
usuario.Language === 'id' ? 'Gunakan perintah seperti contoh berikut:' : 
usuario.Language === 'rs' ? 'Используйте команду следующим образом:' : usuario.Language}
${prefix}neon NovaBot

${usuario.Language === 'es' ? '𝐄𝐧 𝐜𝐚𝐬𝐨 𝐝𝐞 𝐪𝐮𝐞 𝐝𝐢𝐠𝐚 𝐟𝐚𝐥𝐭𝐚 𝐭𝐞𝐱𝐭𝐨 𝐮𝐬𝐚𝐫 𝐝𝐞 𝐞𝐬𝐭𝐚 𝐟𝐨𝐫𝐦𝐚, 𝐄𝐣𝐞𝐦𝐩𝐥𝐨 :' : 
usuario.Language === 'en' ? 'If it says text is missing, use this way, example:' : 
usuario.Language === 'ar' ? ' إذا كانت الرسالة تقول أن النص مفقود، فاستخدم هذه الطريقة، على سبيل المثال:' : 
usuario.Language === 'pt' ? 'Se estiver faltando texto, use este método, exemplo:' : 
usuario.Language === 'id' ? 'Jika tertulis teks hilang, gunakan cara ini, contoh:' : 
usuario.Language === 'rs' ? 'Если он говорит, что текст отсутствует, используйте этот способ, например:' : usuario.Language}
${prefix}marvel texto1|texto2`) 

let [a, e] = text.split `+`   
if (!text.split) return m.reply(`Falta texto`) 
m.react('🕛')
try {
let link
if (/logololi/.test(command)) link = global.API('fgmods', '/api/maker/loli', { text }, 'apikey')
if (/neon/.test(command)) link = global.API('fgmods', '/api/textpro/neon', { text }, 'apikey')
if (/devil/.test(command)) link = global.API('fgmods', '/api/textpro/devil', { text }, 'apikey')
if (/transformer/.test(command)) link = global.API('fgmods', '/api/textpro/transformers', { text }, 'apikey')
if (/thunder/.test(command)) link = global.API('fgmods', '/api/textpro/thunder', { text }, 'apikey')
if (/graffiti/.test(command)) link = global.API('fgmods', '/api/textpro/graffiti', { text: a, text2: e}, 'apikey')
if (/bpink/.test(command)) link = global.API('fgmods', '/api/textpro/blackpink', { text }, 'apikey')
if (/joker/.test(command)) link = global.API('fgmods', '/api/textpro/joker', { text }, 'apikey')
if (/matrix/.test(command)) link = global.API('fgmods', '/api/textpro/matrix', { text }, 'apikey')
if (/wolf/.test(command)) link = global.API('fgmods', '/api/textpro/logowolf', { text: wm, text2: text}, 'apikey')
if (/phlogo/.test(command)) link = global.API('fgmods', '/api/textpro/pornhub', { text: a, text2: e}, 'apikey')
if (/ballon/.test(command)) link = global.API('fgmods', '/api/textpro/pornhub', { text: a, text2: e}, 'apikey')
if (/dmd/.test(command)) link = global.API('fgmods', '/api/textpro/diamond', { text }, 'apikey')
if (/lightglow/.test(command)) link = global.API('fgmods', '/api/textpro/lightglow', { text }, 'apikey')
if (/american/.test(command)) link = global.API('fgmods', '/api/textpro/American-flag', { text }, 'apikey')
if (/halloween/.test(command)) link = global.API('fgmods', '/api/textpro/American-flag', { text }, 'apikey')
if (/green/.test(command)) link = global.API('fgmods', '/api/textpro/green-horror', { text }, 'apikey')
if (/glitch/.test(command)) link = global.API('fgmods', '/api/textpro/impressive-glitch', { text }, 'apikey')
if (/paper/.test(command)) link = global.API('fgmods', '/api/textpro/art-paper-cut', { text }, 'apikey')
if (/marvel/.test(command)) link = global.API('fgmods', '/api/textpro/marvel', { text: a, text2: e}, 'apikey')
if (/ninja/.test(command)) link = global.API('fgmods', '/api/textpro/ninja', { text: a, text2: e}, 'apikey')
if (/future/.test(command)) link = global.API('fgmods', '/api/textpro/futuristic', { text }, 'apikey')
if (/3dbox/.test(command)) link = global.API('fgmods', '/api/textpro/3dboxtext', { text }, 'apikey')
if (/graffiti2/.test(command)) link = global.API('fgmods', '/api/textpro/graffiti2', { text: a, text2: e}, 'apikey')
conn.sendFile(m.chat, link, 'logo.png', `🪄 ${usuario.Language === 'es' ? '𝐓𝐎𝐌𝐀 𝐓𝐔 𝐋𝐎𝐆𝐎 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐋𝐈𝐙𝐀𝐃𝐎!!\n\n❀ 𝐄𝐅𝐄𝐂𝐓𝐎' : 
usuario.Language === 'en' ? 'TAKE YOUR PERSONALIZED LOGO\n\n❀ EFFECT' :  
usuario.Language === 'ar' ? ' احصل على تأثير شعارك المخصص\n\n❀' : 
usuario.Language === 'pt' ? 'TOME SEU EFEITO LOGOTIPO PERSONALIZADO\n\n❀' : 
usuario.Language === 'id' ? 'AMBIL EFEK LOGO PRIBADI ANDA\n\n❀' : 
usuario.Language === 'rs' ? 'СОЗДАЙТЕ СВОЙ ПЕРСОНАЛИЗИРОВАННЫЙ ЛОГОТИП\n\n❀ ЭФФЕКТ' : usuario.Language}: ${command}`, m)
m.react('🪄')
} catch (e) {  
m.reply(`${info.error} ${e}`)
console.log(e)}}

async function convertidores(conn, command, mime, quoted, util, m, exec, lolkeysapi, text) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return
if (command == 'tourl') {
if (!mime) return m.reply(`${lenguaje.sms.text2}`)  
m.reply(info.wait) 
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../libs/uploader') 
let media = await conn.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(`*🔸Link :*\n${util.format(anu)}`)
} else if (!/image/.test(mime)) { 
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))}
await fs.unlinkSync(media)}

if (command == 'toaudio' || command == 'tomp3') {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(lenguaje.sms.text3) 
if (!quoted) return m.reply(lenguaje.sms.text3) 
let { toAudio } = require('../libs/converter.js')
let media  = await conn.downloadMediaMessage(quoted)
let audio = await toAudio(media, 'mp4')
await conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg', contextInfo:{  externalAdReply: { showAdAttribution: true, mediaType:  1, mediaUrl: md, title: global.botname, sourceUrl: md, thumbnail: imagen1 }}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'toimg' || command == 'toimagen') {
if (!m.quoted) return m.reply(lenguaje.sms.text4) 
if (!/webp/.test(mime)) return m.reply(lenguaje.sms.text4) 
let media = await conn.downloadAndSaveMediaMessage(m.quoted)
let ran = await getRandom('sk.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
fs.unlinkSync(ran)})}

if (command == 'toanime') {
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
let _upload = await TelegraPh(media)
try {
let anime = await `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${_upload}`
m.reply(lenguaje.sms.text5);
await conn.sendFile(m.chat, anime, 'error.jpg', null, m) 
} catch (e) {
throw m.reply(info.error)}
} else { 
m.reply(lenguaje.sms.text7)}}

if (command == 'txt') {
if (!text) return m.reply(`⚠️ ${usuario.Language === 'es' ? 'Y el texto?, Que quieres te escribar?' : 
usuario.Language === 'en' ? 'And the text? What do you want to write?' : 
usuario.Language === 'ar' ? ' والنص ماذا تريد أن تكتب؟' : 
usuario.Language === 'pt' ? 'E o texto? O que você quer escrever?' : 
usuario.Language === 'id' ? 'Dan teksnya? Apa yang ingin kamu tulis?' : 
usuario.Language === 'rs' ? 'А текст?Что вы хотите написать?' : usuario.Language}`) 
m.react('📝')
let img = global.API('fgmods', '/api/maker/txt', { text: text }, 'apikey')
conn.sendFile(m.chat, img, 'img.png', `✍🏻 ${lenguaje['exito']()}`, m)}}

module.exports = {efec, convertidores, efect2}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})