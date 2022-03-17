const { Boat } = require('./boat')

regularBoat = new Boat(10,1,"Blue", 3, 0);

//Method chaining
chainedBoat = new Boat()
    .setLength(20)
    .setWidth(2)
    .setColor("Red")
    .setMasts(0)
    .setEngine(1)


console.log(chainedBoat);
console.log(regularBoat);