import { Query, Resolver } from '@nestjs/graphql';
import { RepliesService } from '../services/replies.service';
import { Reply } from '../entities/reply';

@Resolver()
export class RepliesResolver {
    constructor(private repliesService : RepliesService){}

    @Query(() => [Reply])
    public async replies(): Promise<Reply[]> {
      return await this.repliesService.getAllReplies();
    }
}