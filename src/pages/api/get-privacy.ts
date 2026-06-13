import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // The server fetches the raw RSS feed directly from Blogger without browser restrictions
    const response = await fetch('https://bhaktiwithekta.blogspot.com/feeds/pages/default');
    
    if (!response.ok) {
      return res.status(500).json({ error: 'Failed to fetch from Blogger server' });
    }

    const xmlText = await response.text();
    
    // Send the clean XML data directly back to your component
    res.setHeader('Content-Type', 'text/xml');
    return res.status(200).send(xmlText);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server connection error' });
  }
}