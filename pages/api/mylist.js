import mongoClient from 'server/mongoDb';
import withAuth from 'server/withAuth';

// import { randomUUID } from 'crypto';
// import { getPassHash } from 'server/hash';
// import { validateSignUpUserEmail, validateSignUpUserPassword } from 'utils/validateFormInputs';

export default async function handler(req, res) {
  const client = await mongoClient;
  const db = client.db(process.env.MONGODB_DB);

  if (req.method == 'GET') {
    // TODO zwraca całą listę
    // const list = db.collection('user_lists').find({});
    // const list = (await db.collection('user_lists').find({}, { limit: 1 }).toArray())[0];
    const list = await db.collection('user_lists').find({}).toArray();

    return res.status(200).json(list);
  }
}
