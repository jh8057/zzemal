{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  type VideoMetadata = Pick<Video, "id" | "title">;
  function getVideo1(id: string): Video {
    return {
      id,
      title: "video",
      url: "https",
      data: "data",
    };
  }
  function getVideoMetadata1(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
