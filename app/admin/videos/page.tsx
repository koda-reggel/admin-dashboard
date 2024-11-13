import VideoList from "./_sections/video-list";
import VideoNavbar from "./_sections/video-navbar";
import Providers from "./_sections/providers";
import { indexVideos } from "@/actions/video-action";

export default async function Page() {
  const videos = await indexVideos();

  return (
    <Providers videos={videos.data}>
      <div className="w-full bg-black">
        <VideoNavbar />
        <VideoList />
      </div>
    </Providers>
  );
}
