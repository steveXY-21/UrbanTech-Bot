const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
client.on('ready', () => {
    console.log('Bot is ready');
});

client.on('message', msg => {
    if (msg.content === `${prefix}Hi, UrbanTech Bot!`) {
      msg.channel.send('```Hello! My name is UrbanTech Bot! for this moment i am a beta version but soon I will have more functions! thanks!```');
    }
  });
  

client.login('NjUwNTE2NTAwMTE3MDYxNjMy.XeNJ0w.A45a9jmZfq3yf1Y__cbBFk9EMGM')