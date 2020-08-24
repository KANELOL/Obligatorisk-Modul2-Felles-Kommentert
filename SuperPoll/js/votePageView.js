function updateViewVotePage() {
    // const pageInputs = model.inputs.createPoll; // henter createPoll igjen
    
    // // Får teksten til å si Oppdater eller Lag ettersom det er noe der fra før av eller ikke
    // const buttonText = pageInputs.pollId !== null ? 'Oppdater' : 'Lag';
    // const checked = pageInputs.usersCanAddAlternatives ? 'checked' : ''; // lar admin bestemme om brukerne kan legge til alternativer eller ikke
    // const poll = getCurrentPoll();
    // const hasVotes = poll !== null && Object.keys(poll.votes).length > 0; // Sjekker om det faktisk er stemmer i current poll
    // const disableInput = hasVotes ? 'disabled' : ''; // avslutter avstemning
    // // BRUK DENNE

    document.getElementById('app').innerHTML = `        

        <h3>Stem</h3>
        ${createVoteButtonsHtml()}

    `;
}

function createVoteButtonsHtml() {
    const poll = getCurrentPoll();
    const user = model.app.loggedInUser;
    const currentVote = poll.votes[user];

    let html = '';

    // Looper gjennom alle options i poll til den finner det som har blitt stemt på, og printer det ut ved siden av en knapp
    for (let option of poll.options) { 
        const currentVoteInfo = option === currentVote ? `Du har stemt på <b>${option}</b>` : ''; // 
        html += `<button onclick="vote('${option}')">${option}</button> ${currentVoteInfo}<br/>`;
    }
    return html;
}