import { ListMusic, X } from "lucide-react";
import { usePlayerStore } from "@/store/playerStore";
import { TrackRow } from "@/components/TrackRow";

const QueuePage = () => {
  const { queue, currentTrack, clearQueue, removeFromQueue } = usePlayerStore();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">Queue</h1>
        {queue.length > 0 && (
          <button
            onClick={clearQueue}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            Clear queue
          </button>
        )}
      </div>

      {currentTrack && (
        <section className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-4">
            Now Playing
          </h3>
          <TrackRow track={currentTrack} index={0} />
        </section>
      )}

      {queue.length > 0 ? (
        <section>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-4">
            Next Up
          </h3>
          <div className="space-y-0.5">
            {queue
              .filter(t => t.id !== currentTrack?.id)
              .map((track, i) => (
                <div key={track.id} className="group relative">
                  <TrackRow track={track} index={i + 1} />
                  <button
                    onClick={() => removeFromQueue(track.id)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  >
                    <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>
              ))}
          </div>
        </section>
      ) : (
        <div className="text-center py-20">
          <ListMusic className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">Your queue is empty</p>
          <p className="text-sm text-muted-foreground/60 mt-1">Add songs from Home or Search</p>
        </div>
      )}
    </div>
  );
};

export default QueuePage;
