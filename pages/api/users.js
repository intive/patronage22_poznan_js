export default function handler(req, res) {
    res.status(200).json([{ id: 1, username: 'Grażyna' }, { id: 2, username: 'Kasia'}]);
  }