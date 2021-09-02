const music=document.querySelector("audio");
const play=document.getElementById('play');
const img=document.querySelector('img');
const title=document.getElementById('title');
const artist=document.getElementById('artist');
const prev=document.getElementById('prev');
const next=document.getElementById('next'); 
const songs=[{
    name:"let-me-down",
    title:"POP",
    artist:"Alex Benjamin",
},{
    name:"lose-yourself",
    title:"RAP",
    artist:"EMINEM",
},{
    name:"Old-town-road",
    title:"CHILL",
    artist:"Lil Nas X",
}
];

let isPlaying=false;
//for play function
const playMusic=()=>{
    music.play();
    isPlaying=true;
    play.classList.replace('fa-play','fa-pause');
    img.classList.add("anime");
};
//for pause function
const pauseMusic=()=>{
    music.pause(); 
    isPlaying=false;
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove("anime");
};


play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();
    } else {
        playMusic();
    }
})

// changing the music

const loadSongs=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src=`music/${songs.name}.mp3`;
    img.src=`image/${songs.name}.jpg`;
};

let songIndex=0;
const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
};
const prevSong=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
};

next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);
