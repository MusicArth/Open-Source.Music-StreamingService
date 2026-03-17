import { create } from 'zustand';

export interface Track {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  duration: string;
  youtubeUrl: string;
}

interface PlayerState {
  currentTrack: Track | null;
  queue: Track[];
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  shuffle: boolean;
  repeat: 'off' | 'all' | 'one';
  library: Track[];

  setTrack: (track: Track) => void;
  togglePlay: () => void;
  setPlaying: (playing: boolean) => void;
  setVolume: (volume: number) => void;
  setProgress: (progress: number) => void;
  setDuration: (duration: number) => void;
  addToQueue: (track: Track) => void;
  removeFromQueue: (id: string) => void;
  clearQueue: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  addToLibrary: (track: Track) => void;
  removeFromLibrary: (id: string) => void;
  loadLibrary: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  queue: [],
  isPlaying: false,
  volume: 0.7,
  progress: 0,
  duration: 0,
  shuffle: false,
  repeat: 'off',
  library: [],

  setTrack: (track) => {
    const { queue } = get();
    const inQueue = queue.some(t => t.id === track.id);
    set({
      currentTrack: track,
      isPlaying: true,
      progress: 0,
      queue: inQueue ? queue : [...queue, track],
    });
  },

  togglePlay: () => set((s) => ({ isPlaying: !s.isPlaying })),
  setPlaying: (playing) => set({ isPlaying: playing }),
  setVolume: (volume) => set({ volume }),
  setProgress: (progress) => set({ progress }),
  setDuration: (duration) => set({ duration }),

  addToQueue: (track) => set((s) => ({
    queue: s.queue.some(t => t.id === track.id) ? s.queue : [...s.queue, track],
  })),

  removeFromQueue: (id) => set((s) => ({
    queue: s.queue.filter(t => t.id !== id),
  })),

  clearQueue: () => set({ queue: [] }),

  nextTrack: () => {
    const { queue, currentTrack, shuffle, repeat } = get();
    if (queue.length === 0) return;
    const currentIndex = queue.findIndex(t => t.id === currentTrack?.id);

    if (shuffle) {
      const randomIndex = Math.floor(Math.random() * queue.length);
      set({ currentTrack: queue[randomIndex], isPlaying: true, progress: 0 });
      return;
    }

    if (repeat === 'one') {
      set({ progress: 0, isPlaying: true });
      return;
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < queue.length) {
      set({ currentTrack: queue[nextIndex], isPlaying: true, progress: 0 });
    } else if (repeat === 'all') {
      set({ currentTrack: queue[0], isPlaying: true, progress: 0 });
    } else {
      set({ isPlaying: false });
    }
  },

  prevTrack: () => {
    const { queue, currentTrack, progress } = get();
    if (progress > 3) {
      set({ progress: 0 });
      return;
    }
    const currentIndex = queue.findIndex(t => t.id === currentTrack?.id);
    if (currentIndex > 0) {
      set({ currentTrack: queue[currentIndex - 1], isPlaying: true, progress: 0 });
    }
  },

  toggleShuffle: () => set((s) => ({ shuffle: !s.shuffle })),
  toggleRepeat: () => set((s) => ({
    repeat: s.repeat === 'off' ? 'all' : s.repeat === 'all' ? 'one' : 'off',
  })),

  addToLibrary: (track) => {
    set((s) => {
      const lib = s.library.some(t => t.id === track.id)
        ? s.library
        : [...s.library, track];
      localStorage.setItem('obsidian-library', JSON.stringify(lib));
      return { library: lib };
    });
  },

  removeFromLibrary: (id) => {
    set((s) => {
      const lib = s.library.filter(t => t.id !== id);
      localStorage.setItem('obsidian-library', JSON.stringify(lib));
      return { library: lib };
    });
  },

  loadLibrary: () => {
    try {
      const stored = localStorage.getItem('obsidian-library');
      if (stored) set({ library: JSON.parse(stored) });
    } catch {}
  },
}));
