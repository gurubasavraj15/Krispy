const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const config = require('./config.json')
const command = require('./commands')
//const memberCount = require('./membercount')
//const roleClaim = require('./role-claim')


  
client.on('ready',() => {
    console.log('Oracle is online')
    //membercount
  //  memberCount(client)
    //prefix
    const { prefix } = config
    //rr
   // roleClaim(client)
    //status
    var interval = setInterval(function(){
      client.user.setActivity(`*help | ${client.users.cache.size} users`,{type: "LISTENING"})
      client.user.setActivity( `AQUAS`, {type: "WATCHING"})
      client.user.setActivity(`Beta Update`, {type: "LISTENING"})
      client.user.setActivity(`Ubaidullah FF`, {type: "WATCHING"})
    }, 15 * 35)
   // client.user.setActivity(`*help | ${client.users.cache.size} users`, {type:'LISTENING'});
})
/////////////////////////////////////////ping command//////////////////////////////
command(client, 'ping', (message) =>{
    message.channel.send(`My ping is ${client.ws.ping}ms.`);
})
/////////////////////////////////////////////ban command/////////////////////////////////////////////
command(client, 'ban', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('BAN_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        const banm = new Discord.MessageEmbed()
        .setColor('#ffed00')
        .setTitle('Moderation Command')
        .setDescription(`${tag} just banned a member`) 
        message.channel.send(banm)
      } else {
          const banm2 = new Discord.MessageEmbed()
          .setColor('#ffed00')
        .setTitle('Moderation Command')
        .setDescription(`${tag} Please mention somebody to kick`) 
        message.channel.send(banm2)
      }
    } else {
        const banm3 = new Discord.MessageEmbed()
        .setColor('#ffed00')
        .setTitle('Moderation Command')
        .setDescription(`${tag} You do not have permissions to use this command`) 
      message.channel.send(banm3)
    }
  })
  //////////////////////////////////////////kick command////////////////////////////////////////////////
  command(client, 'kick', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.kick()
        const kick1 = new Discord.MessageEmbed()
        .setColor('#ffed00')
        .setTitle('Moderation Command')
        .setDescription(`${tag} just kicked a member.`) 
        message.delete() && message.channel.send(kick1)
      } else {
          const kick2 = new Discord.MessageEmbed()
         .setColor('#ffed00')
         .setTitle('Moderation Command')
         .setDescription(`${tag} Please mention someone to kick`) 
         message.channel.send(kick2)
      }
    } else {
        const kick3 = new Discord.MessageEmbed()
        .setColor('#ffed00')
        .setTitle('Moderation Command')
        .setDescription(`${tag} You do not have permissions to use this command`) 
      message.channel.send(kick3)
    }
  })
  ///////////////////////////////////////////clear messages////////////////////////////////
  command(client, ['cc', 'clearchannel'], (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results)
      })
    }
  })
  ///////////////////////////////////////////help command////////////////////////////
  command(client, 'help', (message) => {
    const helpEmbed = new Discord.MessageEmbed()
    .setTitle(`Commands available for Krispy`)
    //.addField()
    .setColor('#ffed00')
   // .setDescription(`Make sure you use prefix before my commands`)
    .addFields(
      { name: 'My prefix', value: '#'},
      { name: 'Note:', value: 'Make sure you use prefix before my commands'},
      { name: 'Moderation commands', value: `ban, kick, serverinfo, clearchannel, ping`},
      { name: 'Note:', value: 'More commands coming soon....'},
    )
    //.setDescription(`Note: Make sure you use prefix before my commands`)
   // .setThumbnail(icon)
    message.channel.send(helpEmbed)
  })
///////////////////////////////////////////server info command/////////////////////////////////
command(client, 'serverinfo', (message) => {
    const { guild } = message

    const { name, region, memberCount, owner, createdAt } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setColor('#ffed00')
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Members',
          value: memberCount,
        },
        {
          name: 'Owner',
          value: owner,
        },
        {
          name: 'Created At',
          value: createdAt,
        },
        
       
      )
      .setTimestamp()

    message.channel.send(embed)
  })
////////////////////////////////////////////////////// command//////////////////////////////////////////

  
///////////////////welcome message////////////////////////////
 /*client.on('guildMemberAdd', member => {
   const welchannel = client.guild.channels.find(channel => channel.name === '『≛』〢┃𝑾𝑬𝑳𝑪𝑶𝑴𝑬')
   if(!welchannel)return;
   if(welchannel){
   welchannel.send('welcome testing')
   }
 })*/

 // rules
