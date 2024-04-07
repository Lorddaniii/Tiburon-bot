require('../main.js') 
const fs = require("fs") 
const path = require("path")
const chalk = require("chalk");
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 

async function enable(m, command, isGroupAdmins, text, command, args, isBotAdmins, isGroupAdmins, isCreator) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let user = global.db.data.users[m.sender]
if (command == 'enable' || command == 'configuracion' || command == 'configurar') {
const {welcome, antilink, antiFake, antiArabe, detect, autosticker, antiNsfw, modeadmin, chatbot, audios, autolevelup, antitoxic, antiprivado, anticall, antilink2, AntiTiktok, AntiTelegram, AntiFacebook, AntInstagram, AntiYoutube, AntiTwitter, autoread} = global.db.data.chats[m.chat];
m.reply(`\`⧼⧼⧼ ${user.Language === 'es' ? 'ＣＯＮＦＩＧＵＲＡＣＩＯ́Ｎ' : user.Language === 'en' ? 'ＳＥＴＴＩＮＧ' : user.Language === 'ar' ? ' جلسة' :  user.Language === 'pt' ? 'ＣＯＮＴＥＸＴＯ' : user.Language === 'id' ? 'ＰＥＮＧＡＴＵＲＡＮ' : user.Language === 'rs' ? 'ПАРАМЕТР' : user.Language} ⧽⧽⧽\`

${user.Language === 'es' ? '> ✅ Funcion activar\n> ❌ Función desactivada' : user.Language === 'en' ? '> ✅ Function activated\n> ❌ Function deactivated' : user.Language === 'ar' ? '> ✅ الوظيفة مفعلة\n> ❌ الوظيفة معطلة' : user.Language === 'pt' ? '> ✅ Função ativada\n> ❌ Função desativada' : user.Language === 'id' ? '> ✅ Fungsi diaktifkan\n> ❌ Fungsi dinonaktifkan' : user.Language === 'rs' ? '> ✅ Функция активирована\n> ❌ Функция деактивирована' : user.Language}

       \`『 ${user.Language === 'es' ? 'FUNCIÓN PARA ADMINS' : user.Language === 'en' ? 'FUNCTION FOR ADMINS' : user.Language === 'ar' ? ' وظيفة للمسؤولين' : user.Language === 'pt' ? 'FUNCIÓN PARA ADMINS' : user.Language === 'id' ? 'FUNGSI UNTUK ADMIN' : user.Language === 'rs' ? 'ФУНКЦИЯ ДЛЯ АДМИНОВ' : user.Language} 』\`
       
* ${prefix}welcome on ${welcome ? '✅' : '❌'}
${user.Language === 'es' ? '> ᴰᵉˢᶜ : ᵈᵃʳ ˡᵃ ᵇᶦᵉⁿᵛᵉⁿᶦᵈᵃ ᵃ ˡᵒˢ ⁿᵘᵉᵛᵒ ᵐᶦᵉᵐᵇʳᵒˢ' : user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ʷᵉˡᶜᵒᵐᵉ ⁿᵉʷ ᵍʳᵒᵘᵖ ᵐᵉᵐᵇᵉʳˢ' : user.Language === 'ar' ? '> الوصف: نرحب بأعضاء المجموعة الجدد' : user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵇᵒᵃˢ-ᵛᶦⁿᵈᵃˢ ᵃᵒˢ ⁿᵒᵛᵒˢ ᵐᵉᵐᵇʳᵒˢ ᵈᵒ ᵍʳᵘᵖᵒ' : user.Language === 'id' ? '> Deskripsi: menyambut anggota grup baru' : user.Language === 'rs' ? '> Описание: приветствуем новых участников группы' : user.Language}

* ${prefix}antilink on ${antilink ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵃ ˡᶦⁿᵏˢ ᵈᵉ́ ᵒᵗʳᵒˢ ᵍʳᵘᵖᵒˢ' : user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵉˣᶜˡᵘᵈᵉˢ ᵗʰᵒˢᵉ ʷʰᵒ ˢᵉⁿᵈ ˡᶦⁿᵏˢ ᶠʳᵒᵐ ᵒᵗʰᵉʳ ᵍʳᵒᵘᵖˢ' : user.Language === 'ar' ? '> الوصف: يستثني أولئك الذين يرسلون روابط من مجموعات أخرى' : user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵉˣᶜˡᵘᶦ ᵠᵘᵉᵐ ᵉⁿᵛᶦᵃ ˡᶦⁿᵏˢ ᵈᵉ ᵒᵘᵗʳᵒˢ ᵍʳᵘᵖᵒˢ' : user.Language === 'id' ? '> Deskripsi: mengecualikan mereka yang mengirim tautan dari grup lain' : user.Language === 'rs' ? '> Описание: исключает тех, кто отправляет ссылки из других групп.' : user.Language}

* ${prefix}antilink2 on ${antilink2 ? '✅' : '❌'}
${user.Language === 'es' ? '> ❍ ᴰᵉˢᶜ : ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᶜᵘᵃˡᵠᵘᶦᵉʳ ˡᶦⁿᵏ ᵠᵘᵉ ᶜᵒⁿᵗᵉⁿᵍᵃⁿ https/' : user.Language === 'en' ? 'ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵉˣᵖᵉˡ ˢᵉⁿᵈᵉʳˢ ᵒᶠ ᵃⁿʸ ᵗʸᵖᵉ ᵒᶠ ˡᶦⁿᵏˢ ᵗʰᵃᵗ ᶜᵒⁿᵗᵃᶦⁿ https/' : user.Language === 'ar' ? ' الوصف: طرد مرسلي أي نوع من الروابط التي تحتوي على https/' : user.Language === 'pt' ? 'ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵉˣᵖᵘˡˢᵃʳ ʳᵉᵐᵉᵗᵉⁿᵗᵉˢ de ᵠᵘᵃˡᵠᵘᵉʳ ᵗᶦᵖᵒ ᵈᵉ ˡᶦⁿᵏ ᵠᵘᵉ ᶜᵒⁿᵗᵉⁿʰᵃ https/' : user.Language === 'id' ? 'Deskripsi: mengusir pengirim semua jenis tautan yang mengandung https/' : user.Language === 'rs' ? 'Описание: исключать отправителей любых типов ссылок, содержащих https/.' : user.Language}

* ${prefix}AntiTiktok on ${AntiTiktok ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᵃˡᵍᵘⁿ ˡᶦⁿᵏ ᵈᵉ ᵀᶦᵏᵀᵒᵏ' :  user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵉˣᵖᵉˡ ᵗʰᵒˢᵉ ʷʰᵒ ˢᵉⁿᵈ ᵃⁿʸ ᵗᶦᵏᵗᵒᵏ ˡᶦⁿᵏˢ' : user.Language === 'ar' ? '> الوصف: طرد من يرسل أي روابط تيك توك' : user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵉˣᵖᵘˡˢᵃʳ ᵠᵘᵉᵐ ᵉⁿᵛᶦᵃʳ ᵃˡᵍᵘᵐ ˡᶦⁿᵏ ᵈᵒ ᵗᶦᵏᵗᵒᵏ' : user.Language === 'id' ? '> Deskripsi: mengusir mereka yang mengirim tautan tiktok apa pun' : user.Language === 'rs' ? '> Описание: исключать тех, кто отправляет ссылки на тикток.' : user.Language}

* ${prefix}AntiTelegram on ${AntiTelegram ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᵃˡᵍᵘⁿ ˡᶦⁿᵏ ᵈᵉ ᵀᵉˡᵉᵍʳᵃᵐ' :  user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵉˣᵖᵉˡ ᵗʰᵒˢᵉ ʷʰᵒ ˢᵉⁿᵈ ᵃⁿʸ ᵀᵉˡᵉᵍʳᵃᵐ ˡᶦⁿᵏˢ' : user.Language === 'ar' ? '> الوصف: طرد من يرسل أي روابط تيك توك' : user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵉˣᵖᵘˡˢᵃʳ ᵠᵘᵉᵐ ᵉⁿᵛᶦᵃʳ ᵃˡᵍᵘᵐ ˡᶦⁿᵏ ᵈᵒ ᵀᵉˡᵉᵍʳᵃᵐ' : user.Language === 'id' ? '> Deskripsi: mengusir mereka yang mengirim tautan tiktok apa pun' : user.Language === 'rs' ? '> Описание: исключать тех, кто отправляет ссылки на ᵀᵉˡᵉᵍʳᵃᵐ.' : user.Language}

* ${prefix}AntiFacebook on ${AntiFacebook ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᵃˡᵍᵘⁿ ˡᶦⁿᵏ ᵈᵉ ᶠᵃᶜᵉᵇᵒᵒᵏ' :  user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵉˣᵖᵉˡ ᵗʰᵒˢᵉ ʷʰᵒ ˢᵉⁿᵈ ᵃⁿʸ ᶠᵃᶜᵉᵇᵒᵒᵏ ˡᶦⁿᵏˢ' : user.Language === 'ar' ? '> الوصف: طرد من يرسل أي روابط تيك توك' : user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵉˣᵖᵘˡˢᵃʳ ᵠᵘᵉᵐ ᵉⁿᵛᶦᵃʳ ᵃˡᵍᵘᵐ ˡᶦⁿᵏ ᵈᵒ ᶠᵃᶜᵉᵇᵒᵒᵏ' : user.Language === 'id' ? '> Deskripsi: mengusir mereka yang mengirim tautan ᶠᵃᶜᵉᵇᵒᵒᵏ apa pun' : user.Language === 'rs' ? '> Описание: исключать тех, кто отправляет ссылки на ᶠᵃᶜᵉᵇᵒᵒᵏ.' : user.Language}

* ${prefix}AntInstagram on ${AntInstagram ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᵃˡᵍᵘⁿ ˡᶦⁿᵏ ᵈᵉ ᴵⁿˢᵗᵃᵍʳᵃᵐ' :  user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵉˣᵖᵉˡ ᵗʰᵒˢᵉ ʷʰᵒ ˢᵉⁿᵈ ᵃⁿʸ ᴵⁿˢᵗᵃᵍʳᵃᵐ ˡᶦⁿᵏˢ' : user.Language === 'ar' ? '> الوصف: طرد من يرسل أي روابط تيك توك' : user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵉˣᵖᵘˡˢᵃʳ ᵠᵘᵉᵐ ᵉⁿᵛᶦᵃʳ ᵃˡᵍᵘᵐ ˡᶦⁿᵏ ᵈᵒ ᴵⁿˢᵗᵃᵍʳᵃᵐ' : user.Language === 'id' ? '> Deskripsi: mengusir mereka yang mengirim tautan ᴵⁿˢᵗᵃᵍʳᵃᵐ apa pun' : user.Language === 'rs' ? '> Описание: исключать тех, кто отправляет ссылки на ᴵⁿˢᵗᵃᵍʳᵃᵐ.' : user.Language}

* ${prefix}AntiYoutube on ${AntiYoutube ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᵃˡᵍᵘⁿ ˡᶦⁿᵏ ᵈᵉ ʸᵒᵘᵀᵘᵇᵉ' :  user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵉˣᵖᵉˡ ᵗʰᵒˢᵉ ʷʰᵒ ˢᵉⁿᵈ ᵃⁿʸ ʸᵒᵘᵀᵘᵇᵉ ˡᶦⁿᵏˢ' : user.Language === 'ar' ? '> الوصف: طرد من يرسل أي روابط تيك توك' : user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵉˣᵖᵘˡˢᵃʳ ᵠᵘᵉᵐ ᵉⁿᵛᶦᵃʳ ᵃˡᵍᵘᵐ ˡᶦⁿᵏ ᵈᵒ ʸᵒᵘᵀᵘᵇᵉ' : user.Language === 'id' ? '> Deskripsi: mengusir mereka yang mengirim tautan ʸᵒᵘᵀᵘᵇᵉ apa pun' : user.Language === 'rs' ? '> Описание: исключать тех, кто отправляет ссылки на ʸᵒᵘᵀᵘᵇᵉ.' : user.Language}

* ${prefix}AntiTwiter on ${AntiTwitter ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᵃˡᵍᵘⁿ ˡᶦⁿᵏ ᵈᵉ ᵀʷᶦᵗᵉʳ' :  user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵉˣᵖᵉˡ ᵗʰᵒˢᵉ ʷʰᵒ ˢᵉⁿᵈ ᵃⁿʸ ᵀʷᶦᵗᵉʳ ˡᶦⁿᵏˢ' : user.Language === 'ar' ? '> الوصف: طرد من يرسل أي روابط تيك توك' : user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵉˣᵖᵘˡˢᵃʳ ᵠᵘᵉᵐ ᵉⁿᵛᶦᵃʳ ᵃˡᵍᵘᵐ ˡᶦⁿᵏ ᵈᵒ ᵀʷᶦᵗᵉʳ' : user.Language === 'id' ? '> Deskripsi: mengusir mereka yang mengirim tautan ᵀʷᶦᵗᵉʳ apa pun' : user.Language === 'rs' ? '> Описание: исключать тех, кто отправляет ссылки на ᵀʷᶦᵗᵉʳ.' : user.Language}

* ${prefix}antifake on ${antiFake ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᶦⁿᵍʳᵉˢᵒ ᵈᵉ ⁿᵘᵐᵉʳᵒ ᶠᵃᵏᵉ (ᵛᶦʳᵗᵘᵃˡᵉˢ), ˢᵉʳᵃⁿ ᵉˣᵖˡᵘˢᵃᵈᵒ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ ᵈᵉˡ ᴳʳᵘᵖᵒ...' : 
user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵉⁿᵗʳʸ ᵒᶠ ᶠᵃᵏᵉ ⁿᵘᵐᵇᵉʳˢ (ᵛᶦʳᵗᵘᵃˡ) ʷᶦˡˡ ᵇᵉ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃˡˡʸ ᵉˣᶜˡᵘᵈᵉᵈ ᶠʳᵒᵐ ᵗʰᵉ ᴳʳᵒᵘᵖ...' : 
user.Language === 'ar' ? '> الوصف: سيتم استبعاد دخول الأرقام الوهمية (الافتراضية) من المجموعة تلقائيا...' : 
user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵃ ᵉⁿᵗʳᵃᵈᵃ ᵈᵉ ⁿᵘ́ᵐᵉʳᵒˢ ᶠᵃˡˢᵒˢ (ᵛᶦʳᵗᵘᵃᶦˢ) ˢᵉʳᵃ́ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃᵐᵉⁿᵗᵉ ᵉˣᶜˡᵘᶦ́ᵈᵃ ᵈᵒ ᴳʳᵘᵖᵒ...' : 
user.Language === 'id' ? '> Keterangan: masuknya nomor palsu (virtual) akan otomatis dikeluarkan dari Grup...' : 
user.Language === 'rs' ? '> Описание: ввод фейковых номеров (виртуальных) будет автоматически исключен из группы...' : user.Language}

* ${prefix}antiarabe on ${antiArabe ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᶦⁿᵍʳᵉˢᵒ ᵈᵉ ⁿᵘᵐᵉʳᵒ ᵃʳᵃᵇᵉ (+212, +91, +92, ᵉᵗᶜ), ˢᵉʳᵃⁿ ᵉˣᵖˡᵘˢᵃᵈᵒ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ ᵈᵉˡ ᴳʳᵘᵖᵒ...' : 
user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵉⁿᵗᵉʳᵉᵈ ʷᶦᵗʰ ᵃⁿ ᴬʳᵃᵇᶦᶜ ⁿᵘᵐᵇᵉʳ (²¹², ⁹¹, ⁹², ᵉᵗᶜ.) ᵗʰᵉʸ ʷᶦˡˡ ᵇᵉ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃˡˡʸ ᵉˣᶜˡᵘᵈᵉᵈ ᶠʳᵒᵐ ᵗʰᵉ ᴳʳᵒᵘᵖ...' : 
user.Language === 'ar' ? '> الوصف: تم إدخالهم برقم عربي (212، 91، 92، إلخ.) وسيتم استبعادهم تلقائيًا من المجموعة...' : 
user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵈᶦᵍᶦᵗᵃᵈᵒˢ ᶜᵒᵐ ⁿᵘ́ᵐᵉʳᵒ ᵃʳᵃ́ᵇᶦᶜᵒ (²¹², ⁹¹, ⁹², ᵉᵗᶜ.) ˢᵉʳᵃ̃ᵒ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃᵐᵉⁿᵗᵉ ᵉˣᶜˡᵘᶦ́ᵈᵒˢ ᵈᵒ ᴳʳᵘᵖᵒ...' : 
user.Language === 'id' ? '> Keterangan: dimasukkan dengan nomor arab (212, 91, 92, dst) otomatis dikeluarkan dari Grup...' : 
user.Language === 'rs' ? '> Описание: введя арабский номер (212, 91, 92 и т. д.), они будут автоматически исключены из группы...' : user.Language}

* ${prefix}antitoxic on ${antitoxic ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᴰᵉᵗᵉᶜᵗᵃ ˡᵃ ᵐᵃˡᵃˢ ᵖᵃˡᵃᵇʳᵃˢ ʸ ᵃᵈᵛᶦᵉʳᵗᵉ ᵃˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉ del ᵍʳᵘᵖᵒ, ᵃⁿᵗᵉˢ ᵈᵉ ˢᵉʳ ᵉˡᶦᵐᶦⁿᵃᵈᵒ.' : 
user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵀʰᵉʸ ᵈᵉᵗᵉᶜᵗ ᵇᵃᵈ ʷᵒʳᵈˢ ᵃⁿᵈ ʷᵃʳⁿ ᵗʰᵉ ᴳʳᵒᵘᵖ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ, ᵇᵉᶠᵒʳᵉ ᵇᵉᶦⁿᵍ ᵉˡᶦᵐᶦⁿᵃᵗᵉᵈ.' : 
user.Language === 'ar' ? '> الوصف: كشف الكلمات السيئة وتحذير المشاركين في المجموعة قبل استبعادهم.' : 
user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᴰᵉᵗᵉᶜᵗᵃᵐ ᵖᵃˡᵃᵛʳᵒ̃ᵉˢ ᵉ ᵃᵛᶦˢᵃᵐ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵒ ᴳʳᵘᵖᵒ, ᵃⁿᵗᵉˢ ᵈᵉ ˢᵉʳᵉᵐ ᵉˡᶦᵐᶦⁿᵃᵈᵒˢ.' : 
user.Language === 'id' ? '> Deskripsi: mendeteksi kata-kata buruk dan memperingatkan peserta Grup sebelum tersingkir.' : 
user.Language === 'rs' ? '> Описание: Они распознают плохие слова и предупреждают участников группы, прежде чем их устраняют.' : user.Language}

* ${prefix}detect on ${detect ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᵈᵉᵗᵉᶜᵗᵃʳ ⁿᵒᵗᶦᶠᶦᶜᵃᶜᶦᵒⁿᵉˢ ᵈᵉ ᵃᵛᶦˢᵒ ᵉˡ ᵍʳᵘᵖᵒ. ' : 
user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵈᵉᵗᵉᶜᵗ ᵍʳᵒᵘᵖ ᵃˡᵉʳᵗ ⁿᵒᵗᶦᶠᶦᶜᵃᵗᶦᵒⁿˢ' : 
user.Language === 'ar' ? '> الوصف: اكتشاف إشعارات تنبيه المجموعة' : 
user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵈᵉᵗᵉᶜᵗᵃʳ ⁿᵒᵗᶦᶠᶦᶜᵃᶜ̧ᵒ̃ᵉˢ ᵈᵉ ᵃˡᵉʳᵗᵃ ᵈᵉ ᵍʳᵘᵖᵒ' : 
user.Language === 'id' ? '> Deskripsi: mendeteksi pemberitahuan peringatan grup' : 
user.Language === 'rs' ? '> Описание: обнаружение групповых оповещений.' : user.Language}

* ${prefix}autostickers on ${autosticker ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᶜʳᵉᵃʳ ˢᵗᶦᶜᵏᵉʳˢ ᵈᵉ ᵐᵃⁿᵉʳᵃ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃ ˢᶦⁿ ᵖᵒⁿᵉʳ ⁿᶦⁿᵍᵘⁿ ᵖʳᵉᶠᶦʲᵒ ˢᵒˡᵒ ᵉⁿᵛᶦᵃʳ ˡᵃ ᶦᵐᵃᵍᵉⁿ/ᵛᶦᵈᵉᵒ.' : 
user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᶜʳᵉᵃᵗᵉ ˢᵗᶦᶜᵏᵉʳˢ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃˡˡʸ ʷᶦᵗʰᵒᵘᵗ ᵃᵈᵈᶦⁿᵍ ᵃⁿʸ ᵖʳᵉᶠᶦˣ, ʲᵘˢᵗ ˢᵉⁿᵈ ᵗʰᵉ ᶦᵐᵃᵍᵉ/ᵛᶦᵈᵉᵒ' : 
user.Language === 'ar' ? '> الوصف: قم بإنشاء الملصقات تلقائيًا دون إضافة أي بادئة، فقط أرسل الصورة/الفيديو' : 
user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᶜʳᶦᵉ ˢᵗᶦᶜᵏᵉʳˢ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃᵐᵉⁿᵗᵉ ˢᵉᵐ ᵃᵈᶦᶜᶦᵒⁿᵃʳ ⁿᵉⁿʰᵘᵐ ᵖʳᵉᶠᶦˣᵒ, ᵇᵃˢᵗᵃ ᵉⁿᵛᶦᵃʳ ᵃ ᶦᵐᵃᵍᵉᵐ/ᵛᶦ́ᵈᵉᵒ' : 
user.Language === 'id' ? '> Deskripsi: membuat stiker secara otomatis tanpa menambahkan awalan apa pun, cukup kirim gambar/video' : 
user.Language === 'rs' ? '> Описание: автоматически создавайте стикеры без добавления префикса, просто отправьте изображение/видео' : user.Language}

* ${prefix}modocaliente on ${antiNsfw ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᵃᶜᵗᶦᵛᵃʳ ˡᵒˢ ᶜᵒⁿᵗᵉⁿᶦᵈᵒˢ +18 ' : 
user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵃᶜᵗᶦᵛᵃᵗᵉ/ᵈᵉᵃᶜᵗᶦᵛᵃᵗᵉ ᶜᵒⁿᵗᵉⁿᵗ ¹⁸' : 
user.Language === 'ar' ? '> الوصف: تنشيط/إلغاء تنشيط المحتوى 18' : 
user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵃᵗᶦᵛᵃʳ/ᵈᵉˢᵃᵗᶦᵛᵃʳ ᶜᵒⁿᵗᵉᵘ́ᵈᵒ ¹⁸' : 
user.Language === 'id' ? '> Deskripsi: mengaktifkan/menonaktifkan konten 18' : 
user.Language === 'rs' ? '> Описание: активировать/деактивировать контент 18' : user.Language}

* ${prefix}audios on ${audios ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᴬᶜᵗᶦᵛᵃʳ ˡᵒˢ ᵃᵘᵈᶦᵒˢ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵒ. ' : 
user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵃᶜᵗᶦᵛᵃᵗᵉ ᵃᵘᵗᵒᵐᵃᵗᶦᶜ ᵃᵘᵈᶦᵒ' : 
user.Language === 'ar' ? '> الوصف: تفعيل الصوت التلقائي' : 
user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵃᵗᶦᵛᵃʳ ᵃ́ᵘᵈᶦᵒ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵒ' : 
user.Language === 'id' ? '> Deskripsi: mengaktifkan audio otomatis' : 
user.Language === 'rs' ? '> Описание: активировать автоматический звук' : user.Language}

* ${prefix}autolevelup on ${autolevelup ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᵃᶜᵗᶦᵛᵃʳ ᵖᵃʳᵃ ˢᵘᵇᶦʳ ᵈᵉ ⁿᶦᵛᵉˡ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ. ' : user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵃᶜᵗᶦᵛᵃᵗᵉ ᵗᵒ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃˡˡʸ ˡᵉᵛᵉˡ ᵘᵖ' : user.Language === 'ar' ? '> الوصف: يتم التنشيط للارتقاء بالمستوى تلقائيًا' : user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵃᵗᶦᵛᵃʳ ᵖᵃʳᵃ ˢᵘᵇᶦʳ ᵈᵉ ⁿᶦ́ᵛᵉˡ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃᵐᵉⁿᵗᵉ' : user.Language === 'id' ? '> Deskripsi: aktifkan untuk naik level secara otomatis' : user.Language === 'rs' ? '> Описание: активируйте для автоматического повышения уровня.' : user.Language}

* ${prefix}chatbot on ${chatbot ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᴱˡ ᵇᵒᵗ ᵉᵐᵖᵉᶻᵃʳ ᵃ ʰᵃᵇˡᵃʳ ᶜᵒⁿ ᵗᵒᵈᵒˢ ᵉˡ ᵍʳᵘᵖᵒ. ' : user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵀʰᵉ ᵇᵒᵗ ˢᵗᵃʳᵗˢ ᵗᵃˡᵏᶦⁿᵍ ᵗᵒ ᵉᵛᵉʳʸᵒⁿᵉ ᶦⁿ ᵗʰᵉ ᵍʳᵒᵘᵖ' : user.Language === 'ar' ? '> الوصف: يبدأ الروبوت في التحدث إلى كل فرد في المجموعة' : user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᴼ ᵇᵒᵗ ᶜᵒᵐᵉᶜ̧ᵃ ᵃ ᶠᵃˡᵃʳ ᶜᵒᵐ ᵗᵒᵈᵒˢ ᵈᵒ ᵍʳᵘᵖᵒ' : user.Language === 'id' ? '> Deskripsi: Bot mulai berbicara dengan semua orang di grup' : user.Language === 'rs' ? '> Описание: Бот начинает разговаривать со всеми в группе.' : user.Language}

* ${prefix}modoadmins on ${modeadmin ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᵉˡ ᵇᵒᵗ ˢᵒˡᵒ ᶠᵘⁿᶜᶦᵒⁿᵃ ᵖᵃʳᵃ ˡᵒˢ ᵃᵈᵐᶦⁿˢ ᵈᵉˡ ᴳʳᵘᵖᵒ.' : user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵀʰᵉ ᵇᵒᵗ ᵒⁿˡʸ ʷᵒʳᵏˢ ᶠᵒʳ ᴳʳᵒᵘᵖ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵗᵒʳˢ' : user.Language === 'ar' ? '> الوصف: يعمل الروبوت فقط لمسؤولي المجموعة' : user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᴼ ᵇᵒᵗ ᶠᵘⁿᶜᶦᵒⁿᵃ ᵃᵖᵉⁿᵃˢ ᵖᵃʳᵃ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵈᵉ ᵍʳᵘᵖᵒ' : user.Language === 'id' ? '> Deskripsi: Bot hanya berfungsi untuk administrator Grup' : user.Language === 'rs' ? '> Описание: Бот работает только для администраторов группы.' : user.Language}

       \`『 ${user.Language === 'es' ? 'FUNCIÓN SOLO PARA OWNER' : user.Language === 'en' ? 'OWNER ONLY FEATURE' : user.Language === 'ar' ? ' ميزة المالك فقط' : user.Language === 'pt' ? 'RECURSO APENAS PARA PROPRIETÁRIO' : user.Language === 'id' ? 'FITUR HANYA PEMILIK' : user.Language === 'rs' ? 'ТОЛЬКО ДЛЯ ВЛАДЕЛЬЦА' : user.Language} 』\`
* ${prefix}antiprivado on ${antiprivado ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᴱˡ ᵇᵒᵗ ᵇˡᵒᵠᵘᵉʳᵃ́ ᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵠᵘᵉ ᵘˢᵉⁿ ᶜᵒᵐᵃⁿᵈᵒ ᵉˡ ᵖʳᶦᵛᵃᵈᵒ.' : 
user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵗʰᵉ ᵇᵒᵗ ʷᶦˡˡ ᵇˡᵒᶜᵏ ᵉᵛᵉʳʸᵒⁿᵉ ʷʰᵒ ᵘˢᵉˢ ᵗʰᵉ ᵖʳᶦᵛᵃᵗᵉ ᶜᵒᵐᵐᵃⁿᵈ' : 
user.Language === 'ar' ? '> الوصف: سيقوم الروبوت بحظر كل من يستخدم الأمر الخاص' : 
user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᵒ ᵇᵒᵗ ᵇˡᵒᵠᵘᵉᵃʳᵃ́ ᵗᵒᵈᵒˢ ᵠᵘᵉ ᵘˢᵃʳᵉᵐ ᵒ ᶜᵒᵐᵃⁿᵈᵒ ᵖʳᶦᵛᵃᵈᵒ' : 
user.Language === 'id' ? '> Deskripsi: bot akan memblokir semua orang yang menggunakan perintah pribadi' : 
user.Language === 'rs' ? '> Описание: бот заблокирует всех, кто использует приватную команду' : user.Language}

* ${prefix}anticall on ${anticall ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᴱˡ ᴮᵒᵗ ᵇˡᵒᵠᵘᵉʳᵃ́ ᵃ ˡᵃˢ ᵖᵉʳˢᵒⁿᵃˢ ᵠᵘᵉ ˡˡᵃᵐᵉⁿ ᵃˡ ᴮᵒᵗ. ' : 
user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ᵇˡᵒᶜᵏ ᵖᵉᵒᵖˡᵉ ʷʰᵒ ᶜᵃˡˡ ᵗʰᵉ ᵇᵒᵗ' : 
user.Language === 'ar' ? '> الوصف: سيقوم الروبوت بحظر الأشخاص الذين يتصلون بالروبوت' : 
user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᴼ ᵇᵒᵗ ᵇˡᵒᵠᵘᵉᵃʳᵃ́ ᵃˢ ᵖᵉˢˢᵒᵃˢ ᵠᵘᵉ ˡᶦᵍᵃʳᵉᵐ ᵖᵃʳᵃ ᵒ ᵇᵒᵗ' : 
user.Language === 'id' ? '> Keterangan: Bot akan memblokir orang yang memanggil bot tersebut' : 
user.Language === 'rs' ? '> Описание: Бот будет блокировать звонящих ему людей.' : user.Language}

* ${prefix}autoread on ${autoread ? '✅' : '❌'}
${user.Language === 'es' ? '> ᵈᵉˢᶜ : ᴹᵃʳᶜᵃ ᶜᵒᵐᵒ ˡᵉᶦᵈᵒ ˡᵒˢ ᵐᵉⁿˢᵃʲᵉˢ ʸ ˡᵒˢ ᵉˢᵗᵃᵈᵒˢ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ.' : 
user.Language === 'en' ? '> ᴰᵉˢᶜʳᶦᵖᵗᶦᵒⁿ: ᴹᵃʳᵏ ᵐᵉˢˢᵃᵍᵉˢ ᵃⁿᵈ ˢᵗᵃᵗᵘˢᵉˢ ᵃˢ ʳᵉᵃᵈ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃˡˡʸ.' : 
user.Language === 'ar' ? '> الوصف: وضع علامة على الرسائل والحالات كمقروءة تلقائيًا.' : 
user.Language === 'pt' ? '> ᴰᵉˢᶜʳᶦᶜ̧ᵃ̃ᵒ: ᴹᵃʳᶜᵃ ᵐᵉⁿˢᵃᵍᵉⁿˢ ᵉ ˢᵗᵃᵗᵘˢ ᶜᵒᵐᵒ ˡᶦᵈᵒˢ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃᵐᵉⁿᵗᵉ.' : 
user.Language === 'id' ? '> Deskripsi: Menandai pesan dan status sebagai telah dibaca secara otomatis.' : 
user.Language === 'rs' ? '> Описание: Автоматически отмечать сообщения и статусы как прочитанные.' : user.Language}\n\n${botname}`)}

