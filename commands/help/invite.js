const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE COSMOS BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`<a:Kk:792521917507829760>[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=825863213497319465&redirect_uri=https%3A%2F%2Fdsc.gg%2Fcrtpremium%2F&response_type=code&scope=identify) OR [support server ](https://discord.com/oauth2/authorize?client_id=828285107696697404&redirect_uri=https%3A%2F%2Fdiscord.gg%2FVkpv7pPRMh&response_type=code&scope=identify) Oauth2 link to prevent raid`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY crt-romain78#3014`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}
