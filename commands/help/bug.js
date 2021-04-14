module.exports = {
  name: "bug",
category: "info",
run : async(client, message, args) => { 
// again make this fit your command handler style 😀
  if (!args[0]) return message.reply("Please specify the bug. Example:\n`c!thecommand isn't working. It isn't mentioning the user I'm trying to punch`");   
  if (args[0] === "bug") return message.reply("Please specify the bug. Example:\n`c!delete isn't working. It isn't mentioning the user I'm trying to punch`");   
  args = args.join(" ");   
  message.reply("<a:cogs:809091819404263474> |Thanks for submitting a bug!");
  message.reply("<a:Kk:792521917507829760> | your bug as been sent succesfully");
  const content = `${message.author.username}#${message.author.discriminator} (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}\nServer ID: ${message.guild.id}**\``;   
  client.channels.cache.get('829386095694577734').send(content)
}
}