
const svgCircle = document.getElementById("svgCircle") as HTMLElement | null;
const clickShapeBox = document.getElementById("clickShapeBox") as HTMLElement | null;
const sect2 = document.getElementById("sect2") as HTMLElement | null;

const arrow = document.getElementById("arrow") as HTMLElement | null;
let pointUpSct2 = false;
let pointUpSct3 = false;

const path = document.getElementById("arrowPath") as HTMLElement | null;

const sect3 = document.getElementById("sect3") as HTMLElement | null;
const arrow2 = document.getElementById("arrow2")
const path2 = document.getElementById("arrowPath2") as HTMLElement | null;

const header=document.getElementById("header") as HTMLElement | null;
var prevScrollPos : number = window.scrollY;





if(header)
    {
        var headerBottom : number  = header.offsetTop + header.offsetHeight;
    }
    
    if(header)
    {
        window.onscroll = function()
        {
            var currentScrollPos = window.scrollY;
    
            if(prevScrollPos>currentScrollPos || currentScrollPos<headerBottom)
            {
                header.style.top = "0"
            }
    
            else
            {
                header.style.top = "-150px"
            }
        
            prevScrollPos = currentScrollPos;
        }  
    
    }
    

if(arrow && path && sect2 && clickShapeBox) 
    {
        arrow.addEventListener("click", ()=>
        {
            console.log("click arrow left")
            if(!pointUpSct3)
            {
                if(pointUpSct2)
                {
                    console.log("was pointing up")
                    path.setAttribute("d", "M 1 50 L50 99 L99 50 ")
                    sect2.style.maxHeight = "0"
                    console.log("collapsing")          
                    
                }
                else
                {
                    console.log("was pointing down")           
                    path.setAttribute("d","M1 50 L50 3 L99 50")
                    sect2.style.maxHeight = sect2.scrollHeight + "px";
                    console.log("expanding")             
                }
                pointUpSct2 = !pointUpSct2                  
            }
            else
            {
                console.log("arrow right is blocking me")

            }   


              
        })
            //Animate downward movement of arrow on mouseover
            arrow.addEventListener("mouseover",()=>{
                if(!pointUpSct2 && !pointUpSct3)
                {
                    path.setAttribute("d", "M 1 60 L50 109 L99 60")
                }
            })
            //Animate movement of arrow returning to original position before mouseover
            arrow.addEventListener("mouseout",()=>{
                if(!pointUpSct2)
                {
                    path.setAttribute("d", "M 1 50 L50 99 L99 50")
                }
            })
        
    }

    if(arrow2 && path2 && sect3 && clickShapeBox) 
        {
            arrow2.addEventListener("click", ()=>
            {
                console.log("click arrow right")
                if(!pointUpSct2)
                {
                    if(pointUpSct3)
                    {
                        console.log("was pointing up")
                        path2.setAttribute("d", "M 1 50 L50 99 L99 50")
                        sect3.style.maxHeight = "0"
                        console.log("collapsing")          
                        
                    }
                    else
                    {
                        console.log("was pointing down")           
                        path2.setAttribute("d","M1 50 L50 3 L99 50")
                        sect3.style.maxHeight = sect3.scrollHeight + "px";
                        console.log("expanding")             
                    }
                    pointUpSct3 = !pointUpSct3                       
                }
                else{
                    console.log("arrow left blocking me")
                }
               
        

                     
            })

            //Animate downward movement of arrow on mouseover
            arrow2.addEventListener("mouseover",()=>{
                if(!pointUpSct3 && !pointUpSct2)
                {
                    path2.setAttribute("d", "M 1 60 L50 109 L99 60")
                }
            })
            //Animate movement of arrow returning to original position before mouseover
            arrow2.addEventListener("mouseout",()=>{
                if(!pointUpSct3)
                {
                    path2.setAttribute("d", "M 1 50 L50 99 L99 50")
                }
            })


        }
    
    
    
