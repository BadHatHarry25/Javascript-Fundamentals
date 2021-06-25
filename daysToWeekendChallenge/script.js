function handleDayOfWeek(event) {
    let day = event.target.value;
    switch (day) {
        case "monday":
            alert ("five days until the weekend");
            break;
        case "tuesday":
                alert ("four days until the weekend");
                break;
        case "wednesday":
            alert ("three days until the weekend");
            break;
            
        case "thursday":
            alert ("two days until the weekend");
            break;
            
        case "friday":
            alert ("one day until the weekend");
            break;

        case "saturday":
            alert ("it is the weekend, dummy");
            break;

        case "sunday":
            alert ("it is the weekend, dummy");
            break;         
    }
}