
const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

 var prefix = '!'



client.on('message', async message => {
  let args = message.content.slice(3);
  if(message.content.startsWith(prefix + 'bc')) {
    if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) return message.channel.send('Required Administrator Permission')
       message.guild.members.forEach(m => {
      
      m.send(args.replace('[user]', m).replace('[server]', m.guild.name).replace('[sender]', message.author.username))
    })
  }
})


client.on('message', message => {
  let args = message.content.split(" ")
  if (args[0].toLowerCase().startsWith(prefix+'roles')) {
    let str = "";
    var role = message.guild.roles.forEach(role => {
      str +=" "+role.name+'\n'
    })
    message.channel.send(`\`\`\`${str}\`\`\``)
  }
})


client.on('message', msg => {
var prefix = "!";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'ve')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء روم صوتي اظغط علي الايموجي🎤`)                                                                                                                                                                       
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
    
    
 message.react('🎤').then(r=>{
                              
    
 let Voice = (reaction, user) => reaction.emoji.name === '🎤' && user.id === msg.author.id;

 let ve  = message.createReactionCollector(Voice, { time: 60000 });

ve.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'voice');
    msg.channel.send(`!embed RED☑ تم انشاء روم صوتي بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});
 

client.on('message', message => {  
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { //Codes
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  }); //Julian


client.on('guildCreate', guild => {
client.channels.get("566696932064493589").send(`✅ **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
}); //Codes
client.on('guildDelete', guild => {
  client.channels.get("566720247844044811").send(`❎ **${client.user.tag} طلع من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});


client.on("message", message => {
  var prefix = "!";
  if(message.content.startsWith(prefix + "embed")) {
    

var color = message.content.split(" ")[1];
  var text = message.content.split(" ").slice(2);
    var tt = text.join(" ")
  if(!color) return message.reply("يجب كتابة لون الامبد الذي تريده");
    if(!tt) return message.reply("يجب كتابة كلام لتكراره");
  let embed = new Discord.RichEmbed()
  .setColor(color)
  .setDescription(tt)
  message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);
message.channel.send("`Error`:" + Julian)
    })
  }
  });


client.on("guildMemberAdd", member => {
  client.channels.find('id', '566696932064493589').send(`**welcome to Diamond : [ ${member} ]**`)
});


client.on('message', message => {
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
 }
   });


       client.on('message',message =>{
         var prefix = "!";
    if(message.content.split(' ')[0].toLowerCase() == prefix + 'invite') {
   let guild = message.guild
   var codes = [""]
    var nul = 0
         
   guild.fetchInvites()
   .then(invites => {
   invites.forEach(invite => {
   if (invite.inviter === message.author) {
       nul+=invite.uses
   codes.push(`discord.gg/${invite.code}`)
   }
    
   })
     if (nul > 0) {
         const e = new Discord.RichEmbed()
         .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
         .setColor('#36393e')
         message.author.send(e).then(() => {
      }).catch(() => {
      });
     }else {
   var embed = new Discord.RichEmbed()
    .setColor("#36393e")
    .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذا السيرفر`)
   message.author.send({ embed: embed }).then(() => {
}).catch(() => {
});
    return;
}
   }).then(m => {
   if (codes.length < 0) {
       var embed = new Discord.RichEmbed()
   .setColor("#36393e")
   .addField(`Your invite codes in ${message.guild.name}`, `You currently don\'t have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
   message.author.send({ embed: embed }).then(() => {
    message.channel.send('**Successfully sent the message! :white_check_mark: **');
}).catch(() => {
    message.channel.send('**The user have dms disabled** :x:')
});
   return;
   } else {
       var embed = new Discord.RichEmbed()
   .addField(`Your invite codes in ${message.guild.name}`, `Invite Codes :\n${codes.join("\n")}`)
   .setColor('#36393e')
   message.author.send({ embed: embed }).then(() => {
    message.channel.send('**Successfully sent the message! :white_check_mark: **');
}).catch(() => {
    message.channel.send('**The user have dms disabled** :x:') 
});
   return;
   }
  })
  }
   
});


client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });


client.on('message', message => {
    if(message.content === "!bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**🌐 عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);

           }
});


client.on('message', message => {
    if(message.content.toLowerCase().startsWith(`discord.gg`)){
        message.member.addRole(message.guild.roles.find('name', 'Muted'));
        var embed = new Discord.RichEmbed()
        .setDescription(`تمت معاقبتك لنشرك سيرفر اخر هنا`)
            message.delete();
        message.channel.send(`<@${message.author.id}`);
        message.channel.send({embed});
    }
}); 


client.on('message', message => {
    if (message.content === "createroles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner Bots", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Premium", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Bate", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "vip++", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "vip", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "King Voice", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "King Test", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Actve", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});


client.on('message', message => {
  if (message.content === '#help') {
	  
    message.author.send(`︱︱┏┓ ︱︱ ︱︱︱︱ ︱︱︱︱ ︱︱︱︱ ︱︱︱︱ ︱︱┏┓
︱︱┃┃ ︱︱ ︱︱︱︱ ︱︱︱︱ ︱︱︱︱ ︱︱︱︱ ︱︱┃┃
┏━┛┃ ┏┓ ┏━━┓ ┏┓┏┓ ┏━━┓ ┏━┓︱ ┏━┛┃
┃┏┓┃ ┣┫ ┃┏┓┃ ┃┗┛┃ ┃┏┓┃ ┃┏┓┓ ┃┏┓┃
┃┗┛┃ ┃┃ ┃┏┓┃ ┃┃┃┃ ┃┗┛┃ ┃┃┃┃ ┃┗┛┃
┗━━┛ ┗┛ ┗┛┗┛ ┗┻┻┛ ┗━━┛ ┗┛┗┛ ┗━━┛
Currently, we are too lazy to translate our bot to English.

 بأمكانك دعوة البوت والتحكم باعداداته عن طريق الرابط
https://discordapp.com/api/oauth2/authorize?client_id=566701867778965556&permissions=0&scope=bot : 

 الأوامر العامة 

!invite : لمعرفة عدد الانفايتات


 أوامر ادارة السيرفرات 

!clear : لمسح الشات 100 رسالة

!roles : لمعرفة رولات السيرفر

اخرى 

!ping :لمعرفة بنقك

!bot : لمعرفة معلوماتة الخادم البوت


 `);
	message.react('✉');
  }
});


client.login(process.env.BOT_TOKEN);
