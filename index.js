const Discord = require("discord.js"); // Defining the Discord.JS
  const client = new Discord.Client(); // Defining Client
  require('dotenv').config();
  const  fs  = require("fs"); //  Defining the Sync
  const { join } = require("path"); // Defining the Join
  const DIG = require("discord-image-generation"); 
  require('eventhandler.js')(client, Discord);
  const db = require ('quick.db');
  const fetch = require ('node-fetch');
  const { readdirSync } = require("fs"); //  Defining the Sync
  const prefix = "*"

const { MessageEmbed } = require("discord.js");
let jsonDB = fs.readFileSync('db1.json');
let Database1 = JSON.parse(jsonDB);
let UserWarns = Database1.UserWarns;
let Toggle = Database1.Toggle;
let WelcomeChannel = Database1.WelcomeChannel;
let AutoRole = Database1.AutoRole;
function updateData(){
  jsonDB = fs.readFileSync('db1.json');
  Database1 = JSON.parse(jsonDB);
  UserWarns = Database1.UserWarns;
  Toggle = Database1.Toggle;
  WelcomeChannel = Database1.WelcomeChannel;
  AutoRole = Database1.AutoRole;
  return Database1;
}


function addWarning(id, size){
  jsonDB = fs.readFileSync('db1.json');
  Database1 = JSON.parse(jsonDB);
  Database1.UserWarns[id] = typeof Database1.UserWarns[id] == "number" ? Database1.UserWarns[id] + size : size;
  let data = JSON.stringify(Database1);
  return fs.writeFileSync('db1.json', data);
}

 function setWelcomeChannel(id, value){
  jsonDB = fs.readFileSync('db1.json');
  Database1 = JSON.parse(jsonDB);
  Database1.WelcomeChannel[id] = typeof Database1.WelcomeChannel[id] == "number" ? Database1.WelcomeChannel[id] = value : value;
  let data = JSON.stringify(Database1);
  return fs.writeFileSync('db1.json', data);
}


 function setAutoRole(id, value){
  jsonDB = fs.readFileSync('db1.json');
  Database1 = JSON.parse(jsonDB);
  Database1.AutoRole[id] = typeof Database1.AutoRole[id] == "number" ? Database1.AutoRole[id] = value : value;
  let data = JSON.stringify(Database1);
  return fs.writeFileSync('db1.json', data);
}

 client.on("ready", () => {
  updateData()
    client.user.setActivity(eval(client.guilds.cache.size) + " servers", {type:"PLAYING"});
    });
    
    client.on("guildCreate", () => {
    client.user.setActivity(eval(client.guilds.cache.size) + " servers", {type:"PLAYING"});
    });
    
    client.on("guildRemove", () => {
    client.user.setActivity(eval(client.guilds.cache.size) + " servers", {type:"PLAYING"});
});
  
  client.on("message", msg => {
  updateData();
});

setInterval(() => {
updateData();
}, 1000);
 

  client.commands = new Discord.Collection();

  const commandFiles = readdirSync(join(__dirname, "alform-main/commands")).filter((file) => // Defining the Commands folder.
      file.endsWith(".js") // This means only .js files will work with this bot
  );

  for (const file of commandFiles) {
    const command = require(join(__dirname, "alform-main/commands", `${file}`)); // The "Commands" name, can be changed to anything, all it means is the folder name with the .js files can be different.

    client.commands.set(command.name, command);
  }



    // Command Handeler
    client.on("message", async (message) => {
     updateData();
     try {
     updateData()
     if(UserWarns[message.guild.id + message.author.id] == undefined);
     addWarning(message.guild.id + message.author.id, 0)
     if(WelcomeChannel[message.guild.id] == undefined)
     setWelcomeChannel(message.guild.id, 0)
     if(AutoRole[message.guild.id] == undefined)
     setAutoRole(message.guild.id, 0)

  } catch(e){
    console.log(e);
  } 

  

      let guildPrefix = db.get(`prefix_${message.guild.id}`) || prefix
     if (message.author.bot) return
    if (message.channel.type === "dm") return

        // xp 
        //db.add(`xp_${message.guild.id}_${message.author.id}`,.1)

    if (message.content.startsWith(guildPrefix)) {
    const args = message.content.slice(guildPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
        console.log(command);

  if(Toggle[message.guild.id + command] == "off") return;

    if (!client.commands.has(command)) return

    //try {
       // let isDeactive = await db.get(`disabled_${message.guild.id}_${command}`) 
       // console.log({isDeactive})

       //if (message!== "toggle" && isDeactive!== null && isDeactive === true){
      //return    message.reply("disabled cmd")
      // }else{

    client.commands.get(command).run(client, message, args);

    updateData();
      //  }
    //} catch (error) {
    //console.error(error);
    //}
  }
     updateData();
 }); 

updateData();

    client.on('message', async message => {
      if (message.mentions.users.has(client.user.id)) {
        const customprefix = db.get(`prefix_${message.guild.id}`) || prefix
        const msg = await message.channel.send(`Hello! My prefix for this server is ${customprefix}\nDo ${customprefix}help to get started!`)
      }})




 ///top.ggpostserver//////
const { AutoPoster } = require('topgg-autoposter')

const poster = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0ODI1NDIyNDMzOTgyODc2OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI3NjM1NDAyfQ.LhbE69k9L0lpDVefgDHG6xB6ibZT9RnXpuXeLhijc6A', client) // your discord.js or eris client

// optional
poster.on('posted', (stats) => { // ran when succesfully posted
  console.log(`Posted stats to Top.gg | ${stats.serverCount} servers`)
})

///voidbot posted servers//
fetch(`https://api.voidbots.net/bot/stats/848254224339828768`, {
    method: "POST",
    headers: { 
      Authorization: "VOID_478iqC0IcvWUxet5ovOAFNujajMs9gK9TV14CRQHD0eOINfX",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"server_count":25 , "shard_count": 1 })
  }).then(response => response.text())
.then(console.log).catch(console.error);

client.on("guildMemberAdd", member=> {
if(WelcomeChannel[member.guild.id] == 0) return;

const chnl = member.guild.channels.cache.find(ch => ch.id == WelcomeChannel[member.guild.id]);

if(!chnl) return;

if(AutoRole[member.guild.id] !== 0){
  member.roles.add(AutoRole[member.guild.id])
}

chnl.send(new Discord.MessageEmbed().setDescription(`Hey ${member}, Welcome to ${member.guild.name}! We are now ${member.guild.members.cache.size} members with you!`).setTimestamp().setThumbnail(member.user.displayAvatarURL({dynamic:true})));

});


client.login(process.env.BOT_TOKEN)