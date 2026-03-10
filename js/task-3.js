function checkForSpam(message) {

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("sale") || lowerMessage.includes("spam")) {

        return "Warning: This message contains forbidden words.";

    }
        
    else {

        return "You can safely open this message.";
    }

}
