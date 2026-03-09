function checkForSpam(message) {

    const checking = message.toLowerCase().includes("sale" || "spam");

    if (checking) {

        return "Warning: This message contains forbidden words.";

    }

    else {

        return "You can safely open this message.";
    }

}