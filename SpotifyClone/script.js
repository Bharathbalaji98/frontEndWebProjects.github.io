/*To Do:
1. 'Play' and 'Pause' songs from individual song items.
2. Link the master play button to individual song item play button.
3. Add time duration at the bottom next to progress bar.- DONE
4. Make the webpage responsive to the mobile page.-
*/
//Initialize the variables;
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("playinggif");
let songName = Array.from(document.getElementsByClassName("songName"));
//let songItemButtons = Array.from(document.getElementsByClassName("songItemPlay"));
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songInfo = document.getElementById("songInfo");
let next5s = document.getElementById("Next");
let previous5s = document.getElementById("Previous");
let songs = [
    {songName:"Harium Haranum",filePath:"assets/songs/1.mp3"},
    {songName:"Tandava strotram",filePath:"assets/songs/2.mp3"},
    {songName:"Nadaswaram",filePath:"assets/songs/3.mp3"},
    {songName:"Aaditya Hridayam",filePath:"assets/songs/4.mp3"},
    {songName:"Akhilandeswari - Dwijawanti",filePath:"assets/songs/5.mp3"},
    {songName:"Rama chandra pahi - Poornachandrika",filePath:"assets/songs/6.mp3"},
    {songName:"Mamava Pattabhirama - Manirangu",filePath:"assets/songs/7.mp3"},
    {songName:"Kuri ondrum illai",filePath:"assets/songs/8.mp3"},
    {songName:"Jagaodharana",filePath:"assets/songs/9.mp3"},
    {songName:"Yakkadi manusha janmam",filePath:"assets/songs/10.mp3"},
    {songName:"Bantu reeti - Hamsadhwani",filePath:"assets/songs/11.mp3"}
]
let audioElement = new Audio(songs[0].filePath);
let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");

songInfo.textContent = songs[0].songName;;
songName.forEach((element,i) => {
    element.textContent = songs[i].songName;
});


//Handle pause play
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.textContent = "Pause";
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.textContent = "Play";
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    //update progress bar.
    progress = (audioElement.currentTime/audioElement.duration)*100;
    progressBar.value = progress;
    progressTime = Math.round(audioElement.currentTime/60 * 100)/100;
    startTime.innerHTML = `${progressTime}`;
    remainingTime = Math.round((audioElement.duration)/60 * 100)/100;
    endTime.innerHTML = remainingTime;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration)/100;
})


songItem.forEach(playSong);

function playSong(element){
    element.addEventListener("click",(e)=>{
        songIndex = parseInt(e.target.id);
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        songInfo.textContent = songs[songIndex].songName;
        audioElement.play();
        masterPlay.textContent = "Pause";
        gif.style.opacity = 1;
    })
}

next5s.addEventListener('click',()=>{
    progress = (audioElement.currentTime/audioElement.duration)*100;
    progressBar.value = progress + 5;
    audioElement.currentTime += 5;
})
previous5s.addEventListener('click',()=>{
    progress = (audioElement.currentTime/audioElement.duration)*100;
    progressBar.value = progress - 5;
    audioElement.currentTime -= 5;
})

/* Code to navigate to previous song.
    if(songIndex>=songs.length){
        songIndex = 0;
    }
    else{
        songIndex+=1;
    }
    audioElement.currentTime = 0;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    masterPlay.textContent = "Pause"
    songInfo.textContent = songs[songIndex].songName;
    if(!audioElement.paused){
        gif.style.opacity = 1;
    }
*/
/* Code to navigate to next song
previous5s.addEventListener('click',()=>{
if(songIndex<0){
    songIndex = songs.length - 1;
}
else{
    songIndex-=1;
}
audioElement.currentTime = 0;
audioElement.src = songs[songIndex].filePath;
audioElement.play();
masterPlay.textContent = "Pause"
songInfo.textContent = songs[songIndex].songName;
if(!audioElement.paused){
    gif.style.opacity = 1;
}
*/

// Play and Pause button on to song item
/*
const makeAllPlay = () =>{
    songItemButtons.forEach(element=>{
        element.textContent = "Play";
    })
}
songItemButtons.forEach(element=>{
    element.addEventListener("click",e=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        songInfo.textContent = songs[songIndex].songName;
        audioElement.play();
        e.target.textContent = "Pause";
        masterPlay.textContent = "Pause";
        gif.style.opacity = 1;
    },e=>{
        audioElement.pause();
        e.target.textContent = "Play";
        masterPlay.textContent = "Play";
        gif.style.opacity = 0;
    })
})
*/
