import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Reply } from './reply';

@Entity({ name: 'articles' })
@ObjectType()
export class Article {
  @PrimaryGeneratedColumn()
  @Field()
  articleId: number;

  @Column()
  @Field()
  writer: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  content: string;

  @CreateDateColumn()
  @Column({ type: 'date' })
  @Field()
  registDate: string;

  @UpdateDateColumn()
  @Column({ type: 'date' })
  @Field()
  updateDate: string;

  @Column({ type: 'date' })
  @Field()
  deleteDate: string;

  @OneToMany(() => Reply, reply => reply.article)
  replies?: Reply[]
}