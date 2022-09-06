import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesResolver} from './resolvers/articles.resolver';
import { ArticlesService } from './services/articles.service';
import { RepliesResolver} from './resolvers/replies.resolver';
import { RepliesService } from './services/replies.service';
import { Article } from './entities/article';
import { Reply } from './entities/reply';

@Module({
  imports: [TypeOrmModule.forFeature([Article, Reply])],
  providers: [ArticlesService, ArticlesResolver, RepliesResolver, RepliesService],
  exports: [ArticlesService, RepliesService],
})
export class ArticlesModule {}
