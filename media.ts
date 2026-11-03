export type PlaylistKind = "xtream" | "m3u" | "m3u-file";
export type SavedPlaylist = {
  id: string; name: string; kind: PlaylistKind; serverUrl?: string;
  username?: string; playlistUrl?: string; addedAt: number; lastUpdatedAt?: number;
};
export type XtreamCredentials = { serverUrl: string; username: string; password: string };
export type MediaItem = {
  id: string; title: string; url: string; group: string;
  logo?: string; poster?: string; epgId?: string; kind: "live" | "movie" | "series";
  containerExtension?: string; description?: string; year?: string; rating?: string;
  isSeriesContainer?: boolean;
};
export type PlaylistParseResult = { items: MediaItem[]; groups: string[] };
export type SeriesEpisode = { id: string; title: string; url: string; season: string; episode: string; extension?: string; plot?: string };
export type SeriesDetails = { title: string; poster?: string; plot?: string; seasons: { season: string; episodes: SeriesEpisode[] }[] };export type Catalog = { live: MediaItem[]; movies: MediaItem[]; series: MediaItem[]; updatedAt: number };
