import axios from "axios";
import { useQuery } from "react-query";

const client = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});

export function usePopularVideos() {
  const fetchPopular = () => {
    // return client.get("/videos", { params: { part: "snippet", chart: "mostPopular", regionCode: "KR", maxResults: "48" } }).then((res) => res.data);
    return axios.get("/data/popularList.json").then((res) => res.data);
  };

  return useQuery(["popular"], fetchPopular);
}

export function useChannelImage(id: string) {
  const fetchChannel = (id: string) => {
    // return client.get("/channels", { params: { part: "snippet", id } }).then((res) => res.data);
    return axios.get("/data/channelById.json").then((res) => res.data);
  };
  return useQuery(["channelInfo", id], () => fetchChannel(id));
}

export function useVideoById(id: string) {
  const fetchVideo = (id: string) => {
    // return client.get('/videos',{params : {part:'snippet', id}}).then((res) =>res.data)
    return axios.get("/data/videoById.json").then((res) => res.data);
  };
  return useQuery(["videoById"], () => fetchVideo(id));
}

export function useRelated(id: string) {
  const fetchVideo = (id: string) => {
    // return client.get('/search',{params : {part:'snippet', relatedToVideoId: id, type: "video",maxResults : "8"}}).then((res) =>res.data)
    return axios.get("/data/relatedVideo.json").then((res) => res.data);
  };
  return useQuery(["relatedVideo"], () => fetchVideo(id));
}
