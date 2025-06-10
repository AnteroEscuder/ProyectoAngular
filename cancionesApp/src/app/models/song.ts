export interface Song {
  fav: boolean;
  id: number;
  title: string;
  artist: {
    id: number;
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
