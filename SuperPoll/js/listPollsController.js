function pollDetails(id) 
{ 
    model.inputs.createPoll = model.polls[id];
    //setter "editmode" på den pollen man trykker på
    console.log("id: ", id, "createPoll ", model.inputs.createPoll)
    return model.polls[id];
    //updateViewCreateVotePage();
    // model.app.currentPoll = id;
    //     document.getElementById("app").innerHTML = `
    //     <input id="question" value="${model.polls[id].question}">
    //     <input id="question" value="${model.polls[id].options}">
    //     <input id="question" value="${model.polls[id].question}">
    //     <input id="question" value="${model.polls[id].question}">
    //     `;
    
}