// https://nextjs.org/docs/api-routes/api-middlewares
// https://nextjs.org/docs/api-routes/dynamic-api-routes
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

export default (req, res) => {
  res.status(200).json({ text: 'Hello' })
}
