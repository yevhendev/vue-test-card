import { Feed } from "./feed.model";
import { User } from "./user.model";

export interface Like {
  id: number;
  feedId: Feed["id"];
  userId: User["id"];
}
