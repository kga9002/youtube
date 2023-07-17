export interface VideoData {
  contentDetails: object;
  etag: string;
  id: string;
  kind: string;
  snippet: VideoSnippet;
  statistics: Statistics;
}

export interface VideoSnippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  defaultLanguage: string;
  description: string;
  liveBroadcastContent: string;
  localized: object;
  publishedAt: string;
  tags: Array<string>;
  thumbnails: Thumbnails;
  title: string;
}

export interface Thumbnails {
  default: Photo;
  high: Photo;
  maxres: Photo;
  medium: Photo;
  standard: Photo;
}
export interface Photo {
  height: number;
  width: number;
  url: string;
}

export interface Statistics {
  commentCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}
