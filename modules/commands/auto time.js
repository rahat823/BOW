module.exports.config = {
	name: 'autosend1',
	version: '10.02',
	Permssion: 2,
	credits: 'Khan Rahul RK',
	prefix:true,
	description: 'Ajan Time auto sand ajan video',
	category: 'ajan',
	usages: '[]',
	cooldowns: 3
};
const r = a => a[Math.floor(Math.random()*a.length)],
{
	get
} = require('axios'),
config = [{
			timer: '5:55:00 AM',
			message: ['╭•┄┅════❁🌺❁════┅┄•╮\n •—»✨ফজরে আজান✨«—•\n╰•┄┅════❁🌺❁════┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n 𝐓𝐈𝐌𝐄 𝐀𝐍𝐃 𝐃𝐀𝐓𝐄 \n {time} \n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বোন এখন ফজরের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি ফজর এর নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍\nরাহাত খান]
},
{
			timer: '1:45:00 PM',
	message: ['╭•┄┅════❁🌺❁════┅┄•╮\n •—»✨জোহরের আজান✨«—•\n╰•┄┅════❁🌺❁════┅┄•╯\n\n•⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n 𝐓𝐈𝐌𝐄 𝐀𝐍𝐃 𝐃𝐀𝐓𝐄 : {time} \n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বোন এখন জোহরের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি জোহরের  এর নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍\রাহাত খান]
},
{
			timer: '4:45:00 PM',
			message: ['╭•┄┅════❁🌺❁════┅┄•╮\n •—»✨আসর আজান✨«—•\n╰•┄┅════❁🌺❁════┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n 𝐓𝐈𝐌𝐄 𝐀𝐍𝐃 𝐃𝐀𝐓𝐄 : {time} \n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বোন এখন আসর আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি আসর এর নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍\nরাহাত খান]
},
{
			timer: '6:15:00 PM',
			message: ['╭•┄┅════❁🌺❁════┅┄•╮\n •—»✨মাগরিব আজান✨«—•\n╰•┄┅════❁🌺❁════┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n 𝐓𝐈𝐌𝐄 𝐀𝐍𝐃 𝐃𝐀𝐓𝐄 : {time} \n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বোন এখন মাগরিবের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি মাগরিবের  নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍\nরাহাত খান]
},
{
			timer: '8:5:00 PM',
			message: ['╭•┄┅════❁🌺❁════┅┄•╮\n  •—»✨ইশা আজান✨«—•\n╰•┄┅════❁🌺❁════┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n 𝐓𝐈𝐌𝐄 𝐀𝐍𝐃 𝐃𝐀𝐓𝐄 : {time} \n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বোন এখন ইশা আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি ইশারের নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍\nরাহাত খান]
	}];
module.exports.onLoad = o => {
	if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
	global.autosendmessage_setinterval = setInterval(async function() {
			if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
					var msg = r(á.message);
					msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Dhaka").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://vip-video-api-msjanu77789.replit.app/vdtrai`)).data.data)
					msg = {
							body: msg, attachment: (await get((await get(`https://vip-video-api-msjanu77789.replit.app/vdtrai`)).data.data, {
									responseType: 'stream'
							})).data
					};
					global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
			};
	}, 1000);
};
module.exports.run = () => {};
