// only do the following import if you require your script to interact with the windmill
// for instance to get a variable or resource
import * as wmill from 'https://deno.land/x/windmill@v1.28.1/mod.ts'
import { Client } from "https://deno.land/x/postgres@v0.16.1/mod.ts";

export async function main(
  db: wmill.Resource<"postgresql">,
) {
  let query: wmill.Sql = "CREATE TABLE IF NOT EXISTS users ( \
    username varchar(255), \
    email varchar(255), \
    banned boolean, \
    ban_reason varchar(255) );"

  db.database = db.dbname;
  db.hostname = db.host;
  const client = new Client(db);

  const returned_query = await client.queryObject(query);

  return returned_query;
}