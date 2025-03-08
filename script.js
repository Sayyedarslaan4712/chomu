// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to gallery items
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// Add confetti effect to button
const loveBtn = document.querySelector('.love-btn');
loveBtn.addEventListener('click', () => {
    // Add confetti library (add this in head tag)
    // <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js"></script>
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});
// Add to script.js
// Floating Particles Effect
function createParticles() {
    const container = document.body;
    for(let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'love-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particle.style.width = Math.random() * 10 + 5 + 'px';
      particle.style.height = particle.style.width;
      container.appendChild(particle);
    }
  }
  createParticles();
  
  // Parallax Effect
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.hero').style.backgroundPositionY = scrolled * 0.5 + 'px';
  });
  
  
  // Add this playlist array
// const songs = [
//     {
//         title: "First Meet Melody",
//         artist: "SayyedArslaan",
//         cover: "assets/covers/1.jpg",
//         file: "assets\songs\bulleya_Sultan_.mp3",
//         duration: "3:45"
//     },
//     {
//         title: "Rainy Day Memories",
//         artist: "Your Name",
//         cover: "assets/covers/2.jpg",
//         file: "assets/songs/song2.mp3",
//         duration: "4:20"
//     },
//     {
//         title: "Forever Theme",
//         artist: "Your Name",
//         cover: "assets/covers/3.jpg",
//         file: "assets/songs/song3.mp3",
//         duration: "3:15"
//     }
// ];

// let currentSongIndex = 0;

// // Initialize playlist
// function initPlaylist() {
//     const playlist = document.getElementById('playlist-items');
    
//     songs.forEach((song, index) => {
//         const playlistItem = document.createElement('div');
//         playlistItem.className = 'playlist-item';
//         playlistItem.innerHTML = `
//             <div class="song-info">
//                 <img src="${song.cover}" alt="${song.title}">
//                 <div>
//                     <div class="song-name">${song.title}</div>
//                     <div class="song-artist">${song.artist}</div>
//                 </div>
//             </div>
//             <span class="song-duration">${song.duration}</span>
//         `;
        
//         playlistItem.addEventListener('click', () => loadSong(index));
//         playlist.appendChild(playlistItem);
//     });
// }

// // Load a song
// function loadSong(index) {
//     currentSongIndex = index;
//     const song = songs[index];
    
//     // Update UI
//     document.getElementById('song-title').textContent = song.title;
//     document.getElementById('current-album-art').src = song.cover;
    
//     // Load audio
//     audio.src = song.file;
//     audio.play();
//     playBtn.innerHTML = '<i class="fas fa-pause"></i>';
//     albumArt.parentElement.classList.add('playing');
    
//     // Highlight active song
//     document.querySelectorAll('.playlist-item').forEach(item => 
//         item.classList.remove('active'));
//     document.querySelectorAll('.playlist-item')[index].classList.add('active');
// }

// // Previous song
// document.getElementById('prev').addEventListener('click', () => {
//     currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//     loadSong(currentSongIndex);
// });

// // Next song
// document.getElementById('next').addEventListener('click', () => {
//     currentSongIndex = (currentSongIndex + 1) % songs.length;
//     loadSong(currentSongIndex);
// });

// // Auto-play next song
// audio.addEventListener('ended', () => {
//     currentSongIndex = (currentSongIndex + 1) % songs.length;
//     loadSong(currentSongIndex);
// });

// // Initialize the player
// initPlaylist();
// loadSong(0); // Load first song

//playlist music player
// Music Player Configuration
const songs = [
    {
        title: "Bulleya",
        artist: "SayyedArslaan",
        cover: "./assets/covers/ars.webp",
        file: "./assets/songs/bulleya_sultan_.mp3",
        duration: "00.58"
    },
    {
        title: "Harry potter", 
        artist: "SayyedArslaan",
        cover: "./assets/covers/jellyfish.jpg",
        file: "./assets/songs/Harry-Potter.mp3",
        duration: "00:30"
    },
    {
        title: "You And Me Always forever",
        artist: "SayyedArslaan",
        cover: "./assets/covers/love.jpg",
        file: "./assets/songs/Alway-forever.mp3",
        duration: "0:30"
    },
    {
        title: "Wanna Be Yours",
        artist: "SayyedArslaan",
        cover: "./assets/covers/couple.jpg",
        file: "./assets/songs/i Wanna Be Yours.mp3",
        duration: "00:39"
    },
    {
        title: "india love",
        artist: "SayyedArslaan",
        cover: "./assets/covers/couple-2.jpg",
        file: "./assets/songs/india-Love.mp3",
        duration: "00:30"
    },
    {
        title: "A thousand years",
        artist: "SayyedArslaan",
        cover: "./assets/covers/couple-3.jpg",
        file: "./assets/songs/a thousand years.mp3",
        duration: "1:07"
    },
    {
        title: "until i found you",
        artist: "SayyedArslaan",
        cover: "./assets/covers/jellyfish-1.jpg",
        file: "./assets/songs/Until I Found You.mp3",
        duration: "00:34"
    },
    {
        title: "die with a smile",
        artist: "SayyedArslaan",
        cover: "./assets/covers/sadm.jpg",
        file: "./assets/songs/Die With A Smile.mp3",
        duration: "00:55"
    },
    {
        title: "somewhere only we know",
        artist: "SayyedArslaan",
        cover: "./assets/covers/n-light.jpg",
        file: "./assets/songs/Somewhere_only_we_know.mp3",
        duration: "00:50"
    }
];

// 🎵 **Player Elements**
const audio = new Audio();
let currentSongIndex = 0;
let isPlaying = false;

// 🎵 **DOM Elements**
const playBtn = document.querySelector('.play-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const progressBar = document.querySelector('.progress-fill');
const currentTimeDisplay = document.querySelector('.current-time');
const durationDisplay = document.querySelector('.duration');
const playlistElement = document.getElementById('playlist');
const albumCover = document.querySelector('.album-cover');
const songTitle = document.querySelector('.song-title');
const artistName = document.querySelector('.artist');

// 🎵 **Initialize Player**
function initPlayer() {
    playlistElement.innerHTML = ""; 

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.className = 'playlist-item';
        li.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <div>
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
            <span>${song.duration}</span>
        `;
        li.addEventListener('click', () => loadSong(index));
        playlistElement.appendChild(li);
    });

    loadSong(0);
}

/// Load and play song
function loadSong(index) {
    currentSongIndex = index;
    const song = songs[index];

    audio.src = song.file;
    audio.load();

    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    albumCover.src = song.cover;

    // JavaScript se duration set karna
    audio.onloadedmetadata = function () {
        durationDisplay.textContent = formatTime(audio.duration);
        document.querySelectorAll('.playlist-item span')[index].textContent = formatTime(audio.duration);
    };

    document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('active'));
    playlistElement.children[index].classList.add('active');

    if (isPlaying) audio.play();
}


// 🎵 **Play/Pause Toggle**
function togglePlay() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play().catch(error => console.error('Playback failed:', error));
    }
    isPlaying = !isPlaying;
    updatePlayButton();
}

// 🎵 **Update Play Button**
function updatePlayButton() {
    playBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
}

// 🎵 **Update Progress Bar**
function updateProgress() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
}

// 🎵 **Format Time**
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// 🎵 **Skip Tracks**
function skipTrack(direction) {
    if (direction === 'next') {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
}

// 🎵 **Event Listeners**
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => skipTrack('prev'));
nextBtn.addEventListener('click', () => skipTrack('next'));
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', () => skipTrack('next'));

// 🎵 **Initialize Player on DOM Load**
document.addEventListener('DOMContentLoaded', initPlayer);
