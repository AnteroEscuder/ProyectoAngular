export interface Song {
  id: number;
  title: string;
  artist: {
    name: string;
    picture: string;
  };
  album: {
    title: string;
    cover: string;
  };
  duration: number;
  preview: string;
}
