import React, { useEffect, useState } from "react";
import { useChannelImage, useVideoById } from "../query/videoQuery";
import YouTube from "react-youtube";
import dayjs from "dayjs";

type Props = {
  id: string;
};

export default function PlayVideo(props: Props) {
  const { data } = useVideoById(props.id);
  const { data: channelInfo } = useChannelImage(data?.items[0].snippet.channelId);
  const [isToggle, setIsToggle] = useState(false);

  function filterSubscribe(sub: string) {
    const subNum = Number(sub);
    if (subNum > 10000) {
      return Math.floor(subNum / 10000) + "만";
    } else if (subNum > 1000) {
      return Math.floor(subNum / 1000) + "천";
    } else return subNum;
  }

  useEffect(() => {
    console.log(data);
  });

  return (
    <>
      <div className='pb-[56.25%] w-full relative'>
        <YouTube
          videoId={props.id}
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", overflow: "hidden" }}
          opts={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className='mt-2 w-full'>
        <p className='font-semibold w-full text-textPrimary text-xl break-words'>{data?.items[0].snippet.title}</p>
        <div className='mt-1 inline-block'>
          <div className='float-left'>
            <img
              src={channelInfo?.items[0].snippet.thumbnails.default.url}
              alt={channelInfo?.id}
              className='rounded-full w-10 h-10 inline'
            />
          </div>
          <div className='ml-1 float-left'>
            <p className='text-textPrimary font-semibold text-base'>{channelInfo?.items[0].snippet.title}</p>
            <p className='text-textSecondary text-xs'>
              구독자 {filterSubscribe(channelInfo?.items[0].statistics.subscriberCount)}명
            </p>
          </div>
        </div>
        <div className='w-full bg-describeBox rounded-lg h-fit p-3 text-sm text-textPrimary'>
          <div className='pb-1'>
            <span>조회수 </span>
            <span className='font-semibold'>{Number(data?.items[0].statistics.viewCount).toLocaleString("ko-KR")}</span>
            <span>회</span>
            <span> </span>
            <span className='font-semibold'>{dayjs(data?.items[0].snippet.publishedAt).format("YYYY.MM.DD")}</span>
          </div>
          <div className={isToggle ? "" : "line-clamp-3"}>
            <span>
              {data?.items[0].snippet.description.split("\n").map((line: string) => {
                return (
                  <>
                    {line} <br />
                  </>
                );
              })}
            </span>
            <br />
            <br />
            <span className='text-blue-600'> {data?.items[0].snippet.tags?.map((o: string) => " #" + o)} </span>
          </div>
          <button className='mt-1' onClick={() => setIsToggle(!isToggle)}>
            {isToggle ? "간략히" : "더보기"}
          </button>
        </div>
      </div>
    </>
  );
}
