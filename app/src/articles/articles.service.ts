import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/article';

@Injectable()
export class ArticlesService {

    constructor(
        @InjectRepository(Article) private aritcleRepository: Repository<Article>,
      ) {}
    
      public async getAllArticles(): Promise<Article[]> {
        const articles: Article[] = await this.aritcleRepository.find({
          relations: ['replies']
        });
        console.log(JSON.stringify(articles));
    
        // Nest.jsにはエラーハンドリング用のクラスがありその1つを利用しています
        // 
        if (!articles) throw new NotFoundException();
    
        return articles;
      }

}
