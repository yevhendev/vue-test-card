import { Feed } from "./feed.model";
import { User } from "./user.model";

export interface Comment {
  id: number;
  body: string;
  feedId: Feed["id"];
  userId: User["id"];
}
