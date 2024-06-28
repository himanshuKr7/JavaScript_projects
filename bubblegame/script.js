let rn;
let timer = 60;
let score=0;
function makebubble()
{
    let clutter="";
     for (let i = 1; i <= 108; i++)
{ 
    rn = Math.floor(Math.random() * 10 + 1);
    clutter+=`<div class="bubble">${rn}</div>`
}
document.querySelector("#pnbm").innerHTML = clutter;
}
function scoreincreaser()
{
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}

function showtimner()
{ 
   const timeint= setInterval(function(){
       if (timer > 0)
       {
           timer--;
           document.querySelector("#timeint").textContent = timer;
       }
       else {
           clearInterval(timeint);
           document.querySelector("#pnbm").innerHTML = `<h1 id="center">Game Over</h1>`;
       }
    },1000)
}

function getnewhit()
{
     rn = Math.floor(Math.random() * 10 +1);
    document.querySelector("#hitval").textContent = rn;
}

document.querySelector("#pnbm").addEventListener("click", function (e) {
    let num = Number(e.target.textContent);
    if(num === rn)
    {
        scoreincreaser();
        makebubble();
        getnewhit(); 
    }
})
showtimner();
makebubble(); 
getnewhit();

//jispe bhi click karoge wo element par event raise hoga aur event listener na milne par event element ke parent par listenr dundehga or event parent ke parent par listner dhundega

