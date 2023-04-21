
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",handleClicked)


function handleClicked()
{
    var buttonInnerHTML=this.innerHTML;
    switch (buttonInnerHTML) {
        case "w":
            var audio=new Audio("sound/Pa.m4a")
            audio.play()
            break;

        case "a":
            var audio=new Audio("sound/Dha.m4a")
            audio.play()
            break;

        case "s":
            var audio=new Audio("sound/Ni.m4a")
            audio.play()
            break;

        case "d":
            var audio=new Audio("sound/Sa.m4a")
            audio.play()
            break;

        case "j":
            var audio=new Audio("sound/Re.m4a")
            audio.play()
            break;

        case "k":
            var audio=new Audio("sound/Ga.m4a")
            audio.play()
            break;

        case "l":
            var audio=new Audio("sound/Ma.m4a")
            audio.play()
            break;
    
        default:console.log(buttonInnerHTML)
            break;
    }
    makesound(buttonInnerHTML)
    buttonClick(buttonInnerHTML)
}


document.addEventListener("keydown",function(e){makesound(e.key)})

function makesound(key)
{
    switch (key) {
        case "w":
            var audio=new Audio("sound/Pa.m4a")
            audio.play()
            break;

        case "a":
            var audio=new Audio("sound/Dha.m4a")
            audio.play()
            break;

        case "s":
            var audio=new Audio("sound/Ni.m4a")
            audio.play()
            break;

        case "d":
            var audio=new Audio("sound/Sa.m4a")
            audio.play()
            break;

        case "j":
            var audio=new Audio("sound/Re.m4a")
            audio.play()
            break;

        case "k":
            var audio=new Audio("sound/Ga.m4a")
            audio.play()
            break;

        case "l":
            var audio=new Audio("sound/Ma.m4a")
            audio.play()
            break;
    
        default:console.log(buttonInnerHTML)
            break;
            
    }
    buttonClick(key)
}

function buttonClick(clickedButton)
{
    var currentButton=document.querySelector("."+clickedButton)
    currentButton.classList.add("pressed")
    setTimeout(function(){currentButton.classList.remove("pressed")},100)
}