import { Query, Resolver } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { Article } from './entities/article';
import { Reply } from './entities/reply';
import { Field, ObjectType } from '@nestjs/graphql';

@Resolver()
export class ArticlesResolver {
    constructor(private articlesService : ArticlesService){}

    @Query(() => [Article])
    public async articles(): Promise<Article[]> {
      const articles: Article[] = await this.articlesService.getAllArticles();
      return articles;
    }
}