var Audios =
[
    {
        name:"He's a pirate",url:"He's a Pirate.mp3",
        name:"LuxAeterna",url:"Lux Aeterna By Clint Mansell.mp3",
        name:"Jurassic Park",url:"Jurassic Park theme song..mp3",
        name:"Dead Silence",url:"DEAD SILENCE (OFFICIAL THEME SONG) - Charlie Clouser.mp3",
        name:"Star Wars",url:"Star Wars Main Theme (Full).mp3",
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
var SongPlaying = 0;
AudioOn.src=Audios[SongPlaying].url
AudioOn.play()
Next.addEventListener("click",()=>{
    SongPlaying++;
    if(SongPlaying>=Audios.length){
        SongPlaying=0
    }
    AudioOn.src=Audios[SongPlaying].url
    AudioOn.play();
})