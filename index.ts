
const svgCircle = document.getElementById("svgCircle") as HTMLElement | null;
const clickShapeBox = document.getElementById("clickShapeBox") as HTMLElement | null;
const sect2 = document.getElementById("sect2") as HTMLElement | null;

const arrow = document.getElementById("arrow") as HTMLElement | null;
let pointUp = false;

const path = document.getElementById("arrowPath") as HTMLElement | null;




if(svgCircle && sect2 && clickShapeBox)
{

    svgCircle.addEventListener("click",() =>
    {

        console.log("Clicked circle svg")
        if(sect2.offsetHeight > 10)
        {
            sect2.style.maxHeight = "0"
            console.log("collapsing")
        }
        else
        {
            sect2.style.maxHeight = sect2.scrollHeight + "px";
            console.log("expanding")
        }
        console.log("sect2 height is",sect2.offsetHeight)


    }
    )
}

if(arrow && path && sect2 && clickShapeBox) 
    {
        arrow.addEventListener("click", ()=>
        {
            console.log("click")
            pointUp = !pointUp
           
    
            if(pointUp)
            {
                console.log("was pointing up")
                path.setAttribute("d", "M 100 50 L150 100 L200 50")
                sect2.style.maxHeight = "0"
                console.log("collapsing")          
                
            }
            else
            {
                console.log("was pointing down")           
                path.setAttribute("d","M100 50 L150 0 L200 50")
                sect2.style.maxHeight = sect2.scrollHeight + "px";
                console.log("expanding")             
            }
    
        })
    }
