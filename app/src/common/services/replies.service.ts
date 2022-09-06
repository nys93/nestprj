import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reply } from '../entities/reply';

@Injectable()
export class RepliesService {

    constructor(
        @InjectRepository(Reply) private repliesRepository: Repository<Reply>,
      ) {}
    
      public async getAllReplies(): Promise<Reply[]> {
        const replies: Reply[] = await this.repliesRepository.find();
        if (!replies) throw new NotFoundException();
        return replies;
      }

}
