import type { Track } from "@/store/playerStore";

// Sample tracks using popular royalty-free / creative commons YouTube music
export const moodCategories = [
  {
    title: "Chill Vibes",
    color: "from-emerald-800 to-emerald-950",
    tracks: [
      {
        id: "lofi-1",
        title: "Lofi Hip Hop Radio",
        artist: "ChilledCow",
        thumbnail: "https://img.youtube.com/vi/jfKfPfyJRdk/mqdefault.jpg",
        duration: "∞",
        youtubeUrl: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
      },
      {
        id: "chill-2",
        title: "Coffee Shop Ambience",
        artist: "Relaxing Sounds",
        thumbnail: "https://img.youtube.com/vi/h2zkV-l_TbY/mqdefault.jpg",
        duration: "3:45:00",
        youtubeUrl: "https://www.youtube.com/watch?v=h2zkV-l_TbY",
      },
      {
        id: "chill-3",
        title: "Jazz Lofi Beats",
        artist: "Jazz Hop Café",
        thumbnail: "https://img.youtube.com/vi/kgx4WGK0oNU/mqdefault.jpg",
        duration: "1:22:00",
        youtubeUrl: "https://www.youtube.com/watch?v=kgx4WGK0oNU",
      },
      {
        id: "chill-4",
        title: "Rainy Day Jazz",
        artist: "Cafe Music BGM",
        thumbnail: "https://img.youtube.com/vi/DSGyEsJ17cI/mqdefault.jpg",
        duration: "3:00:00",
        youtubeUrl: "https://www.youtube.com/watch?v=DSGyEsJ17cI",
      },
    ] as Track[],
  },
  {
    title: "Focus & Study",
    color: "from-blue-800 to-blue-950",
    tracks: [
      {
        id: "focus-1",
        title: "Deep Focus Music",
        artist: "Greenred Productions",
        thumbnail: "https://img.youtube.com/vi/lTRiuFIWV54/mqdefault.jpg",
        duration: "11:54:00",
        youtubeUrl: "https://www.youtube.com/watch?v=lTRiuFIWV54",
      },
      {
        id: "focus-2",
        title: "Ambient Study Music",
        artist: "Yellow Brick Cinema",
        thumbnail: "https://img.youtube.com/vi/sjkrrmBnpGE/mqdefault.jpg",
        duration: "3:00:00",
        youtubeUrl: "https://www.youtube.com/watch?v=sjkrrmBnpGE",
      },
      {
        id: "focus-3",
        title: "Classical Music for Studying",
        artist: "HALIDONMUSIC",
        thumbnail: "https://img.youtube.com/vi/mIYzp5rcTvU/mqdefault.jpg",
        duration: "1:30:00",
        youtubeUrl: "https://www.youtube.com/watch?v=mIYzp5rcTvU",
      },
      {
        id: "focus-4",
        title: "Brain Power Focus Music",
        artist: "Greenred Productions",
        thumbnail: "https://img.youtube.com/vi/WPni755-Krg/mqdefault.jpg",
        duration: "2:58:00",
        youtubeUrl: "https://www.youtube.com/watch?v=WPni755-Krg",
      },
    ] as Track[],
  },
  {
    title: "Electronic",
    color: "from-purple-800 to-purple-950",
    tracks: [
      {
        id: "elec-1",
        title: "NCS 24/7 Live Stream",
        artist: "NoCopyrightSounds",
        thumbnail: "https://img.youtube.com/vi/7tNtU5XFwrU/mqdefault.jpg",
        duration: "∞",
        youtubeUrl: "https://www.youtube.com/watch?v=7tNtU5XFwrU",
      },
      {
        id: "elec-2",
        title: "Synthwave Radio",
        artist: "Synth Riders",
        thumbnail: "https://img.youtube.com/vi/4xDzrJKXOOY/mqdefault.jpg",
        duration: "∞",
        youtubeUrl: "https://www.youtube.com/watch?v=4xDzrJKXOOY",
      },
      {
        id: "elec-3",
        title: "Chillstep Mix",
        artist: "MrSuicideSheep",
        thumbnail: "https://img.youtube.com/vi/lP26UCnoH9s/mqdefault.jpg",
        duration: "1:03:00",
        youtubeUrl: "https://www.youtube.com/watch?v=lP26UCnoH9s",
      },
      {
        id: "elec-4",
        title: "Tropical House Mix",
        artist: "Selected.",
        thumbnail: "https://img.youtube.com/vi/q1ULJ92aldE/mqdefault.jpg",
        duration: "1:06:00",
        youtubeUrl: "https://www.youtube.com/watch?v=q1ULJ92aldE",
      },
    ] as Track[],
  },
  {
    title: "Sleep & Relax",
    color: "from-indigo-800 to-indigo-950",
    tracks: [
      {
        id: "sleep-1",
        title: "Sleep Music Delta Waves",
        artist: "Yellow Brick Cinema",
        thumbnail: "https://img.youtube.com/vi/1ZYbU82GVz4/mqdefault.jpg",
        duration: "11:06:00",
        youtubeUrl: "https://www.youtube.com/watch?v=1ZYbU82GVz4",
      },
      {
        id: "sleep-2",
        title: "Rain Sounds for Sleep",
        artist: "Relaxing White Noise",
        thumbnail: "https://img.youtube.com/vi/mPZkdNFkNps/mqdefault.jpg",
        duration: "10:00:00",
        youtubeUrl: "https://www.youtube.com/watch?v=mPZkdNFkNps",
      },
      {
        id: "sleep-3",
        title: "Piano Sleep Music",
        artist: "Soothing Relaxation",
        thumbnail: "https://img.youtube.com/vi/rvaqPPjtxng/mqdefault.jpg",
        duration: "3:08:00",
        youtubeUrl: "https://www.youtube.com/watch?v=rvaqPPjtxng",
      },
      {
        id: "sleep-4",
        title: "Nature Sounds Forest",
        artist: "Relaxing Sounds",
        thumbnail: "https://img.youtube.com/vi/xNN7iTA57jM/mqdefault.jpg",
        duration: "8:00:00",
        youtubeUrl: "https://www.youtube.com/watch?v=xNN7iTA57jM",
      },
    ] as Track[],
  },
];

export const featuredTracks: Track[] = [
  ...moodCategories[0].tracks.slice(0, 2),
  ...moodCategories[1].tracks.slice(0, 2),
  ...moodCategories[2].tracks.slice(0, 2),
];