if (command == 'welcome' || command == 'bienvenida') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].welcome = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].welcome = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antilink' || command == 'antienlace') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antilink = true
m.reply(lenguaje.enable.text3)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antilink = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antilink2') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiLink2 = true
m.reply(lenguaje.enable.text3)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiLink2 = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antitwiter' || command == 'AntiTwiter') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiTwitter = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiTwitter = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antitiktok' || command == 'AntiTikTok') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiTiktok = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiTiktok = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antitelegram' || command == 'AntiTelegram') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiTelegram = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiTelegram = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antifacebook' || command == 'AntiFacebook' || command == 'AntiFb') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiFacebook = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiFacebook = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antinstagram' || command == 'AntInstagram' || command == 'AntiIg') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].AntInstagram = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntInstagram = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antiyoutube' || command == 'AntiYoutube') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiYoutube = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiYoutube = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antifake' || command == 'antiFake') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiFake = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
//m.reply(`*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero fake (virtuales), seran explusado automáticamente del Grupo...*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiFake = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antiarabe' || command == 'antiArabe') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiArabe = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
//m.reply(`*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero arabe (+212, +91, +92, etc), seran explusado automáticamente del Grupo...*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiArabe = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antitoxic') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antitoxic = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antitoxic = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'autodetect' || command == 'detect') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].detect = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].detect = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'audios') {
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].audios = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].audios = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'autosticker' || command == 'stickers') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].autosticker = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].autosticker = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'modocaliente' || command == 'antinsfw') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiNsfw = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiNsfw = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'modoadmin' || command == 'soloadmin' || command == 'modoadmins') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") { 
global.db.data.chats[m.chat].modeadmin = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}\n\n${lenguaje.enable.text4}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].modeadmin = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}\n\n${lenguaje.enable.text5}`)}}

if (command == 'antiprivado' || command == 'antipv') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.settings[numBot].antiprivado = true
//conn.antiprivado = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.settings[numBot].antiprivado = false
//conn.antiprivado = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'anticall' || command == 'antillamada') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.settings[numBot].anticall = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.settings[numBot].anticall = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'modojadibot' || command == 'jadibot') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].jadibot = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].jadibot = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'autoread' || command == 'autovisto') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.settings[conn.user.jid].autoread = false
//conn.autoread = false
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.settings[conn.user.jid].autoread = true
//conn.autoread = true
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antispam') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antispam = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antispam = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'chatbot' || command == 'simsimi') {
//if (!m.isGroup) return m.reply(info.group)
//if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].simi = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].simi = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'autolevelup' || command == 'autonivel') {
if (!m.isGroup) return m.reply(info.group)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].autolevelup = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].autolevelup = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}}

module.exports = { enable }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})