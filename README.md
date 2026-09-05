# Music Player

A clean, white/blue-themed music player built for the **CodeAlpha Frontend Development Internship (Task 4)**.

## Features
- Play / pause / next / previous controls
- Spinning disc animation that plays only while audio is playing
- Seekable progress bar with live current time / duration
- Volume control
- Auto-advances to the next track when a song ends
- Clean, responsive white/blue UI matching the rest of the internship projects

## Tech Stack
- HTML5 (`<audio>` element)
- CSS3 (custom range sliders, keyframe animation)
- Vanilla JavaScript

## File Structure
```
CodeAlpha_MusicPlayer/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Running Locally
Open `index.html` in any browser. Requires an internet connection since the demo
tracks and cover art are loaded from external URLs (see below).

## Customizing the Playlist
Tracks are defined as an array in `script.js`:
```js
{ title: "Amber Static", artist: "The Nightloop", src: "...", cover: "..." }
```
Replace `src` with your own audio files (local `.mp3` paths work too) and `cover`
with your own artwork.

## Credits
- Demo audio: [SoundHelix](https://www.soundhelix.com/) sample tracks
- Placeholder cover art: [picsum.photos](https://picsum.photos)

## Commit History (suggested)
```
git commit -m "Add music player markup with controls and progress bar"
git commit -m "Style music player with white/blue theme and spinning disc"
git commit -m "Implement playback, seek, and volume logic for music player"
git commit -m "Add README documentation for music player"
```

---
*Built as part of the CodeAlpha Frontend Development Internship.*