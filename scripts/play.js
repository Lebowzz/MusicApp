const playButton = document.getElementById("play-pause");
const icon = document.getElementById("play-pause-icon");
const audio = document.getElementById("audio");
const image = document.getElementById("playing-img");
const songName = document.getElementById("playing-song-name");
const songArtist = document.getElementById("playing-song-artist");
const timeBar = document.getElementById("timeBar");

let previousSongs = "";
let song;
let counter = 0;

class music {
  constructor(audio, name, artist, image) {
    this.audio = audio;
    this.name = name;
    this.artist = artist;
    this.image = image;
  }
}

let playedSongs = [];
let nextSongs = [];
let isPlaying = false;

// PLAY WHEN PLAY BUTTON ON IMAGE IS CLICKED
function Music(audioSource, name, artist, imgSource) {
  song = new music(audioSource, name, artist, imgSource);

  if (previousSongs.name != song.name && previousSongs.artist != song.artist) {
    playedSongs.push(song);
  }
  image.src = song.image;
  audio.src = song.audio;
  songName.innerHTML = song.name;
  songArtist.innerHTML = song.artist;
  previousSongs = song;
  pauseAudio();

  if (!isPlaying) {
    playAudio();
  } else {
    pauseAudio();
  }
}

// ADDS THE NEXT SONG TO THE QUEUE
function nextMusic(audioSource, name, artist, imgSource) {
  song = new music(audioSource, name, artist, imgSource);
  nextSongs.push(song);
  UpdateQueue(); // UPDATING THE QUEUE ON EACH ADD
}

// PAUSE AND PLAY WHEN PLAY BUTTON CLICKED
playButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (!isPlaying) {
    playAudio();
  } else {
    pauseAudio();
  }
});

// PAUSE AND PLAY
function playAudio() {
  audio.play();
  icon.src = "images/images-app/pause.png";
  isPlaying = true;
}
function pauseAudio() {
  audio.pause();
  icon.src = "images/images-app/play.png";
  isPlaying = false;
}

// PLAYS THE PREVIOUS/NEXT SONG
function previousSong() {
  if (playedSongs.length > 0) {
    let previous = playedSongs[playedSongs.length - 1];
    image.src = previous.image;
    audio.src = previous.audio;
    songName.innerHTML = previous.name;
    songArtist.innerHTML = previous.artist;
    playedSongs.pop();
    UpdateQueue();
  }
  audio.play();
}
function nextSong() {
  if (nextSongs.length > 0) {
    let next = nextSongs[0];
    image.src = next.image;
    audio.src = next.audio;
    songName.innerHTML = next.name;
    songArtist.innerHTML = next.artist;
    nextSongs.shift();
    playedSongs.push(next);
    UpdateQueue();
  }
  audio.play();
}

// SHOWING AND HIDING THE PLAY AND ADD TO QUEUE BUTTONS
function ShowActions(input) {
  gsap.to(`.c${input} img`, {
    duration: 0.25,
    opacity: 0.8,
    ease: "circ.out",
  });
  gsap.to(`.c${input} button`, {
    y: -120,
    duration: 0.25,
    ease: "circ.out",
  });
  gsap.to(`.c${input} button`, {
    delay: 0.15,
    visibility: "visible",
  });
}
function HideActions(input) {
  gsap.to(`.c${input} img`, {
    duration: 0.25,
    opacity: 1,
    ease: "circ.out",
  });
  gsap.to(`.c${input} button`, {
    y: -80,
    duration: 0.25,
    ease: "circ.out",
  });
  gsap.to(`.c${input} button`, {
    delay: 0.15,
    visibility: "hidden",
  });
}

const queue = document.getElementById("queue-showcase");
const nextBoxImage = document.getElementById("next-image");
const nextBoxSongName = document.getElementById("next-song-name");
const nextBoxArtistName = document.getElementById("next-artist-name");
function UpdateQueue() {
  let songs = "";
  for (let i = 0; i < nextSongs.length; i++) {
    songs += `
        <div class="queue-song">
        <img src=${nextSongs[i].image} class="queue-img" /> 
        <div class="queue-song-info">
        <p>${nextSongs[i].name}</p>
        <p>${nextSongs[i].artist} </p>
        </div>
        </div>
        <br /><br />`;
  }
  if (songs.length === 0) {
    queue.innerHTML = "Oh no! Looks like your queue is empty.";
  } else {
    queue.innerHTML = songs;
  }

  if (nextSongs.length > 0) {
    nextBoxImage.src = nextSongs[0].image;
    nextBoxSongName.innerHTML = nextSongs[0].name;
    nextBoxArtistName.innerHTML = nextSongs[0].artist;
  }
}

let queueShowCounter = 0;

// SHOW WHATS IN THE QUEUE
function ShowQueue() {
  if (queueShowCounter % 2 === 0) {
    gsap.to(".show-queue", {
      duration: 1,
      ease: "circ.out",
      visibility: "visible",
      y: -75,
    });
    gsap.to(".queue button:nth-child(1) img", {
      duration: 1,
      ease: "circ.out",
      opacity: 0.7,
    });
  } else {
    gsap.to(".show-queue", {
      duration: 1,
      ease: "circ.out",
      visibility: "hidden",
      y: 75,
    });
    gsap.to(".queue button:nth-child(1) img", {
      duration: 1,
      ease: "circ.out",
      opacity: 1,
    });
  }
  queueShowCounter++;
}

audio.addEventListener("loadedmetadata", function () {
  timeBar.max = audio.duration;
});

audio.addEventListener("timeupdate", function () {
  timeBar.value = audio.currentTime;
});

timeBar.addEventListener("change", function () {
  audio.currentTime = timeBar.value;
});
setInterval(function () {
  if (audio.currentTime === audio.duration) {
    nextSong();
  }
}, 1000);
