
const Color = "RANDOM";
const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "tweet",
  category: "fun",
  description: "Return A tweet Image!",
  usage: "tweet <username> | <Text>",
  run: async(bot, message, args) => {

        let user = args[0];
        let text = args.slice(1).join(" ");

        let m = await message.channel.send("<a:1974typing:828211856316432446> | **Please wait...**");

        if(!user){
            return m.edit("<a:Missing_perms:826125661264543835> **You Have To Enter Someone's Twitter Nickname!**");
        }

        if(!text){
            return m.edit("<a:Missing_perms:826125661264543835> **You must enter a message!**");
        }

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "tweet.png");
            await message.channel.send(`**New tweet published by ${user}**`, attachment);
            m.delete({ timeout: 5000});
        } catch(e){
            m.edit("<a:Missing_perms:826125661264543835> Error, Try Again! Mention Someone");
        }
    }
};