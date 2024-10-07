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
var Time= document.getElementById("TimeNow")
var FullTime = document.getElementById("FullTime")

Play.addEventListener("click",()=>{
    if(AudioOn.paused){
        Play.innerHTML = <i class="fa-solid fa-pause"></i>
        AudioOn.play()
        

    }
    else{
        Play.innerHTML = "▶";
        AudioOn.pause()
    }
    //AudioOn.play() = !AudioOn.play();
})
function GetTimeFormat(Seconds){
    const Minutes = Math.floor(Seconds/60);
    const seconds = Math.floor (Seconds%60);
    return `${Minutes}:${seconds<10 ?'0':''}${seconds}`
}

AudioOn.addEventListener("loadedmetadata",()=>{
    var duration_Audio = GetTimeFormat(AudioOn.duration)
    FullTime.innerHTML = duration_Audio
})

AudioOn.addEventListener("timeupdate",()=>{
    var currentTime = GetTimeFormat(AudioOn.currentTime);
    Time.innerHTML = currentTime;
    PlayTime
})

Pause.addEventListener("click",()=>{
    AudioOn.pause();
})

Stop.addEventListener("click",()=>{
    AudioOn.pause();
    AudioOn.currentTime = 0;
})
Mute.addEventListener("click",()=>{
    if(AudioOn.muted){
        Mute.innerHTML = "🔊"
        AudioOn.muted = false;
    }
    else{
        Mute.innerHTML = "🔇";
        AudioOn.muted = true;
    }
    //AudioOn.muted = !AudioOn.muted;
})

Volume.addEventListener("input",()=>{
    AudioOn.volume = Volume.value;
    if(Volume.value == 0){
        Mute.innerHTML = "🔇";
        AudioOn.muted = true
    }
    else{
        Mute.innerHTML = "🔊";
        AudioOn.muted = false;
    }
    //AudioOn.volume = Volume.value;
    
})
PlayTime.addEventListener("input",()=>{
    const DurationTime  = (PlayTime.value /100)*AudioOn.duration;

    AudioOn.currentTime = DurationTime;
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
    PlayTime.value=0;
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