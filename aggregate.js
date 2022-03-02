const fs = require('fs')
const process = require('process')
const path = require('path')

const dir = process.argv[2]

console.log('Checking dir: ', dir)

const manifest = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json')))
const filePaths = manifest.map((entry) => entry.jsonPath)

const scores = {
  ttb: 0,
  tti: 0
}

filePaths.forEach((path) => {
  const data = JSON.parse(fs.readFileSync(path));
  const perf = data['audits']
  const ttb = perf['total-blocking-time'].numericValue
  const tti = perf['interactive'].numericValue
  scores.ttb += ttb
  scores.tti += tti
})

Object.keys(scores).forEach((key) => {
  scores[key] = scores[key]/filePaths.length
})

console.log('Scores: ', scores)
