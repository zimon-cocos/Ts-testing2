const spark = document.getElementById("spark") as HTMLElement | null;
const popoutNavbar = document.getElementById("popoutNavbar") as HTMLElement | null;
const kategVeci = document.getElementById("kategVeci") as HTMLElement | null;
const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;

const svgCircle = document.getElementById("svgCircle") as HTMLElement | null;
const sect2 = document.getElementById("sect2") as HTMLElement | null;



var number: number = 1



if(svgCircle && sect2)
{
    svgCircle.addEventListener("click",() =>
    {
        console.log("Clicked circle svg")
        sect2.classList.toggle("expanded")
        sect2.style.height = "400px"
        console.log("sect2 height is",sect2.offsetHeight)
    }
    )
}

