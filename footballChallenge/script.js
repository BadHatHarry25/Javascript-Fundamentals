// client brief...
// create an application which can be used to keep track
// of a score in a football match

// it's football. two teams so two scores
let teamScoreOne = 0;
let teamScoreTwo = 0;
let isGameStopped = false;

// when a team one button is clicked, increment team1 score
function handleTeamOneClick() {
    teamScoreOne = teamScoreOne + 1
}

// when a team two button is clicked, increment team2 score
function handleTeamTwoClick() {
    teamScoreTwo = teamScoreTwo + 1
}

// when do we finish/stop?
function handleStopGame() {
    isGameStopped = true;
}