import { Play, Pause, Heart, Clock } from "lucide-react";
import { usePlayerStore } from "@/store/playerStore";
import type { Track } from "@/store/playerStore";

interface TrackRowProps {
  track: Track;
  index: number;
}

export function TrackRow({ track, index }: TrackRowProps) {
  const { currentTrack, isPlaying, setTrack, togglePlay, library, addToLibrary, removeFromLibrary } = usePlayerStore();
  const isActive = currentTrack?.id === track.id;
  const isInLibrary = library.some(t => t.id === track.id);

  return (
    <div
      className={`group grid grid-cols-[40px_1fr_80px] items-center gap-4 px-4 py-2 rounded-md transition-colors duration-150 cursor-pointer ${
        isActive ? "bg-elevated" : "hover:bg-elevated/50"
      }`}
      onClick={() => isActive ? togglePlay() : setTrack(track)}
    >
      <div className="flex items-center justify-center">
        <span className={`text-sm text-tabular group-hover:hidden ${isActive ? "text-primary" : "text-muted-foreground"}`}>
          {index + 1}
        </span>
        <span className="hidden group-hover:flex">
          {isActive && isPlaying
            ? <Pause className="h-4 w-4 text-foreground" />
            : <Play className="h-4 w-4 text-foreground" />
          }
        </span>
      </div>

      <div className="flex items-center gap-3 min-w-0">
        <img src={track.thumbnail} alt={track.title} className="h-10 w-10 rounded object-cover" />
        <div className="min-w-0 flex-1">
          <p className={`text-sm truncate ${isActive ? "text-primary" : "text-foreground"}`}>
            {track.title}
          </p>
          <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            isInLibrary ? removeFromLibrary(track.id) : addToLibrary(track);
          }}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 p-1"
        >
          <Heart className={`h-4 w-4 ${isInLibrary ? "fill-primary text-primary" : "text-muted-foreground"}`} />
        </button>
      </div>

      <span className="text-xs text-muted-foreground text-tabular text-right">{track.duration}</span>
    </div>
  );
}
