import { Comment } from "./comment.model";
import { Like } from "./likes.model";

export interface Feed {
  id: number;
  authorId: number;
  image: string;
  price: Price;
  title: string;
  likes: Likes;
  comments: Comments;
}

interface Comments {
  count: number;
  items: Array<Comment["id"]>;
}

interface Price {
  value: number;
  currency: string;
}

interface Likes {
  count: number;
  yourLiked: true;
  items: Array<Like["id"]>;
}
