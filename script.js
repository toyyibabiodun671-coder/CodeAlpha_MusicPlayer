const tracks = [
  {
    title: "Amber Static",
    artist: "The Nightloop",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://picsum.photos/seed/amber-static/400/400"
  },
  {
    title: "Slow Frequencies",
    artist: "Marin Isles",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://picsum.photos/seed/slow-freq/400/400"
  },
  {
    title: "Glass Corridor",
    artist: "Nova & Reeve",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://picsum.photos/seed/glass-corridor/400/400"
  },
  {
    title: "Low Tide Radio",
    artist: "The Nightloop",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cover: "https://picsum.photos/seed/low-tide/400/400"
  },
];

const audio = document.getElementById('audio');
const disc = document.getElementById('disc');
const cover = document.getElementById('cover');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const seek = document.getElementById('seek');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volume = document.getElementById('volume');

let currentIndex = 0;
let isPlaying = false;

const ICON_PLAY = '<path d="M7 4l14 8-14 8V4z" fill="currentColor"/>';
const ICON_PAUSE = '<path d="M6 4h4v16H6zM14 4h4v16h-4z" fill="currentColor"/>';

function formatTime(sec){
  if(!isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2,'0');
  return `${m}:${s}`;
}

function loadTrack(index, autoplay){
  currentIndex = index;
  const t = tracks[index];
  audio.src = t.src;
  cover.src = t.cover;
  trackTitle.textContent = t.title;
  trackArtist.textContent = t.artist;
  if(autoplay) play();
}

function play(){
  audio.play();
  isPlaying = true;
  playIcon.innerHTML = ICON_PAUSE;
  disc.classList.add('spinning');
}

function pause(){
  audio.pause();
  isPlaying = false;
  playIcon.innerHTML = ICON_PLAY;
  disc.classList.remove('spinning');
}

playBtn.addEventListener('click', () => isPlaying ? pause() : play());

function nextTrack(){
  loadTrack((currentIndex + 1) % tracks.length, true);
}
function prevTrack(){
  if(audio.currentTime > 3){ audio.currentTime = 0; return; }
  loadTrack((currentIndex - 1 + tracks.length) % tracks.length, true);
}

nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);

audio.addEventListener('timeupdate', () => {
  if(!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  seek.value = pct;
  seek.style.setProperty('--fill', pct + '%');
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', () => {
  nextTrack();
});

seek.addEventListener('input', () => {
  if(audio.duration) audio.currentTime = (seek.value / 100) * audio.duration;
});

volume.addEventListener('input', () => {
  audio.volume = volume.value / 100;
  volume.style.setProperty('--fill', volume.value + '%');
});

audio.volume = volume.value / 100;
loadTrack(0, false);