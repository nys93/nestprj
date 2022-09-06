import { Query, Resolver } from '@nestjs/graphql';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../entities/article';

@Resolver()
export class ArticlesResolver {
    constructor(private articlesService : ArticlesService){}

    @Query(() => [Article])
    public async articles(): Promise<Article[]> {
      const articles: Article[] = await this.articlesService.getAllArticles();
      return articles;
    }
}