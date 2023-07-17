import React, { useEffect } from "react";
import { useChannelImage } from "../query/videoQuery";

type Props = {
  id: string;
};

export default function ProfileIcon(props: Props) {
  const { data } = useChannelImage(props.id);

  return <img src={data?.items[0].snippet.thumbnails.default.url} alt={data?.id} className="rounded-full w-9 h-9 inline" />;
}
