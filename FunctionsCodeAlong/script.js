// write a function to find the perimiter of a rectangle

const calculatePerimiter = (width, height) => {
    return width + width + height + height;
}

console.log(calculatePerimiter(1,1));

// write a function to find the area of a circle. when given a radius, print the area to the console.

const calculateArea = (radius) => {
    const area = Math.PI * radius * radius;
    console.log(area)
}

calculateArea(2);

// write a function named getDescription that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your statement to the console like so: "i am currently a X, living in Y, and married to Z with N kids."
// call that function 3 times with 3 different calues for the arguments.


function getDescription(amountOfChildren, partner, jobTitle, location) {
    const message = `I am currently a ${jobTitle} living in ${location} with ${partner} and ${amountOfChildren} kids.`
    console.log(message)
}

getDescription("0", "nobody", "warehouse worker", "rotherham")

function calculateSupply(currentAge, amountPerDay) {
    const maxAge = 79;
    const snickersPerLifetime = (amountPerDay * 365) * (maxAge - currentAge);
    const snickersMessage = `You will need ${snickersPerLifetime} snickers bars to last you until the ripe old age of ${maxAge}.`;
    console.log(snickersMessage);
}
calculateSupply("33", "2");
calculateSupply("50", "1");
calculateSupply("25", "3");


