import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
  
    switch (method) {
      case 'GET':
        res.json({ message: 'GETリクエスト' });
        break;
      case 'POST':
        res.json({ message: 'POSTリクエスト' });
        break;
      case 'PATCH':
        res.json({ message: 'PATCHリクエスト' });
        break;
      default:
        res.json({ message: 'GET/POST/PATCHでもないリクエストです。' });
        break;
    }
  }