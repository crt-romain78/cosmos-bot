const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
        name: "deslap",
        noalias: [''],
        category: "Image",
        description: "Shows random slap image",
        usage: "",
        accessableby: "everyone",
    run: async (bot, message, args) => {

  let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
  const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
        const embed = new MessageEmbed()
        .setColor("FF0000")
        .setTitle("Slapped! 😔")
        .setDescription(`${victim} got slapped by ${message.author}`)
        .setImage(body.url)
        .setTimestamp()
        .setFooter('©crt &nekos api Dark Global');
         message.channel.send(embed);
    }
}