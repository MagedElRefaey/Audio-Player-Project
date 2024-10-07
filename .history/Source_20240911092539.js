var AudioOn = document.getElementById("audio")
var Play = document.getElementById("play")
var Pause = document.getElementById("pause")
var mute = document.getElementById("mute")
var Next = document.getElementById("next")
var Previous = document.getElementById("previous")


Play.addEventListener("click",()=>{
    AudioOn.play();
})

Pause.addEventListener("click",()=>{
    AudioOn.pause();
})
