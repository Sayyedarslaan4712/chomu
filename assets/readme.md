assets/
├── covers/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── 3.jpg
└── songs/
    ├── song1.mp3
    ├── song2.mp3
    └── song3.mp3


    How to Add More Songs:

Add entries to the songs array:
const songs = [
    // Add new entries like this
    {
        title: "New Song Name",
        artist: "Your Name",
        cover: "path/to/cover.jpg",
        file: "path/to/song.mp3",
        duration: "3:30"
    },
    // ... previous songs
];

in js