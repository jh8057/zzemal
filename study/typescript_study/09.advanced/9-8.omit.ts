{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  //   pick과 반대로 명시한 것을 빼준다
  type VideoMetadata = Omit<Video, "url" | "data">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https",
      data: "data",
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
