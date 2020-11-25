import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Author from './Author'

@Entity()
export default class Book {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column('varchar')
  title!: string

  @CreateDateColumn()
  createdAt?: Date

  @ManyToOne(() => Author, author => author.books)
  author?: Author
}
