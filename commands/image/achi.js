const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "achi",
  aliases: ["achievement", "mincraftachi", "minachi"],
  category: "fun",
  description: "Return A message from wumpus!",
  usage: "wumpus  | <Text>",
  run: async (bot, message, args) => {
    let text = args.join(" ");

        if (!text) {
            return message.channel.send("<a:Missing_perms:826125661264543835> | **Enter Text**");
        }
  const embed = new MessageEmbed()
      .setColor(`#1ABC9C`)
      .setImage(`https://api.cool-img-api.ml/achievement?text=${text}`)      
      await message.channel.send(embed)
  }
}