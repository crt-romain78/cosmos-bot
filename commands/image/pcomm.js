
const Color = "RANDOM";
const Discord = require("discord.js");
const Random = require("srod-v2");

module.exports = {
  name: "porhubcomment",
  category: "fun",
  aliases: ["ph", "phc"],
  description: "Return A achievement Image!",
  usage: "ph | <Text>",
  run: async (bot, message, args) => {

        let user = await message.mentions.members.first()
        let text = args.join(" ");

        if(user){
            text = args.slice(1).join(" ");
        } else {
            user = message.author;
        }

        if(!text){
            return message.channel.send("<a:Missing_perms:826125661264543835> **Enter Text!**");
        }

        let m = await message.channel.send("<a:1974typing:828211856316432446> **Please Wait...**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${user.username}&image=${user.displayAvatarURL({ format: "png", size: 512 })}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "phcomment.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch(e){
            m.edit("<a:Missing_perms:826125661264543835> Error, Try Again! Mention Someone");
        }
    }
};
