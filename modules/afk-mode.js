const Discord = require("discord.js");
module.exports.run = (client, msg, args, config) => {


    const afkembedsuccess = new Discord.RichEmbed()
    .setColor("#00000")
    .setTitle("AFK-MODE has been enabled!")
    .setFooter(client.user.username)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()

    const afkembeddisabled = new Discord.RichEmbed()
    .setColor("#00000")
    .setTitle("AFK-MODE has been disabled!")
    .setFooter(client.user.username)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()

    const afkembedfail = new Discord.RichEmbed()
    .setTitle("#00000")
    .setDescription("AFK-MODE has failed (Too long of a msg!)")
    .setFooter(client.user.username)
    .setThumbnail(client.user.avatarURL)
.setTimestamp()

    if(!client.afk.get(client.user.id)) {
        client.afk.set(client.user.id, args.join(" "))
        msg.reply(afkembedsuccess)
        return;
    } else if(client.afk.get(client.user.id)) {
        client.afk.delete(client.user.id)
        msg.reply(afkembeddisabled)
        return;
    }


}

exports.help = {
    name:"afk-mode",
    usage:"afk-mode <msg>",
    group: "config",
    desc: "While on, auto replies to private msgs with your custom msg set.",
    ownerOnly: true,
    example:"afk-mode <msg> (will turn off if it's on and vice versa)"
}