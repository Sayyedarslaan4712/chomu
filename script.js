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
const songs = [
    {
        title: "First Meet Melody",
        artist: "Your Name",
        cover: "assets/covers/1.jpg",
        file: "assets/songs/song1.mp3",
        duration: "3:45"
    },
    {
        title: "Rainy Day Memories",
        artist: "Your Name",
        cover: "assets/covers/2.jpg",
        file: "assets/songs/song2.mp3",
        duration: "4:20"
    },
    {
        title: "Forever Theme",
        artist: "Your Name",
        cover: "assets/covers/3.jpg",
        file: "assets/songs/song3.mp3",
        duration: "3:15"
    }
];

let currentSongIndex = 0;

// Initialize playlist
function initPlaylist() {
    const playlist = document.getElementById('playlist-items');
    
    songs.forEach((song, index) => {
        const playlistItem = document.createElement('div');
        playlistItem.className = 'playlist-item';
        playlistItem.innerHTML = `
            <div class="song-info">
                <img src="${song.cover}" alt="${song.title}">
                <div>
                    <div class="song-name">${song.title}</div>
                    <div class="song-artist">${song.artist}</div>
                </div>
            </div>
            <span class="song-duration">${song.duration}</span>
        `;
        
        playlistItem.addEventListener('click', () => loadSong(index));
        playlist.appendChild(playlistItem);
    });
}

// Load a song
function loadSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    
    // Update UI
    document.getElementById('song-title').textContent = song.title;
    document.getElementById('current-album-art').src = song.cover;
    
    // Load audio
    audio.src = song.file;
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    albumArt.parentElement.classList.add('playing');
    
    // Highlight active song
    document.querySelectorAll('.playlist-item').forEach(item => 
        item.classList.remove('active'));
    document.querySelectorAll('.playlist-item')[index].classList.add('active');
}

// Previous song
document.getElementById('prev').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

// Next song
document.getElementById('next').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Auto-play next song
audio.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Initialize the player
initPlaylist();
loadSong(0); // Load first song
