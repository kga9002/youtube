import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Error from "./pages/Error";
import Popular from "./pages/Popular";
import VideoById from "./pages/VideoById";
import SearchKeyword from "./pages/SearchKeyword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        // 메인 popularlist
        index: true,
        element: <Popular />,
      },
      {
        // 클릭했을때 video by id
        path: "video/:id",
        element: <VideoById />,
      },
      {
        // 검색했을대 search keyword
        path: "search/:q",
        element: <SearchKeyword />,
      },
    ],
  },
]);
