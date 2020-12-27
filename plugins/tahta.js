/*Codded by Tahta Bot

Special Thanks:
Fazone
Sanzking
Dimasdm
Galuh
*/

const Asena = require("../events");
const {MessageType} = require("@adiwajshing/baileys");
const got = require("got");

Asena.addCommand({pattern: 'tahta ?(.*)', deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.sendMessage(Lang.NEED_WORDS); {
		try{            
				var respo = got(`https://api.vhtear.com/hartatahta?text=${match[1]}&apikey=fzntea2020full`);
				var stream = respo.buffer();
				stream.then(async (image) => {
                		await message.sendMessage(image, MessageType.image);
            });
        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }
		}
}));
