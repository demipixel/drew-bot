const Discord = require('discord.js');
const config = require('config-yml');

const discord = new Discord.Client();

discord.on('ready', () => {
  console.log('Connected to Discord.');
});

const cachedMessages = {};

discord.on('message', msg => {
  console.log(msg.author + ': ' + msg.content);
  if (msg.author.id == discord.user.id) return;
  else if (!msg.member) return;
  
  if (['?', 'what', 'what?', 'huh', 'huh?', 'eh?'].includes(msg.content)) {
    msg.channel.send(cachedMessages[msg.channel.name].toUpperCase());
  } else {
    cachedMessages[msg.channel.name] = msg.content;
  }
});

discord.login(config.discord.token);