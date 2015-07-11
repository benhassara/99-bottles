var beer = 99;
var bottles = " bottles";
var end = " of beer. You take one down, pass it around " + (beer - 1) + bottles + " of beer on the wall.";

while (beer > 0) {
    var sprint;
    if (beer > 2)
      sprint = beer + bottles + " of beer on the wall, " + beer + bottles + " of beer. You take one down, pass it around " + (beer - 1) + bottles + " of beer on the wall.";
    else if (beer === 2) {
      sprint = beer + bottles + " of beer on the wall, " + beer + bottles + " of beer. You take one down, pass it around " + (beer - 1) + " bottle of beer on the wall.";

    }
    else {
      bottles = " bottle";
      sprint = beer + bottles + " of beer on the wall, " + beer + bottles + " of beer. You take one down, pass it around " + (beer - 1) + " bottles of beer on the wall.";
    }
    // var sprint = beer + bottles + " of beer on the wall, " + beer + bottles + " of beer. You take one down, pass it around " + (beer - 1) + bottles + " of beer on the wall.";
    console.log(sprint);
    beer--;
}
