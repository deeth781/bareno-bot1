module.exports.config = {
    name: "biden",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Bareno",
    description: "",
    commandCategory: "Tạo ảnh",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
	let text = args.toString().replace(/,/g,  '  ');
if (!text)
    return api.sendMessage("[𝐓𝐡𝐢𝐞̂́𝐮 𝐧𝐨̣̂𝐢 𝐝𝐮𝐧𝐠]", event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
	 return request(encodeURI(`https://api.popcat.xyz/biden?text=${text}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback());     
}}