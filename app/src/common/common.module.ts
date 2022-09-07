import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesResolver} from './resolvers/articles.resolver';
import { ArticlesService } from './services/articles.service';
import { Article } from './entities/article';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticlesService, ArticlesResolver],
  exports: [ArticlesService],
})
export class ArticlesModule {}
