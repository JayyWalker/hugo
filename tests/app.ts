import main, {FixtureDefinition, relationship} from '../src/main'
import {v5 as uuid} from 'uuid'
import * as path from 'path'

const authors: FixtureDefinition = {
  entity: 'Author',
  items: [
    {
      id: uuid('George R.R. Martin', uuid.URL),
      name: 'George R.R. Martin',
    },
    {
      id: uuid('Brandon Sanderson', uuid.URL),
      name: 'Brandon Sanderson',
    },
  ],
}

const books: FixtureDefinition = {
  entity: 'Book',
  items: [
    {
      id: uuid('Hello', uuid.URL),
      title: 'Game of Thrones',
      author: relationship('author1'),
    },
  ],
}

main(
  path.resolve(__dirname),
 [
   authors,
   books,
 ]
)