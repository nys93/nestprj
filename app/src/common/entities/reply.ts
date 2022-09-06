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
  id: number;

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

  @ManyToOne((type) => Article, (article) => article.replies)
  @Field((type) => Article)
  article: Article
}