const audio1 = new Audio("audio/audio_1.wav");
const audio2 = new Audio("audio/audio_2.wav");

const bpm = document.querySelector("#bpm");
const h1 = document.querySelector(".title_bpm");
const play = document.querySelector("#play");
let timeSignature = document.querySelector("#timeSignature");
const buttonTimeSignature = document.querySelector("#buttonTimeSignature");

let tempBpm = 60;

let isPlaying = false;

let timer = null;

let count = 0;

const tick2 = () => {
  if (count >= timeSignature.value) {
    count = 0;
  }

  if (count == 0) {
    audio1.play();
    audio1.currentTime = 0;
  } else {
    audio2.play();
    audio2.currentTime = 0;
  }

  count++;
  console.log(count);
};

buttonTimeSignature.addEventListener("click", () => {
  if (isPlaying) {
    buttonTimeSignature.textContent = "On";
    count = 0;
    clearInterval(timer);
  } else {
    buttonTimeSignature.textContent = "Off";
    timer = setInterval(tick2, (60 * 1000) / tempBpm);
  }
  isPlaying = !isPlaying;
});

const tick = () => {
  audio1.play();
  audio1.currentTime = 0;
};

bpm.addEventListener("input", () => {
  tempBpm = bpm.value;
  h1.textContent = tempBpm + " bpm";
  if (isPlaying) {
    clearInterval(timer);
    timer = setInterval(tick, (60 * 1000) / tempBpm);
  }
});
play.addEventListener("click", () => {
  if (isPlaying) {
    play.textContent = "Start";
    clearInterval(timer);
  } else {
    play.textContent = "Stop";
    timer = setInterval(tick, (60 * 1000) / tempBpm);
  }
  isPlaying = !isPlaying;
});
