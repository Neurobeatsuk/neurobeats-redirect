export default function handler(req, res) {
  const { code, error } = req.query;

  if (code) {
    res.send(`Success! Copy this URL and paste it into Colab: ${req.url}`);
  } else if (error) {
    res.send(`Error: ${error}`);
  } else {
    res.send('No code or error found.');
  }
}
