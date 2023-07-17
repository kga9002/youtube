import React, { useEffect } from "react";
import PlayVideo from "../components/PlayVideo";
import RelatedVideo from "../components/RelatedVideo";
import { useParams } from "react-router-dom";

export default function VideoById() {
  const { id } = useParams();

  return (
    <>
      <div className="w-full lg:w-3/4 float-left px-3">
        <PlayVideo id={id!} />
      </div>
      <div className="w-full lg:w-1/4 float-left block px-3">
        <RelatedVideo id={id!} />
      </div>
    </>
  );
}
