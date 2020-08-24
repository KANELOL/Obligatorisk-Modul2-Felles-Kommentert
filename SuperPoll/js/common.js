// Hva gjør denne?
function getCurrentPoll() { // henter den valgte pollen og setter den til pollId
    const pollId = model.app.currentPoll;
    // return model.polls.filter(p => p.id === pollId)[0];
    
    // går gjennom hver "poll" (ny variabel) i model.polls 
    // og returnerer poll-objektet om ID-en er det samme some model.app.currentPoll
    for (let poll of model.polls) {
        if (poll.id === pollId) return poll; // håper du ikke har pollen allergi!
    }
    return null;
}