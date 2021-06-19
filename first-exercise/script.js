// if a name is a coaches name, log "it's a coach"

const name = "Andy";
if (name == "Andy") {
    console.log ("It's a coach")
}

// If a greeting is "bonjour", log "comment ca va"

const greeting = "bonjourno";
if (greeting == "bonjour") {
    console.log ("comment ca va")
}

// If a score reaches 10, log "you won the game"

const score = 10;
if (score == "10") {
    console.log ("you won the game!")
}

// if age is greater than 65, log "time to retire"

let age = 50
if (age >= 65) {
    console.log ("time to retire!")
}

// If had covid, log "time to isolate", else "keep socail distancing"

const hasCovid = false;
const isShielding = true;
if (hasCovid || isShielding) {
    console.log ("time to isolate")
} else {
    console.log ("keep social distance")
}

// If age is greater than 18, and isBritish "you can vote in election"

const isBritish = true;
age = 18
if (age >= 18 && isBritish) {
    console.log ("you can vote in next election")
}