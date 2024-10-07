var Audios =
[
    {
        "LuxAeterna":
    }
]

var AudioOn = document.getElementById("audio")
var Play = document.getElementById("play")
var Pause = document.getElementById("pause")
var Stop = document.getElementById("stop")
var Mute = document.getElementById("mute")
var Next = document.getElementById("next")
var Previous = document.getElementById("previous")
var Volume = document.getElementById("volume")

Play.addEventListener("click",()=>{
    AudioOn.play();
})

Pause.addEventListener("click",()=>{
    AudioOn.pause();
})

Stop.addEventListener("click",()=>{
    AudioOn.pause();
    AudioOn.currentTime = 0;
})
Mute.addEventListener("click",()=>{
    if(!AudioOn.muted){
        Mute.innerHTML = "🔊"
    }
    else{
        Mute.innerHTML = "🔇";
    }
    AudioOn.muted = !AudioOn.muted;
})

