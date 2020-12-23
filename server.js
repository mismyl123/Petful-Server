const app = require('./modules/app/app')
const port = process.env.PORT || 8000

app.use(cors({
  origin: CLIENT_ORIGIN
})
)

app.listen(port, () => {
  console.log(`[petful-server] Listening on ${ port }.`)
})