/*command(client, 'serverrulesforubaidullah',(message) => {
 // const tickemoji = client.emojis.cache.find((emoji) => emoji.name === tick)
 
          
 const dc1 = client.emojis.cache.find(emoji => emoji.name === "dc1");
 const tick = client.emojis.cache.find(emoji => emoji.name === 'tick');
 const red = client.emojis.cache.find(emoji => emoji.name === 'alert');
 const badge = client.emojis.cache.find(emoji => emoji.name === 'badge');
  const { guild } = message;
  const icon = guild.iconURL();
 // console.log(guild)
  const rules1 = new Discord.MessageEmbed()
  .setColor('#ffed00')
  .setImage('https://media.discordapp.net/attachments/768098985361014844/775969294550433812/1604825759091.jpg?width=400&height=225')
  
  const rules2 = new Discord.MessageEmbed()
  .setColor('#ffed00')
  .setDescription(`${dc1} In order to maintain a clean and professional environment for 
  all users to enjoy, a set of community guidelines has been 
  established to uphold this standard. All users must abide by 
  these guidelines. ${dc1}`)
  .setThumbnail('https://cdn.discordapp.com/emojis/795192744850620447.gif?v=1')
  .setFooter('Discord Terms of Service')

 

 const rules3 = new Discord.MessageEmbed()
 .setColor('#ffed00')
 .setTitle(`${tick}  Server Rules & Guidelines`)
 .setThumbnail(icon)
 .setDescription(`━━━━━━━━━━━━━━━━━━━━━━━
  
  ${red} • Don't Spam & Don't Beg.

  ${red} • Don't post NSFW/Gore/18+ stuff in the channels that
         that are not tagged as NSFW.

  ${red} • Don't harass or insult any other members.

  ${red} • Self Promotions and DM Promotions are Not Allowed.

  ${red} • Don't be annoyance in Voice Channels.

  ${red} • Use appropriate Channel for Topic.

  ${red} • Abusive Language is Allowed but not when directing 
  towards Others.`)

  const rules4 = new Discord.MessageEmbed()
  .setColor('#ffed00')
  .setTitle(`${badge}  Actions Taken for Infractions`)
  .setThumbnail(icon)
  .setDescription(` Actions Taken for Infractions.
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  ${red} • Message removal and a warning/strike.
  
  ${red} • DM Abuse & DM Promotions Will Result in Warn. Second Time Will Result in Ban.
  
  ${red} • Posting Paid GFX in #⑀│free-2-use Will Result in Direct Ban.
  
  ${red} • Scamming People From The Server Will Result in Direct Ban Too.
  
  ${red} • Major Infractions against the rules will result in a permanent ban from the server.
  
  ${red} • You May Use #〢💬・ʜᴇʟᴘ-ꜱᴛᴀᴛɪᴏɴ Help For GFX/Server Based Question. :aarrowsright:
  
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  message.channel.send(rules1)
  message.channel.send(rules2)
  message.channel.send(rules3)
  message.channel.send(rules4)
})*/

//
//command(client, 'rrimg', (message) => {


/*const rrimg = new Discord.MessageEmbed()
.setColor('#ffed00')
.setImage('https://media.discordapp.net/attachments/771724756944420874/779575258742128681/1604825757616.jpg?width=400&height=225')
message.channel.send(rrimg)*/


//})

command(client, 'announce', (message) => {
  //const annrole = message.guild.roles.cache.find('818439102546444288')
  //if(message.author.roles.has(annrole)){
  const announcechannel = message.guild.channels.cache.get('814109693995778058');
  const announcer = message.author
  const ann = client.emojis.cache.find(emoji => emoji.name === 'announce')
  const announcement = message.content.replace("*announce ", " ");
  const aembed = new Discord.MessageEmbed()
  .setColor('#ffed00')
  .setTitle(`${ann}Announcement`)
  .setDescription(`${announcement}
  
  Announced By: ${announcer}`)
  announcechannel.send(aembed)
 // }
})


command(client, 'rate', (message) => {
    const one = client.emojis.cache.find(emoji => emoji.name === 'twotwo')
    const two = client.emojis.cache.find(emoji => emoji.name === 'fourfour')
    const three = client.emojis.cache.find(emoji => emoji.name === 'sixsix')
    const four = client.emojis.cache.find(emoji => emoji.name === 'eighteight')
    const five = client.emojis.cache.find(emoji => emoji.name === 'tenten')
    message.react(one);
    message.react(two);
    message.react(three);
    message.react(four);
    message.react(five);
  //  message.react()

  
})

command(client, ['invite', 'inv'], (message) => {
 
    const invembed = new Discord.MessageEmbed()
    .setColor('#ffed00')
    .setTitle(`Invite Me`)
    .setURL('https://discord.com/oauth2/authorize?client_id=794946762070032384&permissions=8&scope=bot')
    .setDescription('Click on"Invite Me" to invite me to ur server.')
    .setTimestamp()
    message.channel.send(invembed)
})

command(client, 'avatar', (message) => {
  const avataruser = message.mentions.users.first()|| message.author;
    
  const avembed = new Discord.MessageEmbed()
  .setColor("#ffed00")
  .setTitle(`Avatar of ${avataruser.tag}`)
  .setImage(avataruser.displayAvatarURL({dynamic: true, size: 2048}))
  .setTimestamp()
  .setFooter(`${avataruser.tag}`)
  message.channel.send(avembed)
})






client.login(config.token)