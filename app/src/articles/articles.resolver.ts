import { Query, Resolver } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { Article } from './entities/article';
import { Reply } from './entities/reply';

@Resolver()
export class ArticlesResolver {
    constructor(private articlesService : ArticlesService){}

    @Query(() => [Article, Reply])
    public async articles(): Promise<Article[]> {
    return await this.articlesService.getAllArticles();
  }
}