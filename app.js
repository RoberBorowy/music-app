const playerLine = [...document.querySelectorAll(".player__line")];
const title = document.querySelector(".player__screen__title");
const audio = document.querySelector(".audio");
const icon = document.getElementById("icon");
const btn = document.querySelector(".btn__play");
const btnBackward = document.querySelector(".btn__backward");
const btnPlay = document.querySelector(".fa-play");
const btnPause = document.querySelector(".fa-pause");
const btnForward = document.querySelector(".btn__forward");

const musicArr = ["mega", "santana", "zayner"];


let musicOnPlay = 2;



loadSong(musicArr[musicOnPlay]);

function loadSong() {
  title.innerHTML = `${musicArr[musicOnPlay].toUpperCase()}.mp3`;
  audio.src = `./audio/${musicArr[musicOnPlay]}.mp3`;
}
function playMusic() {
  loadSong();
  playerLine.forEach((line) => {
    line.classList.remove("stop");
  });

  icon.classList.remove("fa-play");
  icon.classList.add("fa-pause");
  btn.classList.remove("play");
  audio.play();
}

function pauseMusic() {
  playerLine.forEach((line) => {
    line.classList.add("stop");
  });
  icon.classList.add("fa-play");
  icon.classList.remove("fa-pause");
  btn.classList.add("play");
  audio.pause();
}

function forwardMusic() {
  musicOnPlay++;
  if (musicOnPlay > musicArr.length - 1) {
    musicOnPlay = 0;
  }
  playMusic();
}

function backwardMusic(){
  musicOnPlay--;
  if (musicOnPlay < 0) {
    musicOnPlay = musicArr.length - 1;
  }
  playMusic()
}

btnPlay.addEventListener("click", () => {
  const playing = btn.classList.contains("play");

  if (playing) {
    playMusic();
  } else {
    pauseMusic();
  }
});

btnForward.addEventListener("click", forwardMusic);
btnBackward.addEventListener("click", backwardMusic);
