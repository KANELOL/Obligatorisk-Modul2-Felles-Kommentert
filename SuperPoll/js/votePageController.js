function vote(option) {
    const poll = getCurrentPoll(); // Henter poll-objekted fra commomnomnom.js
    const user = model.app.loggedInUser; // User = 'per' nå :>
    poll.votes[user] = option; // setter inn vote i poll sammen med navnet på user
    updateView(); //oppdaterer view
}