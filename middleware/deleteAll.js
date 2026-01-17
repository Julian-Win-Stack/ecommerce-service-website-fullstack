import { getDBConnection } from "../db/db.js";
export async function deleteAll(req, res, next) {

  const db = await getDBConnection()

  await db.run('DELETE FROM cart_items WHERE user_id = ?', [req.session.userId])

  next();
  
}