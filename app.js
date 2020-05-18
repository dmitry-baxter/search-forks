const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const github = require('octonode')

const PORT = process.env.PORT || 4000
const app = express()
const router = express.Router()
const githubClient = github.client({
  id: 'Iv1.b56231b69c6e58a3',
  secret: 'd3b567ed105c699db8721d089749169e7f69696d'
})

app.use(cors())
app.use(bodyParser.json())

router.get('/get-forks', async (req, res) => {
  try {
    const FORKS_PER_PAGE = 15
    const query = req.query
    if (query.owner && query.repository) {
      Promise.all([
        githubClient.getAsync(`/repos/${query.owner}/${query.repository}`),
        githubClient.getAsync(`/repos/${query.owner}/${query.repository}/forks`, {
          sort: 'stargazers', per_page: FORKS_PER_PAGE, page: query.page || 1
        })
      ]).then(([repository, forks]) => {
        const { forks_count } = repository[1]
        const pages = Math.ceil(forks_count / FORKS_PER_PAGE)
        const data = forks[1].map(({id, name, owner: { login }, stargazers_count, html_url}) => {
          return {
            id,
            repositoryName: name,
            owner: login,
            stars: stargazers_count,
            link: html_url
          }
        })
        res.status(200).json({ status: 'success', data, pages })
      }).catch(() => res.status(200).json({ status: 'success', data: [], pages: 0 }))
    } else {
      res.status(503).json({ status: 'error', message: 'Invalid format' })
    }
  } catch (err) {
    res.status(500).json({ status: 'error', message: "Operation failed" })
  }
})

app.use('/api', router)


app.listen(PORT, () => {
  console.log(`Server is running on port ${ PORT }...`)
})

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
