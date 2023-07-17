import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearch } from "../query/videoQuery";
import { ThreeDots } from "react-loader-spinner";
import ProfileIcon from "../components/ProfileIcon";
import dayjs from "dayjs";
import { decode } from "html-entities";

export default function SearchKeyword() {
  const { q } = useParams();
  const { data, isError, isLoading } = useSearch(q!);
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

  function viewVideo(id: string) {
    navigate(`/video/${id}`);
  }

  return (
    <div className="mx-6 flex flex-col items-center">
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
        <div className="w-full max-w-[830px] flex flex-row mt-3.5 text-textSecondary text-xs" key={o.etag}>
          <div className="w-[300px] h-[170px] mr-3 cursor-pointer" onClick={() => viewVideo(o.id.videoId)}>
            <img src={o.snippet.thumbnails.medium.url} alt={o.snippet.title} className="w-full h-full rounded-lg" />
          </div>
          <div className="w-[calc(100%_-_312px)]">
            <p className="text-textPrimary font-semibold line-clamp-2 cursor-pointer text-lg" onClick={() => viewVideo(o.id.videoId)}>
              {decode(o.snippet.title)}
            </p>
            <p>{filterDate(o.snippet.publishedAt)}전</p>
            <div className="py-3">
              <ProfileIcon id={o.snippet.channelId} />
              <span className="ml-2">{o.snippet.channelTitle}</span>
            </div>
            <div className="line-clamp-2">{o.snippet.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
