const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: "secret_1O7k62JgrQB9RhOJWRXyx1wxutILh5tAotevFWTytJk",
})

export async function GET() {
  const data = await notion.databases.query({ database_id: "e72cc6214e2443458b0d5d111d2aa9fd" });

 
  return Response.json({ data })
}