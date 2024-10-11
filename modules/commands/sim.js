module.exports.config = {
    name: "sim",
    version: "1.0.0",
    hasPermission: 0,  // typo corrected from 'hasPermssion' to 'hasPermission'
    credits: "MirryKal",
    description: "Talk to Sim",
    usages: "[ask]",
    commandCategory: "chat",  // command category set to a relevant value
    cooldowns: 2
};

module.exports.run = async ({ api, event, args }) => {
    const axios = require("axios");
    let query = args.join(" ");
    
    if (!query) {
        return api.sendMessage(`Baby Sim k network ud chuke hain \n Kaam nahi karta🙂: ${global.config.PREFIX}${this.config.name} [text]`, event.threadID, event.messageID);
    }
    
    try {
        const res = await axios.get(`https://api.simsimi.net/v2/?text=${query}&lc=en`);
        if (res.data.success) {
            api.sendMessage(res.data.success, event.threadID, event.messageID);
        } else {
            api.sendMessage("Sorry, Sim se response nahi mila.", event.threadID, event.messageID);
        }
    } catch (error) {
        api.sendMessage("API call mein koi masla aaya. Kya aap phir se try kar sakte hain?", event.threadID, event.messageID);
    }
};
