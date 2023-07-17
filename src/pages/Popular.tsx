import React, { useEffect } from "react";
import { usePopularVideos } from "../query/videoQuery";
import { VideoData } from "../query/type";
import ProfileIcon from "../components/ProfileIcon";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function Popular() {
  const { data, isLoading, isError } = usePopularVideos();
  const navigate = useNavigate();

  // function filterViewCount(count: string) {
  //   const countNum = Number(count);
  //   if (countNum > 10000) {
  //     return Math.floor(countNum / 10000) + "만";
  //   } else if (countNum > 1000) {
  //     return Math.floor(countNum / 1000) + "천";
  //   } else return countNum;
  // }

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
    <div className="px-11">
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
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-4">
        {data?.items.map((o: VideoData) => (
          <li key={o.id}>
            <img src={o.snippet.thumbnails.medium.url} className="rounded-xl w-full cursor-pointer" alt={o.id} onClick={() => viewVideo(o.id)} />
            <div className="mt-3 w-full">
              <div className="float-left w-fit pr-2">
                <ProfileIcon id={o.snippet.channelId} />
              </div>
              <div className="float-left w-5/6 pr-3">
                <p className="text-base text-textPrimary line-clamp-2 cursor-pointer" onClick={() => viewVideo(o.id)}>
                  {o.snippet.title}
                </p>
                <p className="text-sm font-semibold text-textSecondary mt-1">{o.snippet.channelTitle}</p>
                <p className="text-sm text-textSecondary">{filterDate(o.snippet.publishedAt)} 전</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
