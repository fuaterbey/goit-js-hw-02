function checkForSpam(message) {

    const checkingSale = message.toLowerCase().includes("sale");
    const checkingSpam = message.toLowerCase().includes("spam");

    if (checkingSale) {

        return "Warning: This message contains forbidden words.";

    }
    
    else if (checkingSpam) {
        return "Warning: This message contains forbidden words.";

    }
        
    else {

        return "You can safely open this message.";
    }

}