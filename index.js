// random image folder to discord bot
// jake tanda
const keepAlive = require("./host")
const test = require('underscore')
const { Client, Intents } =  require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
var mess=["ngu loz", "làm đéo có thư mục đấy?","ra rửa mặt đi bạn ơi",'Mày thành hề từ khi nào thế?','Đéo biết mệt hả mày','Ôi bạn ơi! Bạn ngu là do bạn không chơi đồ đấy bạn ạ, nếu bạn chơi đồ vào thì là đề kháng nó khỏe nó không bao giờ làm mấy trò ngu đâu bạn ạ, chơi đồ là thuốc bổ mà bạn! Bạn phải nên nhớ nhá, cái viên thuốc bình thường, cái viết thuốc ACID B1 bạn mua có 2 nghìn đc mấy viên đúng k ? Hoặc là 10 nghìn 1 viên, 10 nghìn 1 viên là ACID B1 đấy , đúng không? Thế đây những viên thuốc như viên thuốc kẹo, viên thuốc kim cương, viên thuốc vương liệm này, viên thuốc các kiểu lày thì bạn mua cái đấy vào 500 nghìn 1 viên cơ mà! Chơi cái đấy vào đề kháng nó phải cao hơn chứ bạn! Chơi cái đấy vào nhiều đề kháng mà! Bạn không chơi vào đề kháng bạn kém là phải đấy bạn ạ !',"hong","Bie","dư lào bạn","Ghét","bố m nghiêp túc cười cái địt con mẹ mày à ?","bố mày nói rồi t đéo nói lại lần nữa đâu","m nghĩ đấy là trò đùa à ?","đến h chơi game r","không quen"]
var rep="không có lệnh đấy :)"

client.once('ready', () => {
    console.log('Ready!');
    client.user.setPresence({ activities: [{ name: '!lenh đi bẹn' }], status: 'online' });

});

client.on('messageCreate', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift();
    if (message.content.toLowerCase() === config.prefix + "lenh") {
    message.channel.send(config.prefix+"s: ảnh nude\n"+config.prefix+"sexy: no nude\n"+config.prefix+"fp: foodporn nhưng toàn salad?\n"+config.prefix+"ct: thời chiến\n"+config.prefix+"xinh: đóng góp của Nguyễn Đức Mạnh\n"+"weebhook mệt vãi loz (đóng góp ảnh): "+"https://drive.google.com/drive/folders/1Iw7eIpVoPjUfT-S9CdJYxaL98E4Odqs4");
    }
    fs.readdir('./', (err, folders) => {
        var selectedFolder = null;
        folders.forEach(folder => {
            if (command.toLowerCase() == folder.toLowerCase()) {
                selectedFolder = folder;
            }
        });
        if (selectedFolder != null) {
            fs.readdir('./' + selectedFolder, (err, files) => {
                folderSize = files.length;

                // Get selected image number
                if (!args.length) {
                    imageNumber = Math.floor(Math.random() * folderSize) + 1;
                } else {
                    imageNumber = args[0];

                    // Invalid image number
                    if (imageNumber > folderSize || imageNumber < 1) { 
                        return message.channel.send("Possible arguments: " + config.prefix + command + " [1-" + folderSize + "]."); 
                    }
                }
                message.channel.send ({files: ["./" + command.toLowerCase() + '/'+ files[imageNumber-1]]} )
            });}
      else{
        if(command.toLowerCase()!='lenh')
        message.channel.send(rep)
      }
    });
});
keepAlive();
client.login(config.token);

