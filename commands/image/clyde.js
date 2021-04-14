
const Color = "RANDOM";
const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "clyde",
  category: "fun",
  description: "Return A message from clyde!",
  usage: "clyde  | <Text>",
  run: async (bot, message, args) => {

        let text = args.join(" ");

        if (!text) {
            return message.channel.send("<a:Missing_perms:826125661264543835> | **Enter Text**");
        }

        let m = await message.channel.send("<a:1974typing:828211856316432446> | **Please Wait...**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "clyde.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch (e) {
            m.edit(e.message);
        }
    }
}