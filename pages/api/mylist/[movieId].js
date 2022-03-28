import withAuth from 'server/withAuth';
import { updateMyList } from 'server/services/myListClient';

async function handler(req, res) {
  try {
    const movie = await updateMyList(req);
    if (!movie) {
      return res.status(200).json();
    }
    return res.status(200).json();
  } catch (e) {
    const message = e.response ? await e.response.text() : e.message;
    return res.status(400).json(message);
  }
}
export default withAuth(handler);
