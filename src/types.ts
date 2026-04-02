export interface User {
  id: string;
  username: string;
  avatar: string;
  isVerified?: boolean;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  likes: number;
  caption: string;
  timestamp: string;
  commentsCount: number;
}

export interface Story {
  id: string;
  user: User;
  isViewed: boolean;
}
