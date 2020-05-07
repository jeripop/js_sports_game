let count = 0;
let teamoneNumshots = document.querySelector("#teamone-numshots");
let teamoneShootButton = document.querySelector("#teamone-shoot-button");
teamoneShootButton.addEventListener("click", function() {
 let newNumberofShotsTeamone = Number (teamoneNumshots.innerHTML) + 1;
teamoneNumshots.innerHTML = newNumberofShotsTeamone;
console.log ('teamoneShootButton')
})


let teamoneNumgoals = document.querySelector("#teamone-numgoals")
let teamtwoNumgoals = document.querySelector("#teamtwo-numgoals")

teamoneShootButton.addEventListener("click", function () {
  let randNum = Math.random ();
    if (randNum < 0.3) {
      let teamOneScore = Number(teamoneNumgoals.innerHTML) + 1;
      teamoneNumgoals.innerHTML = teamOneScore;
   } 
})




let teamtwoNumshots = document.querySelector("#teamtwo-numshots");
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");
teamtwoShootButton.addEventListener("click", function () {
    let newNumberofShotsTeamtwo = Number (teamtwoNumshots.innerHTML) + 1;
    teamtwoNumshots.innerHTML = newNumberofShotsTeamtwo;
    console.log ('teamtwoShootButton')
})


teamtwoShootButton.addEventListener("click", function () {
    let randNum = Math.random ();
    if (randNum < 0.7){
        let teamTwoScore = Number(teamtwoNumgoals.innerHTML) + 1;
        teamtwoNumgoals.innerHTML = teamTwoScore ;
    }
})




let numResets = document.querySelector("#num-resets");
let resetButton = document.querySelector("#reset-button")
resetButton.addEventListener("click", function () {
let newResets = Number (numResets.innerHTML) + 1;
 numResets.innerHTML = newResets;
 console.log('resetButton')
})

resetButton.addEventListener("click", function () {
    let newNumberofShotsTeamone = Number (teamoneNumshots.innerHTML) * 0;
    teamoneNumshots.innerHTML = newNumberofShotsTeamone;
    let newNumberofShotsTeamtwo = Number (teamtwoNumshots.innerHTML) * 0;
    teamtwoNumshots.innerHTML = newNumberofShotsTeamtwo;
    let teamOneScore = Number (teamoneNumgoals.innerHTML) * 0;
    teamoneNumgoals.innerHTML = teamOneScore;
    let teamTwoScore = Number (teamtwoNumgoals.innerHTML) * 0;
    teamtwoNumgoals.innerHTML = teamTwoScore;

})


