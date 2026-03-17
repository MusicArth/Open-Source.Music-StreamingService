import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { usePlayerStore } from "@/store/playerStore";
import type { Track } from "@/store/playerStore";

interface TrackCardProps {
  track: Track;
  index?: number;
}

export function TrackCard({ track, index = 0 }: TrackCardProps) {
  const { currentTrack, isPlaying, setTrack, togglePlay } = usePlayerStore();
  const isActive = currentTrack?.id === track.id;

  const handleClick = () => {
    if (isActive) {
      togglePlay();
    } else {
      setTrack(track);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15, delay: index * 0.02 }}
      className="group relative bg-card hover:bg-elevated rounded-lg p-4 cursor-pointer transition-colors duration-150"
      onClick={handleClick}
    >
      <div className="relative mb-4">
        <img
          src={track.thumbnail}
          alt={track.title}
          className="w-full aspect-square object-cover rounded-md"
        />
        <motion.button
          initial={false}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-2 right-2 h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150"
          style={{ opacity: isActive ? 1 : undefined }}
        >
          {isActive && isPlaying ? (
            <Pause className="h-5 w-5 text-primary-foreground" />
          ) : (
            <Play className="h-5 w-5 text-primary-foreground ml-0.5" />
          )}
        </motion.button>
      </div>
      <p className={`text-sm font-semibold truncate ${isActive ? "text-primary" : "text-foreground"}`}>
        {track.title}
      </p>
      <p className="text-xs text-muted-foreground truncate mt-1">{track.artist}</p>
    </motion.div>
  );
}
