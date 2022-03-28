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
      const message = e.response ? await e.response.text() : e.message;
      return res.status(400).json(message);
    }
  }
}
export default withAuth(handler);
