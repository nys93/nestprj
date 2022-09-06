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
  id: number;

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

  @Field((type) => [Reply])
  @OneToMany((type) => Reply, (replies) => replies.article)
  replies: Reply[]
}