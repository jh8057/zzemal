{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; //for...in
  };

  type VideoOptional = Optional<Video>;
  type ReadOnly<T> = {
    readonly [P in keyof T]?: T[P];
  };
  type VideoReadOnly = ReadOnly<Video>;

  const read: VideoReadOnly = {
    title: "Aasd",
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // type VideoReadonly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: "string",
  };
  console.log(obj2);
}
