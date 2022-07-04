console.log("Welcome to Spotify")
// Initialize the variables
let songIndex=0;
let audioElement = new Audio("1.mp3");
audioElement.play();
let masterPlay = document.getElementById("play");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
letSongs=[
    {songName : "ratan-lambiya",filePath: "1.mp3", coverPath: ""},
    {songName : "ratan-lambiya",filePath: "1.mp3", coverPath: ""},
    {songName : "ratan-lambiya",filePath: "1.mp3", coverPath: ""},
    {songName : "ratan-lambiya",filePath: "1.mp3", coverPath: ""},
    {songName : "ratan-lambiya",filePath: "1.mp3", coverPath: ""}
]
//Handle play pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
    }
})
// Listen to events
audioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate")
})
