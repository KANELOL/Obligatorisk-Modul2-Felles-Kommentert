// Hvor kjører denne funksjonen, og hva gjør den?
// kjører om den nåværende siden er "createPoll". Den 
function updateViewCreateVotePage() {
    //Lager ny variabel pageInputs og
    // henter informasjon fra model.js model.inputs.createPoll
    const pageInputs = model.inputs.createPoll; // henter informasjonen et spørsmål skal inneholde

    // ternary operator? Setter teksten på redigeringsknappen til
    // "Oppdater" om den allerede har en ID, og "Lag" om den ikke har det
    const buttonText = pageInputs.pollId !== null ? 'Oppdater' : 'Lag';
    
    // Blir brukt med innerHTML til
    // Lager en konstant variabel som
    const checked = pageInputs.usersCanAddAlternatives ? 'checked' : ''; // sjekker om folk kan legge til nye alternativer eller ikke
    const poll = getCurrentPoll();
    const hasVotes = poll !== null && Object.keys(poll.votes).length > 0;
    const disableInput = hasVotes ? 'disabled' : '';

    // create updateViewVotePage function here !!!!!!!

    // Endrer 
    document.getElementById('app').innerHTML = `

        <h3>Spørsmål</h3>
        <input 
            type="text" 
            value="${pageInputs.question}" 
            size="80" 
            oninput="model.inputs.createPoll.question=this.value" 
            ${disableInput}
        />
        <br/>
        <input
            type="checkbox"
            onchange="model.inputs.createPoll.usersCanAddAlternatives=this.checked==='checked'" 
            ${// ^ om checkboxen er checked (og har derved attributten "checked"), settes usersCanAdd(...) til true, og ellers false.
            // checked===true kunne også ha blitt brukt (?)
            checked} 
        />
        <br/>
        <h4>Alternativer</h4>
        <ul>
            ${createVotesHtml()}
        </ul>
        <input 
            type="text" 
            value="${model.inputs.createPoll.newAlternative}"
            oninput="model.inputs.createPoll.newAlternative=this.value"
        />
        <button>Legg til alternativ</button>
        <p>&nbsp;</p>
        <button onclick="createOrUpdatePoll()" style="font-size: 150%">${buttonText} spørreundersøkelse</button>
    
    `;
}
//lager stemmer
function createVotesHtml() {
    const counts = {};
    const currentPoll = getCurrentPoll(); // lager en variabel common.js her ble den brukt.
    const votesObj = currentPoll !== null ? currentPoll.votes : {};
    const votes = Object.values(votesObj);
    for (let vote of votes) {
        counts[vote] = (counts[vote] || 0) + 1;
    }

    const pageInputs = model.inputs.createPoll;

    let html = '';
    for (let option of pageInputs.options) {
        html += `<li>${option} - ${counts[option] || 0}</li>`;
    }
    return html;
}

function createAlternativesHtml2() {
    const pageInputs = model.inputs.createPoll;
    return pageInputs.options.map(option => `<li><${option}/li>`).join('');
}