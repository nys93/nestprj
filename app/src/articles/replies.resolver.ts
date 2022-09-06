import { Query, Resolver } from '@nestjs/graphql';
import { RepliesService } from './replies.service';
import { Article } from './entities/article';
import { Reply } from './entities/reply';

@Resolver()
export class RepliesResolver {
    constructor(private repliesService : RepliesService){}

    @Query(() => [Article, Reply])
    public async replies(): Promise<Reply[]> {
    return await this.repliesService.getAllReplies();
  }
}