import { IncomingMessage, ServerResponse } from "http";
import DB from '@database'

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = DB()
  const allEntries = await db.getAll()

  res.statusCode = 200
  res.setHeader({ 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ hello: 'world' }))
}

export default allAvos