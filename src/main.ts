import {getConnection} from 'typeorm'
// @ts-ignore
import createTypeormConnection from './createTypeormConnection'

export type FixtureDefinition = {
  entity: string,
  items: object[],
}

export function relationship (reference: string) {
  // const regex = /^(\w+)(\d+)$/
  //
  // const matched = reference.match(regex)
  //

  return {
    type: 'relationship',
    entity: 'Author',
    reference,
  }
}

const processItem = (item: object) => {
  // TODO: Be more strict with these types
  let processedItem: {[index: string]: any} = {}

  for (const [key, value] of Object.entries(item)) {
    let newValue = value

    if (typeof value === 'object') {
      if (value.type === 'relationship') {
        newValue = null
      }
    }

    processedItem[key] = newValue
  }

  return processedItem
}

const loadFixtures = async (fixtures: FixtureDefinition[]) => {
  const connection = getConnection()

  for (const fixture of fixtures) {
    // @ts-ignore
    const repository = connection.getRepository(fixture.entity)

    for (const fixtureItem of fixture.items) {
      const processedItem = processItem(fixtureItem)

      console.log(processedItem)
      // await repository.save(fixtureItem)
    }
  }
}

// @ts-ignore
const main = async (typeormConfigPath: string, fixtures: FixtureDefinition[]) => {
  try {
    await createTypeormConnection({
      root: typeormConfigPath
    })

    await loadFixtures(fixtures)

    process.exit(0)
  } catch (err) {
    console.log(err)

    await getConnection().close()
    process.exit(1)
  }
}

export default main
