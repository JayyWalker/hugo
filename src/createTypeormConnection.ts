import {Connection, ConnectionOptions, ConnectionOptionsReader, createConnection} from 'typeorm'

export type ConnectionConfig = {
  root?: string
  configName?: string
}

export default async function createTypeormConnection(config: ConnectionConfig, connectionName: string = 'default'): Promise<Connection> {
  const connectionsReader: ConnectionOptionsReader = await new ConnectionOptionsReader(config)

  const options: ConnectionOptions = await connectionsReader.get(connectionName)

  return createConnection(options)
}
