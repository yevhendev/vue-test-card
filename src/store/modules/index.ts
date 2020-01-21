import { getModule } from "vuex-module-decorators";

import { FeedModule } from "./feed.module";
import { UsersModule } from "./users.module";
import { LikesModule } from "./likes.module";
import { CommentsModule } from "./comment.module";

export const feedModule = getModule(FeedModule);
export const usersModule = getModule(UsersModule);
export const likesModule = getModule(LikesModule);
export const commentsModule = getModule(CommentsModule);
