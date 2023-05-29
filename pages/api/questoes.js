import productsData from '../../data/questoes.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Retorna os produtos mockados em formato JSON
    res.status(200).json(productsData);
  } else {
    // Retorna um erro para qualquer outro método HTTP
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
