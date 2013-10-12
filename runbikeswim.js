var user = prompt("Do you want to run, bike, or swim?").toUpperCase();

switch (user) {
    case 'RUN':
        console.log("Lets go for a run by The Charles!");
        var device = prompt("What running GPS device do you use?").toUpperCase();
        var defaultDevice = "FITBIT";
        if (device && defaultDevice) {
            console.log(device + " is the device of choice amongst your friends!");
        } else {
            console.log("I must say that your choice to use the " + device + " is in the minority amongst most folks your age.");
        }

        break;
    case 'BIKE':
        console.log("lets go biking in the mountains of New Hampshire.");
        var userBike = prompt("Do you have a mountain bike or road bike? Or do you have a hybrid?").toUpperCase();
        var defaultBike = "ROAD";
        if (userBike == "ROAD" || userBike == "HYBRID") {
            console.log("You are likely well equipped to do a triathlon.");
        } else {
            console.log("You might want to consider buying a different type of bike if you want to do the triathlon next year.");
        }
        break;
    case "SWIM":
        console.log("Swimming the boston harbor could be interesting.");
        break;

    default:
        console.log("You are a bozo!");
        break;
}
