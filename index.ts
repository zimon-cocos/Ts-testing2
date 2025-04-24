
const svgCircle = document.getElementById("svgCircle") as HTMLElement | null;
const clickShapeBox = document.getElementById("clickShapeBox") as HTMLElement | null;
const sect2 = document.getElementById("sect2") as HTMLElement | null;



var number: number = 1



if(svgCircle && sect2 && clickShapeBox)
{
    svgCircle.addEventListener("click",() =>
    {
        console.log("Clicked circle svg")
        if(sect2.style.display ==="block")
        {
            sect2.style.display = "none"
            console.log("Set display to none")
        }
        else
        {
            sect2.style.display = "block"
            sect2.style.height = "600px"
            console.log("set display to block")
        }
        console.log("sect2 height is",sect2.offsetHeight)


    }
    )
}

