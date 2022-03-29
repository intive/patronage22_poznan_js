import withAuth from 'server/withAuth';
import { getMyList } from 'server/services/myListClient';

async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const list = await getMyList(req);
      if (!list) {
        return res.json([]);
      }
      return res.status(200).json(list);
    } catch (e) {
      return res.status(200).json([]);
    }
  }
}
export default withAuth(handler);
