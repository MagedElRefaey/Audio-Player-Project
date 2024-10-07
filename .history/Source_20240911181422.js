var Audios =
[
    
        {name:"Hes a pirate",url:"Audio/He's a Pirate.mp3",Thumbnail:"Thumbnail/he's a pirate.jpeg"},
        {name:"LuxAeterna",url:"Audio/Lux Aeterna By Clint Mansell.mp3",Thumbnail:"Thumbnail/Requiem for a Dream (2000).jpeg"},
        {name:"Jurassic Park",url:"Audio/Jurassic Park theme song..mp3",Thumbnail:"Thumbnail/Jurassic Park Movie  18x28 inches Poster Print.jpeg"},
        {name:"Dead Silence",url:"Audio/DEAD SILENCE (OFFICIAL THEME SONG) - Charlie Clouser.mp3",Thumbnail:"Thumbnail/Dead Silence _ Gritos Mortais, 2007.jpeg"},
        {name:"Star Wars",url:"Audio/Star Wars Main Theme (Full).mp3",Thumbnail:"Thumbnail/Star Wars for Beginning Piano Solo.jpeg"},
    
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
var Song = document.getElementById("Song")
var Thumbnail = document.getElementById("thumbnail")
var Images = document.getElementById("Image")

Play.addEventListener("click",()=>{
    if(AudioOn.paused){
        Play.innerHTML = "⏸"
        AudioOn.play()
    }
    else{
        Play.innerHTML = "▶";
        AudioOn.pause()
    }
    //AudioOn.play() = !AudioOn.play();
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
Song.src=Audios[SongPlaying].url
AudioOn.load();
Images.src = Audios[SongPlaying].Thumbnail

Next.addEventListener("click",()=>{
    SongPlaying++;
    if(SongPlaying>=Audios.length){
        SongPlaying=0
    }
    Song.src=Audios[SongPlaying].url
    AudioOn.load();
    AudioOn.play();
    Images.src = Audios[SongPlaying].Thumbnail
})

Previous.addEventListener("click",()=>{
    SongPlaying--;
    if(SongPlaying<0){
        SongPlaying=Audios.length-1
    }
    Song.src=Audios[SongPlaying].url
    AudioOn.load();
    AudioOn.play();
    Images.src = Audios[SongPlaying].Thumbnail
})