module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermission: 0,  // Typo corrected from 'hasPermssion' to 'hasPermission'
    credits: "Aadi Gupta",
    description: "Upload an image to Imgur",
    commandCategory: "Game",
    usages: "[reply]",
    cooldowns: 5,
    dependencies: {
        "axios": ""
    }
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule['axios'];
    
    // Check if there is a reply or if an image link is provided
    var linkanh = event.messageReply ? event.messageReply.attachments[0].url : args.join(" ");
    if (!linkanh) {
        return api.sendMessage('Please reply to an image or enter a link to an image!', event.threadID, event.messageID);
    }

    try {
        const res = await axios.get(`https://imgur-api-by-koja.xx0xkoja.repl.co/imgur?link=${encodeURIComponent(linkanh)}`);
        if (res.data && res.data.uploaded && res.data.uploaded.image) {
            var img = res.data.uploaded.image;
            return api.sendMessage(`${img}`, event.threadID, event.messageID);
        } else {
            return api.sendMessage('Image upload failed. Please try again.', event.threadID, event.messageID);
        }
    } catch (error) {
        return api.sendMessage('An error occurred while uploading the image. Please try again later.', event.threadID, event.messageID);
    }
};
