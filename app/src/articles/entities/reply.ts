import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Article } from './article';

@Entity({ name: 'replies' })
@ObjectType()
export class Reply {
  @Field()
  articleId: number;

  @PrimaryGeneratedColumn()
  @Field()
  replyId: number;

  @Column()
  @Field()
  writer: string;

  @Column()
  @Field()
  content: string;

  @CreateDateColumn()
  @Column({ type: 'date' })
  @Field()
  registDate: string;

  @ManyToOne(() => Article, article => article.replies)
  article: Article

//   @ManyToOne(() => Article)
//   @JoinColumn({ name: 'article_id' })
//   articles: Article[];
}