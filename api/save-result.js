const { createClient } = require('@supabase/supabase-js');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase env vars missing');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { name, score, total, answers } = req.body || {};
    if (!name || typeof score !== 'number' || typeof total !== 'number' || !Array.isArray(answers)) {
      return res.status(400).json({ error: 'Invalid payload: name, score, total, answers required' });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from('quiz_results').insert({
      name: String(name).trim().slice(0, 100),
      score,
      total,
      answers: answers,
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: 'Failed to save result' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('save-result error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};
