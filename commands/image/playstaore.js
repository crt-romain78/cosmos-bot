const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "playstore",
  category: "fun",
  description: "well....",
  usage: "playstore  | <Text>",
  run: async (bot, message, args) => {
    let user = await message.mentions.members.first()
    let text = args.join(" ");

    if (!text) {
        return message.channel.send("<a:Missing_perms:826125661264543835> | **Enter Text**");
        }
    if(!user){
         user = message.author;
        }
  const embed = new MessageEmbed()
      .setColor(`#1ABC9C`)
      .setImage(`https://api.cool-img-api.ml/play-store?image=${user.displayAvatarURL({ format: "png", size: 512 })}&text=${text}&author=${user.username}`)      
      await message.channel.send(embed)
  }
}