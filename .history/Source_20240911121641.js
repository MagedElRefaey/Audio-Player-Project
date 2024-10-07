var Audios =
[
    {
        "LuxAeterna":"Lux Aeterna By Clint Mansell.mp3",
        "Jurassic Park":"Jurassic Park theme song..mp3",
        "Dead Silence":"DEAD SILENCE (OFFICIAL THEME SONG) - Charlie Clouser.mp3",
        "Star Wars":"Star Wars Main Theme (Full).mp3",
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
var PlayTime = document.getElementById("PlayTime")

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

Volume.addEventListener("input",()=>{
    AudioOn.volume = Volume.value;
})
PlayTime.addEventListener("input",()=>{
    AudioOn.currentTime = PlayTime.value;
})

