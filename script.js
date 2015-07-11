var beer = 99;
var bottles = " bottles";
var end = ""

while (beer > 0) {
    if (beer <= 1)
      bottles = " bottle";
    var sprint = beer + bottles + " of beer on the wall, " + beer + bottles + " of beer. You take one down, pass it around " + (beer - 1) + bottles + " of beer on the wall.";
    console.log(sprint);
    beer--;
}
