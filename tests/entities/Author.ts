import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Book from './Book'

@Entity()
export default class Author {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @OneToMany(() => Book, book => book.author)
  books?: Book[]
}
