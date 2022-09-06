import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesResolver} from './articles.resolver';
import { ArticlesService } from './articles.service';
import { RepliesResolver} from './replies.resolver';
import { RepliesService } from './replies.service';
import { Article } from './entities/article';
import { Reply } from './entities/reply';
// import { ArticleDTO } from './articles.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Article, Reply])],
  providers: [ArticlesService, ArticlesResolver, RepliesResolver, RepliesService],
  exports: [ArticlesService, RepliesService],
})
export class ArticlesModule {}
