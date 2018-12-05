const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('*')

bot.on('ready', function(){
    bot.user.setGame(prefix + 'help');

})

bot.on("message", message => {
    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes :")
            .setDescription("Commandes Disponible avec <@498564267755175966>")
            .addField(prefix + "help", "Affiche cette page")
            .addField(prefix + "candidature", "Affiche les Google Form disponible pour les candidature du STAFF")
            .addField(prefix + "infos", "Affiche les infos du Discord ; ex : Nom du serveur, Date de création, etc...")
            .setFooter("En espérant que vous passerez du bon temps sur le Discord de la Nelyx - Team")
        message.channel.sendEmbed(embed);
    }
        
    if (message.content === prefix + "candidature") {
        var embed = new Discord.RichEmbed()
            .setTitle("Candidature Recrutements - STAFF :")
            .setDescription("Si vous souhaitez faire une candidature pour le STAFF de AccountRator c'est par ici!")
            .addField("Candidature Assistant", "[Nelyx - Fortnite](https://goo.gl/forms/HbvdUGsl9XWVN4Pf2)")
            .addField("Candidature Modérateur", "[Nelyx - Fortnite](https://goo.gl/forms/HbvdUGsl9XWVN4Pf2)")
            .setThumbnail("https://images-ext-1.discordapp.net/external/v6JHUmPI3owFTdb0Wa9_OYzlftwa5VGF70WvyWZ3Ssc/https/images-ext-1.discordapp.net/external/_veBMBMuqvtyKyNoVQJJj7Rb_hUI2N8P2kl-ncixLGM/https/valentinbraem.s-ul.eu/uEG28JXB:large")
            .setFooter("Ce sont des formulaires à remplir obligatoirement si vous voulez intégrer la STAFF")
        message.channel.sendEmbed(embed);
    }
});

bot.login(process.env.TOKEN);
