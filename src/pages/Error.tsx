import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <section className="relative z-10   h-screen w-screen">
        <div className="h-full w-full flex items-center">
          <div className="text-center w-full p-10 bg-red-500">
            <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">404</h2>
            <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">존재하지 않는 페이지 입니다 🤔</h4>
            <a href="/" className="inline-block px-8 py-3 text-base font-semibold text-center text-white transition border border-white rounded-lg hover:bg-white hover:text-red-500">
              Go to Home
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
