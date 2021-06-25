function handlePositiveNegative(event) {

    let number = event.target.value;

    if (number < 0) {
        alert ("number is negative")
    } else if (number > 0) {
        alert ("number is positive")
    }
}