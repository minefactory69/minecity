const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone : false});
const botconfig = require("./botconfig.json");
const tokenfile = require("./tokenfile.json");
const moment = require("moment");
let name = "Minecity";

bot.on("ready", async() => { //bot.on kezdete
    console.log(`${bot.user.username} elindult sikeresen!`)
 
//status :d   
let prefix = botconfig.prefix; 
    let statusok = [
        `parancsok: ${prefix}help`,
        `Írta: Magyar Games`

    ]
    
 
    setInterval(function(){
        let status = statusok[Math.floor(Math.random() * statusok.length)];
        bot.user.setActivity(status, {type: "WATCHING"}) 
    }, 3000) 


}); //itt vége a bot.on nak
bot.on("message", async message => { //bot on kezdete
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
 //prefix messageArray és cmd :D cmd = 0. karakter prefix = botconfig.prefix :D
    let prefix = botconfig.prefix; 
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


let cdrole = message.guild.roles.find(`name`, `mute`);
if(!cdrole) {
    message.guild.createRole({
        name: 'mute',
        hoist: false,
        mentionable: false
    });
};

///////////////////////////////////////////////////////////////////////////////////////




let pluszplszplusz = message.guild.roles.find(`name`, `warn1`);
if(!pluszplszplusz) {
    message.guild.createRole({
        name: 'warn1',
        hoist: false,
        mentionable: false
    });
};

let pluszplszplusza = message.guild.roles.find(`name`, `warn2`);
if(!pluszplszplusza) {
    message.guild.createRole({
        name: 'warn2',
        hoist: false,
        mentionable: false
    });
};

let pluszplszpluszaa = message.guild.roles.find(`name`, `warn3`);
if(!pluszplszpluszaa) {
    message.guild.createRole({
        name: 'warn3',
        hoist: false,
        mentionable: false
    });
};

let pluszplszpluszaaa = message.guild.roles.find(`name`, `warn4`);
if(!pluszplszpluszaaa) {
    message.guild.createRole({
        name: 'warn4',
        hoist: false,
        mentionable: false
    });
};
////////////////////////////////////////////////
if(cmd === `${prefix}serverinfo`){
    const guild = message.guild;
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " nap" : " napja") + " létrehozva.";
    };
    let verifLevels = ["Nincs", "Kevés", "Közepes", "Erős", "Nagyon erős"];
    let region = {
        "brazil": ":flag_br: Brazília",
        "eu-central": ":flag_eu: Közép európa",
        "singapore": ":flag_sg: Szingapúr",
        "us-central": ":flag_us: Közép USA",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: Kelet USA",
        "us-south": ":flag_us: Dél USA",
        "us-west": ":flag_us: Nyugat USA",
        "europe": ":flag_eu: Nyugat európa",
        "vip-us-east": ":flag_us: VIP Kelet USA",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Oroszország",
        "southafrica": ":flag_za:  Dél afrika"
    };
    if(message.guild.roles.size < 45) {
    const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name)
        .addField("Név:", message.guild.name, true)
        .addField("ID:", message.guild.id, true)
        .addField("Tulaj:", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Régió:", region[message.guild.region], true)
        .addField("Összes | Ember | Bot", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Biztonsági szint:", verifLevels[message.guild.verificationLevel], true)
        .addField("Csatornák:", message.guild.channels.size, true)
        .addField("Rangok száma:", message.guild.roles.size, true)
        .addField("Szerver létrehozása:", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .addField(`Rangok:`, guild.roles.map(roles => `${roles}`).join(' '), true)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`${name}`);
    message.channel.send({embed});
    } else {
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name)
        .addField("Név:", message.guild.name, true)
        .addField("ID:", message.guild.id, true)
        .addField("Tulaj:", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Régió:", region[message.guild.region], true)
        .addField("Összes | Ember | Bot", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Biztonsági szint:", verifLevels[message.guild.verificationLevel], true)
        .addField("Csatornák:", message.guild.channels.size, true)
        .addField("Rangok száma:", message.guild.roles.size, true)
        .addField("Szerver létrehozása:", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .addField(`Rangok:`, "Túl sok rang van! Max 45 rangot lehet megjeleníteni!")
        .setThumbnail(message.guild.iconURL)
        .setFooter(`${name}`);
    message.channel.send({embed});
    }
}

if(cmd === `${prefix}nyeremény`) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
        if(args[0]) {
    
        if(args[1] === `5m`){
        let botThumb = bot.user.displayAvatarURL;
        let nyer = new Discord.RichEmbed()
        .setTitle(`${message.author.username}`)
        .setColor("#2DE7F7")
        .addField(`**Nyeremény játék tárgya: ${args[0]}**`, `Ez a nyeremény játék ${args[1]} tart!`)
        .setThumbnail(botThumb)
        .setTimestamp(message.createdAt)
        .setFooter(`${name}`);
    
        message.channel.send(nyer);
    
        await message.channel.send(`**Innentől számítva **${args[1]}** idő van hátra!**`);
        let asd = message.guild.members.filter(member => !member.user.bot).random();
    
        setTimeout(() => {
        message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}. (<@${asd.user.id}>)`);
        message.channel.send("**A nyeremény játéknak vége!**")
        }, 300000)
    
    
        } else if(args[1] === `10m`){
        let botThumb = bot.user.displayAvatarURL;
        let nyer = new Discord.RichEmbed()
        .setTitle(`${message.author.username}`)
        .setColor("#2DE7F7")
        .addField(`**Nyeremény játék tárgya: ${args[0]}**`, `Ez a nyeremény játék ${args[1]} tart!`)
        .setThumbnail(botThumb)
        .setTimestamp(message.createdAt)
        .setFooter(`${name}`);
    
        message.channel.send(nyer);
    
        await message.channel.send(`**Innentől számítva **${args[1]}** idő van hátra!**`);
        let asd = message.guild.members.filter(member => !member.user.bot).random();
    
        setTimeout(() => {
            message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}. (<@${asd.user.id}>)`);
        message.channel.send("**A nyeremény játéknak vége!**")
        }, 600000)
    
        } else if(args[1] === `30m`){
            let botThumb = bot.user.displayAvatarURL;
        let nyer = new Discord.RichEmbed()
        .setTitle(`${message.author.username}`)
        .setColor("#2DE7F7")
        .addField(`**Nyeremény játék tárgya: ${args[0]}**`, `Ez a nyeremény játék ${args[1]} tart!`)
        .setThumbnail(botThumb)
        .setTimestamp(message.createdAt)
        .setFooter(`${name}`);
    
        message.channel.send(nyer);
    
        await message.channel.send(`**Innentől számítva **${args[1]}** idő van hátra!**`);
        let asd = message.guild.members.filter(member => !member.user.bot).random();
    
        setTimeout(() => {
            message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}. (<@${asd.user.id}>)`);
        message.channel.send("**A nyeremény játéknak vége!**")
        }, 1800000)
    
        } else if(args[1] === `1h`){
            let botThumb = bot.user.displayAvatarURL;
        let nyer = new Discord.RichEmbed()
        .setTitle(`${message.author.username}`)
        .setColor("#2DE7F7")
        .addField(`**Nyeremény játék tárgya: ${args[0]}**`, `Ez a nyeremény játék ${args[1]} tart!`)
        .setThumbnail(botThumb)
        .setTimestamp(message.createdAt)
        .setFooter(`${name}`);
    
        message.channel.send(nyer);
    
        await message.channel.send(`**Innentől számítva **${args[1]}** idő van hátra!**`);
        let asd = message.guild.members.filter(member => !member.user.bot).random();
    
        setTimeout(() => {
            message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}. (<@${asd.user.id}>)`);
        message.channel.send("**A nyeremény játéknak vége!**")
        }, 3600000)
    
        } else if(args[1] === `gyors`){
    
        let asd = message.guild.members.filter(member => !member.user.bot).random();
    
        message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}. (<@${asd.user.id}>)`);
    
        }else {
            message.channel.send(` Kérlek add meg az időt! (gyors, 5m, 10m, 30m, 1h)`);
        }
    
    } else message.channel.send(` Kérlek add meg a nyeremény játék tárgyát!`);
        } else message.channel.send(` Ehhez a parancshoz nincs jogod!`)
         
}

if(cmd === `${prefix}userinfo`){
    let status = ["elérhető", "nincs gépnél", "elfoglalt", "láthatatlan", "asd"];
    let avatarUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!avatarUser) return message.channel.send(`Kérlek adj meg egy nevet! pl: @asd123`);
    let avatarUserName = avatarUser.user.username;
    let userAvatar = avatarUser.user.displayAvatarURL;
    const guild = message.guild;

    let userEmbed = new Discord.RichEmbed()
    .setColor("#42c8f4")
    .setAuthor(avatarUser.user.username)
    .addField(`ID:`, `${avatarUser.id}`)
    .addField(`Ekkor csatlakozott a szerverhez:`, `${moment(message.guild.members.get(avatarUser.id).joinedAt).format("llll")}`)
    .addField(`Ekkor hozta létre a fiókját:`, `${moment(avatarUser.user.createdAt).format("llll")}`)
    .addField("Rangok:", avatarUser.roles.map(roles => `${roles}`).join(' '), true)
    .addField("Játékban:", `${avatarUser.presence.game}`)
    .addField("Állapota:", `${avatarUser.presence.status}`)
    .addField(`${avatarUserName} profilképe.`, "ˇˇˇ")
    .setImage(userAvatar)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.channel.send(userEmbed);
    
}

if(cmd === `${prefix}ban`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
    let kickPerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (kickPerson) {
    if (!kickPerson.hasPermission("KICK_MEMBERS")) {
    let bicon = bot.user.displayAvatarURL;

    let kickEmbed = new Discord.RichEmbed()
    .setTitle("-->>Ban<<--")
    .setDescription("Ban üzenet:")
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .addField(`${kickPerson.user.username} bannolva lett!`, "ˇˇˇˇ")
    .addField("Kiosztotta:", `${message.member} ezt az embert: ${kickPerson.user.username}`)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.guild.member(kickPerson.id).ban();
    message.channel.send(kickEmbed);
    console.log(`${message.author.id} bannolta: ${kickPerson}!`);

    } else message.channel.send(`A szerver adminjait nem tudod bannolni!`);

    } else message.channel.send(`Kérlek adj meg egy nevet! (pl: @cenzxd)`);

    } else message.channel.send(`Neked nincs jogod hogy bannolj!`);
} else message.channel.send(`Hiányzik: administrator jog.`)

}

if(cmd === `${prefix}ranglétrehoz`){
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
        message.delete().catch();
        if(message.member.hasPermission("KICK_MEMBERS")) {
        if(!args[0]) return message.channel.send(`Kérlek add meg az új rang nevét!`);
        message.guild.createRole({
            name: `${args[0]}`,
            hoist: true,
            mentionable: false
        });
        message.channel.send(`Létrehozta a(z) ${args[0]} rangot!`)
    } else message.channel.send(`Nincs jogod ehhez a parancshoz!`);
    } else message.channel.send(`Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.`)
    
}

if(cmd === `${prefix}profilkép`){
    let avatarUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!avatarUser) return message.channel.send(`Kérlek adj meg egy nevet! pl: @asd123`);
    let userAvatar = avatarUser.user.displayAvatarURL;
    let avatarUserName = avatarUser.user.username;

    let avatarEmbed = new Discord.RichEmbed()

    .setColor("#42c8f4")
    .setAuthor(message.author.username)
    .addField(`${avatarUserName} profilképe.`, "ˇˇˇ")
    .setImage(userAvatar)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.channel.send(avatarEmbed);
}

if(cmd === `${prefix}rangadás`) {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`Nincs jogod ehhez a parancshoz!`);
        if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
            let xd = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(xd){
    let roleToAdd = message.mentions.roles.first();
    xd.addRole(roleToAdd);
    
                    message.reply(`${roleToAdd.name} sikeresen hozzáadva ${xd.user.username}-hez/hoz!`)
            } else message.reply("Adj meg egy nevet! pl @asd123")
        } else message.reply("A szerveren a bot nem administrátor! Kérlek add meg neki az admin jogot!")    
    
}

if(cmd === `${prefix}say`) {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`Nincs jogod ehhez a parancshoz!`);
    let bMessage = args.join(" ");
    message.delete().catch();
    message.channel.send(bMessage);
}

if(cmd === `${prefix}kick`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
    let kickPerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (kickPerson) {
    if (!kickPerson.hasPermission("KICK_MEMBERS")) {
    let bicon = bot.user.displayAvatarURL;

    let kickEmbed = new Discord.RichEmbed()
    .setTitle("-Kick-")
    .setDescription("Kick üzenet:")
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .addField(`${kickPerson.user.username} kickelve lett!`, "ˇˇˇˇ")
    .addField("Kiosztotta:", `${message.member} ezt az embert: ${kickPerson.user.username}`)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.guild.member(kickPerson.id).kick();
    message.channel.send(kickEmbed);
    console.log(`${message.author.id} kickelte ${kickPerson}!`);

    } else message.channel.send(`A szerver adminjait nem tudod kickelni!`);

    } else message.channel.send(`Kérlek adj meg egy nevet! (pl: @cenzOP)`);

    } else message.channel.send(`Neked nincs jogod hogy kickelj!`);
} else message.channel.send(`Hiányzik: administrator jog.`)

}


//mute xdddd

if (cmd === `${prefix}mute`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    let muterang = message.guild.roles.find(`name`, `mute`);
    let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(message.member.hasPermission("KICK_MEMBERS")) {
    if(mute) {
    if(!mute.hasPermission("KICK_MEMBERS")) {
    if(!mute.roles.has(muterang.id)) {

    message.channel.send(`<@${mute.id}> -nak/nek a nyelvére csomó lett kötve!`)

    mute.addRole(muterang.id);

    } else message.channel.send(`Ez az ember már némítva van!`)
    } else message.channel.send(`A szerver adminjait nem tudod némítani!`);
    } else message.channel.send(`Kérlek írj be egy nevet. (pl: @nemcenz)`);
    } else message.channel.send(`Nincs jogod hogy némíts!`);
} else message.channel.send(`Hiányzik: administrator jog.`)
}

let nemitottrang = message.guild.roles.find(`name`, `mute`);
if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
if(message.member.hasPermission("KICK_MEMBERS")) {

} else if(message.member.roles.has(nemitottrang.id)) {
message.delete();
}
}

if (cmd === `${prefix}unmute`) {
if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
let muterang = message.guild.roles.find(`name`, `mute`);
let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(message.member.hasPermission("KICK_MEMBERS")) {
if(mute) {
if(mute.roles.has(muterang.id)) {

message.channel.send(`<@${mute.id}> -nak/nek kicsomózták a nyelvét!`)

mute.removeRole(muterang.id);

} else message.channel.send(`Ez az ember nincs némítva!`)
} else message.channel.send(`Kérlek írj be egy nevet. (pl: @cenzike)`);
} else message.channel.send(`Nincs jogod hogy felnémíts!`);
} else message.channel.send(`Hiányzik: administrator jog.`)
}

if(cmd === `${prefix}help`){
let hölp = new Discord.RichEmbed()
    .setTitle("HELP")
    .setColor("#ff0000")
    .addField(`${prefix}ban @név`, "*Emberek bannolása.*")
    .addField(`${prefix}kick @név`, "*Emberek kickelése.*")
    .addField(`${prefix}mute @név`, "*Muteol egy embert :)*")
    .addField(`${prefix}unmute @név`, "*Feololdja a némítást.*")
    .addField(`${prefix}nyeremény <gyors, 5m, 10m, 30m, 1h> <tárgy>`, "*nyeremény játék*")
    .addField(`${prefix}tempmute`, "*Ideiglenes némítás.*")
    .addField(`${prefix}rangadás @név @rang`, "*Rang adása.*")
    .addField(`${prefix}ranglétrehoz név`, "*rang létrehozása.*")
    .addField(`${prefix}profilkép @név`, "*Lekéri a profilképét.*")
    .addField(`${prefix}userinfo @név`, "*lekéri az ember infóit!*")
    .addField(`${prefix}serverinfo`, "*Lekéri a szerver infóit!*") 
    .addField(`${prefix}say`, "Duma küldése bottal!*") 
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.channel.send(hölp);
}

if(cmd === `${prefix}tempmute`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
        let muterang = message.guild.roles.find(`name`, `mute`);
        let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(message.member.hasPermission("KICK_MEMBERS")) {
        if(mute) {
    
    
        if(!mute.hasPermission("KICK_MEMBERS")) {
        if(!mute.roles.has(muterang.id)) {
            if(args[1] === `3m`) { 
                message.channel.send(`<@${mute.id}> némítva lett 3 percre!`)
    
                mute.addRole(muterang.id);
    
                setTimeout(() => {
                    mute.removeRole(muterang.id);
                }, 180000);
            } else if(args[1] === `5m`) { 
                message.channel.send(`<@${mute.id}> némítva lett 5 percre!`)
    
                mute.addRole(muterang.id);
    
                setTimeout(() => {
                    mute.removeRole(muterang.id);
                }, 300000);
            } else if(args[1] === `15m`) { 
                message.channel.send(`<@${mute.id}> némítva 15 percre!`)
    
                mute.addRole(muterang.id);
    
                setTimeout(() => {
                    mute.removeRole(muterang.id);
                }, 900000);
            } else if(args[1] === `30m`) { 
                message.channel.send(`<@${mute.id}> némítva 30 percre!`)
    
                mute.addRole(muterang.id);
    
                setTimeout(() => {
                    mute.removeRole(muterang.id);
                }, 1800000);
            } else if(args[1] === `1h`) { 
                message.channel.send(`<@${mute.id}> némítva lett 1órára!`)
    
                mute.addRole(muterang.id);
    
                setTimeout(() => {
                    mute.removeRole(muterang.id);
                }, 3600000);
            } else return message.channel.send(`Kérlek írj be egy időt! (3m, 5m, 15m, 30m, 1h)`)
        } else message.channel.send(`Ez az ember már némítva van!`);
        } else message.channel.send(`A szerver adminjait nem tudod némítani!`);
        } else message.channel.send(`Kérlek írj be egy nevet. (pl: @asd)`);
        } else message.channel.send(`Nincs jogod hogy némíts!`);
    } else message.channel.send(`Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.`)
}

////////////////////////////////////vége
if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
let warnolt = message.guild.roles.find(`name`, `warn4`);
if(message.member.roles.has(warnolt.id)) {
    if(!message.member.hasPermission("KICK_MEMBERS")) {
    message.channel.send(`<@${warnolt.id}> Túl sok warnod volt ezért a rendszer autómatikusan kickelt!`);
    message.member.kick();
    }
}
}
////////////////////////////vége


   ///////////////////////////////
})
 
bot.login(tokenfile.token);