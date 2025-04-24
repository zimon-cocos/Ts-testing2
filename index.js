var svgCircle = document.getElementById("svgCircle");
var clickShapeBox = document.getElementById("clickShapeBox");
var sect2 = document.getElementById("sect2");
var number = 1;
if (svgCircle && sect2 && clickShapeBox) {
    svgCircle.addEventListener("click", function () {
        console.log("Clicked circle svg");
        if (sect2.style.display === "block") {
            sect2.style.display = "none";
            console.log("Set display to none");
        }
        else {
            sect2.style.display = "block";
            console.log("set display to block");
        }
        console.log("sect2 height is", sect2.offsetHeight);
    });
}
