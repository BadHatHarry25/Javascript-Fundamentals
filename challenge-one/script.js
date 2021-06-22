function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;
    const yearsLeft = 65 - currentAge;
    alert(yearsLeft)
}

function greetingInFrench(event) {
    const greeting = event.target.value;
    if (greeting == "hello"){
        alert("bonjour")
    } else if (greeting == "goodbye") {
        alert("auRevoir")
    } else {
        alert("i dont recognise what you are saying")
    }
}

// if greeting == "goodbye")
    // alert(aurevoir)