const discord = require ('discord.js')

const fs = require("fs")
let jsonDB = fs.readFileSync('db1.json');
let Database1 = JSON.parse(jsonDB);
let UserWarns = Database1.UserWarns;
let Toggle = Database1.Toggle;

function updateData(){
  jsonDB = fs.readFileSync('db1.json');
  Database1 = JSON.parse(jsonDB);
  UserWarns = Database1.UserWarns;
  Toggle = Database1.Toggle;
  return Database1;
}

function setToggle(id, value){
  jsonDB = fs.readFileSync('db1.json');
  Database1 = JSON.parse(jsonDB);
  Database1.Toggle[id] = typeof Database1.Toggle[id] == "string" ? Database1.Toggle[id] = value : value;
  let data = JSON.stringify(Database1);
  return fs.writeFileSync('db1.json', data);
}


module.exports ={
    name: "toggle", 
    description: " toggle on or off commands",
   run: async(client,message,args) => {
     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("You dont have perm to use this command")
    

 const onof = args[0];

  const command = args[1];

  if(!onof){
    return message.channel.send("*toggle off command");
  }

  if(!command){
    return message.channel.send("please provide command.");
  }
 
const cmd = client.commands.get(command);

  if(!cmd) return message.channel.send("this is not a valid command!")
  
  if(command == "toggle") return message.channel.send("you can't off toggle command.")
 
  
  if(onof == "off"){
  message.channel.send(command + " is now " + onof + "!");
  setToggle(message.guild.id + command, "off");
  return
  }

 if(onof == "on"){
  message.channel.send(command + " is now " + onof + "!");
  setToggle(message.guild.id + command, "on");
  return
  }

}


}
