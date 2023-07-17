import React, { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useRelated } from "../query/videoQuery";
import { VideoData } from "../query/type";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
};

export default function RelatedVideo(props: Props) {
  const { data, isLoading, isError } = useRelated(props.id);
  const navigate = useNavigate();

  function filterDate(date: string) {
    const publish = dayjs(date);
    const today = dayjs();
    const minute = today.diff(publish, "minute");
    if (minute < 60) {
      return minute + "분";
    } else if (minute <= 1440) {
      return Math.floor(minute / 60) + "시간";
    } else if (minute <= 20160) {
      return Math.floor(minute / 1440) + "일";
    } else if (minute <= 43200) {
      return Math.floor(minute / 20160) + "주";
    } else if (minute < 518400) {
      return Math.floor(minute / 43200) + "개월";
    } else return Math.floor(minute / 518400) + "년";
  }

  return (
    <>
      {isLoading && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ThreeDots height="80" width="80" radius="9" color="#FF0000" ariaLabel="three-dots-loading" visible={true} />
        </div>
      )}
      {isError && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span>데이터를 불러오는중 에러 발생😥</span>
        </div>
      )}
      {data?.items.map((o: any) => (
        <div className="w-full flex flex-row mt-2">
          <div className="mr-2 w-[168px] h-[88px] cursor-pointer" onClick={() => navigate(`/video/${o.id.videoId}`)}>
            <img src={o.snippet.thumbnails.medium.url} alt={o.etag} className="w-full h-full rounded-lg" />
          </div>
          <div className="w-[calc(100%_-_176px)]">
            <p onClick={() => navigate(`/video/${o.id.videoId}`)} className="text-textPrimary font-semibold text-sm line-clamp-2 cursor-pointer">
              {o.snippet.title}
            </p>
            <p className="text-textSecondary text-xs">{o.snippet.channelTitle}</p>
            <p className="text-textSecondary text-xs">{filterDate(o.snippet.publishedAt)} 전</p>
          </div>
        </div>
      ))}
    </>
  );
}
