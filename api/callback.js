export default function handler(req, res) {
  const { code } = req.query;
  res.redirect(`https://colab.research.google.com/?code=${code}`);
}
