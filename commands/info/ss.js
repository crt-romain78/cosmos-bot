const { Message, MessageEmbed } = require("discord.js");
//const { Default_Prefix, Color } = require("../../config.js");
const Discord = require("discord.js");
//const db = require("wio.db");
const moment = require("moment");
const db = require('quick.db')
const fetch = require("node-fetch");

const url = require("url");

module.exports = {
  name: "ss",
  aliases: ["screenshot"],
  category: "search",
  description: "Takes a screenshot of any webpage.",
  usage: "screenshot <URL>",
  run: async (client, message, args) => {
    message.delete();
    const user = message.author.tag
    const urls = args[0];
    if (!urls)
      return message.channel
        .send(`<a:Never:792521914920337469> ${user},where is the link`)
        .then(m => m.delete({ timeout: 5000 }).catch(e => {}));
    if (urls.length < 8)
      return message
        .reply(
          "<a:Never:792521914920337469> https is too short to reach - 8 limit"
        )
        .then(m => m.delete({ timeout: 9000 }).catch(e => {}));

    const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
    try {
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );

      return message.channel.send(
        `<a:crown:809013030507118623> | Here is a screenshot from requested URL`,
        {
          files: [{ attachment: body, name: "Screenshot.png" }]
        }
      );
    } catch (err) {
      if (err.status === 404)
        return message.channel
          .send("<a:Never:792521914920337469> | Could not find any results. Invalid URL?")
          .then(m => m.delete({ timeout: 14000 }).catch(e => {}));
      return message
        .reply(`<a:Never:792521914920337469> | Oh no, an error occurred: \`${err.message}\`. Try again later!`)
        .then(m => m.delete({ timeout: 13000 }).catch(e => {}));
    }
 }
};