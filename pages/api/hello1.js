export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe', message: 'Hello world... 1' })
}
