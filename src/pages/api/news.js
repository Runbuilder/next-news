import Airtable from 'airtable';

export default async function handler(req, res) {
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

  try {
    const records = await base(process.env.AIRTABLE_TABLE_NAME).select({view: 'Grid view'}).firstPage();
    const data = records.map(record => ({
      id: record.id,
      ...record.fields
    }));
    res.status(200).json(data);
  } catch (error) {
    console.error('Airtable 에러:', error);
    res.status(500).json({ error: '데이터를 가져오는 중 오류가 발생했습니다.' });
  }
}