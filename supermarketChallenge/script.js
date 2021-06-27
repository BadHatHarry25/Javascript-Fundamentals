function handleVegPrice(event) {
    let veg = event.target.value;
    switch (veg) {
        case "potatoes":
        case "carrots":
            alert ("£52 per kg! What a steal!");
            break;
        case "brocolli":
            alert ("£70 per kg! Bargain Bucket!");
            break;
            
        case "cabbage":
            alert ("£100 per kg! Youre a cabbage if you shop anywhere else!");
            break;
            
        case "asparagus":
            alert ("£300 per kg! You lucky thing, you!");
            break;       
    }
}